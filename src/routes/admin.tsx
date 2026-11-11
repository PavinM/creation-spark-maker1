import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import {
  LayoutDashboard,
  Package,
  ShoppingBag,
  Users,
  AlertTriangle,
  CheckCircle2,
  Truck,
  Tag,
  Building2,
  Settings,
  TrendingUp,
  Search,
  Filter,
  Edit,
  Save,
  Plus,
  RefreshCw,
  ExternalLink,
  ChevronDown,
  Mail,
  Send,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  COMPANY_OWNER_EMAIL,
  OrdersStore,
  WholesaleStore,
  StockStore,
  brandsList,
  products,
  defaultShippingZones,
  activeCoupons,
  type Order,
  type OrderStatus,
  type WholesaleEnquiry,
  type Product,
} from "@/lib/content";
import {
  getEmailNotificationStatusFn,
  submitBookingEmailFn,
  type EmailConfigStatus,
} from "@/lib/booking-server";

export const Route = createFileRoute("/admin")({
  head: () => ({
    meta: [
      { title: "E-Commerce Admin Dashboard | Kids Korner Platform" },
      {
        name: "description",
        content:
          "Management console for brands, variant inventory, customer orders, and wholesale leads.",
      },
    ],
  }),
  component: AdminDashboardPage,
});

function AdminDashboardPage() {
  const [activeSection, setActiveSection] = useState<
    "overview" | "orders" | "inventory" | "brands" | "shipping" | "wholesale" | "coupons"
  >("overview");

  const [orders, setOrders] = useState<Order[]>(() => OrdersStore.getOrders());
  const [wholesaleLeads, setWholesaleLeads] = useState<WholesaleEnquiry[]>(() =>
    WholesaleStore.getEnquiries(),
  );
  const [productList, setProductList] = useState<Product[]>(products);
  const [shippingZones, setShippingZones] = useState(defaultShippingZones);
  const [freeShipThreshold, setFreeShipThreshold] = useState(999);

  // Order status filter
  const [orderStatusFilter, setOrderStatusFilter] = useState<string>("All");
  const [orderSearch, setOrderSearch] = useState("");

  // Edit Tracking State
  const [editingOrderId, setEditingOrderId] = useState<string | null>(null);
  const [editStatus, setEditStatus] = useState<OrderStatus>("Confirmed");
  const [editTracking, setEditTracking] = useState("");
  const [editCourier, setEditCourier] = useState("ST Courier Express");

  // Stock edit state
  const [stockUpdatedMsg, setStockUpdatedMsg] = useState<string | null>(null);

  const [stockVersion, setStockVersion] = useState(0);
  const [emailStatus, setEmailStatus] = useState<EmailConfigStatus | null>(null);
  const [testEmailState, setTestEmailState] = useState<{ loading: boolean; msg: string }>({
    loading: false,
    msg: "",
  });

  useEffect(() => {
    getEmailNotificationStatusFn()
      .then((res) => setEmailStatus(res))
      .catch(() => setEmailStatus(null));

    const handleOrders = () => setOrders(OrdersStore.getOrders());
    const handleStock = () => setStockVersion((v) => v + 1);
    window.addEventListener("orders-updated", handleOrders);
    window.addEventListener("stock-updated", handleStock);
    return () => {
      window.removeEventListener("orders-updated", handleOrders);
      window.removeEventListener("stock-updated", handleStock);
    };
  }, []);

  const handleSendTestEmail = async () => {
    const sampleOrder = orders[0] || {
      id: "test_1",
      orderNumber: "BK-TEST-001",
      date: new Date().toISOString(),
      status: "Stock Reserved" as const,
      items: [
        {
          productId: "kids-korner-dinosaur-tee",
          productSlug: "kids-korner-dinosaur-tee",
          productName: "Kids Korner Dinosaur Printed T-Shirt",
          brandName: "Kids Korner",
          sku: "KK-DINO-RED-4Y",
          size: "4–5Y",
          colour: "Classic Red",
          image: "/assets/boys-tee.jpg",
          price: 499,
          mrp: 799,
          quantity: 1,
        },
      ],
      totalMrp: 799,
      subtotal: 499,
      discount: 0,
      shippingFee: 39,
      shippingZone: "Local Delivery",
      taxableValue: 475.24,
      tax: 23.76,
      total: 538,
      shippingAddress: {
        id: "addr_test",
        fullName: "Test Customer",
        phone: "+91 98401 23456",
        email: COMPANY_OWNER_EMAIL,
        addressLine1: "42, Avinashi Road",
        city: "Tirupur",
        state: "Tamil Nadu",
        pinCode: "641602",
        addressType: "Home" as const,
      },
      paymentMethod: "Stock Reservation (No Online Payment)",
      paymentStatus: "Stock Reserved for Customer",
    };

    setTestEmailState({ loading: true, msg: "" });
    try {
      const resp = await submitBookingEmailFn({ data: { order: sampleOrder } });
      setTestEmailState({
        loading: false,
        msg: resp.emailSentByServer
          ? `✓ ${resp.message}`
          : `⚠ Server env key not configured yet — ${resp.message}`,
      });
    } catch {
      setTestEmailState({ loading: false, msg: "Failed to trigger test server call." });
    }
  };

  // Metric Computations
  const totalRevenue = orders
    .filter((o) => o.status !== "Cancelled")
    .reduce((sum, o) => sum + o.total, 0);
  const totalOrdersCount = orders.length;
  const pendingOrdersCount = orders.filter(
    (o) => o.status !== "Delivered" && o.status !== "Cancelled",
  ).length;
  const deliveredOrdersCount = orders.filter((o) => o.status === "Delivered").length;

  // Inventory Metrics (reading live StockStore overrides)
  let totalVariantsCount = 0;
  let lowStockVariantsCount = 0;
  let outOfStockVariantsCount = 0;

  void stockVersion;
  productList.forEach((p) => {
    p.variants?.forEach((v) => {
      totalVariantsCount++;
      const live = StockStore.getVariantStock(v.id, v.stock);
      if (live === 0) outOfStockVariantsCount++;
      else if (live <= 5) lowStockVariantsCount++;
    });
  });

  const handleUpdateOrderStatus = (orderId: string) => {
    OrdersStore.updateStatus(orderId, editStatus, editTracking, editCourier);
    setOrders(OrdersStore.getOrders());
    setEditingOrderId(null);
  };

  const handleAdjustStock = (variantId: string, defaultStock: number, delta: number) => {
    const current = StockStore.getVariantStock(variantId, defaultStock);
    const next = Math.max(0, current + delta);
    StockStore.setVariantStock(variantId, next);
    setStockUpdatedMsg(`Stock updated to ${next} units for variant ${variantId}`);
    setTimeout(() => setStockUpdatedMsg(null), 2500);
  };

  const filteredOrders = orders.filter((o) => {
    if (orderStatusFilter !== "All" && o.status !== orderStatusFilter) return false;
    if (orderSearch.trim()) {
      const q = orderSearch.toLowerCase();
      const matchNo = o.orderNumber.toLowerCase().includes(q);
      const matchCust = o.shippingAddress.fullName.toLowerCase().includes(q);
      const matchEmail = o.shippingAddress.email.toLowerCase().includes(q);
      const matchCity = o.shippingAddress.city.toLowerCase().includes(q);
      if (!matchNo && !matchCust && !matchEmail && !matchCity) return false;
    }
    return true;
  });

  return (
    <div className="bg-[#EAE6DE] text-[#252525] min-h-screen pt-28 pb-20">
      <div className="page-shell">
        {/* Admin Header */}
        <div className="border-b border-[#226192]/20 pb-5 mb-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-none bg-[#EF8557] px-2 py-0.5 text-[10px] font-bold text-[#FFFFFF] uppercase">
                Owner Stock & Booking Console
              </span>
              <span className="text-xs font-mono text-[#226192] font-bold">
                Notifications Inbox: {COMPANY_OWNER_EMAIL}
              </span>
            </div>
            <h1 className="mt-1 font-['Space_Grotesk'] text-2xl sm:text-3xl font-extrabold uppercase text-[#226192]">
              Muthu International — Stock & Bookings Dashboard
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 border border-[#226192] px-3.5 py-1.5 text-xs font-bold uppercase text-[#226192] hover:bg-[#226192] hover:text-[#FFFFFF] transition-colors"
            >
              <span>View Live Storefront</span>
              <ExternalLink className="size-3" />
            </Link>
          </div>
        </div>

        {/* Console Nav Tabs */}
        <div className="flex flex-wrap items-center gap-2 border-b border-[#226192]/20 pb-4 mb-8">
          {[
            { id: "overview", label: "Business Metrics", icon: LayoutDashboard },
            { id: "orders", label: `Stock Bookings (${orders.length})`, icon: ShoppingBag },
            { id: "inventory", label: "Variant Inventory", icon: Package },
            { id: "brands", label: "Brands Manager", icon: Building2 },
            { id: "shipping", label: "Geo-Shipping Engine", icon: Truck },
            {
              id: "wholesale",
              label: `Wholesale Leads (${wholesaleLeads.length})`,
              icon: TrendingUp,
            },
            { id: "coupons", label: "Coupons & Promos", icon: Tag },
          ].map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              type="button"
              onClick={() =>
                setActiveSection(
                  id as
                    | "overview"
                    | "orders"
                    | "inventory"
                    | "brands"
                    | "shipping"
                    | "wholesale"
                    | "coupons",
                )
              }
              className={`flex items-center gap-2 px-3.5 py-2 text-xs font-bold uppercase tracking-wider transition-all ${
                activeSection === id
                  ? "bg-[#226192] text-[#FFFFFF]"
                  : "border border-[#226192]/20 bg-[#FFFFFF] text-[#226192] hover:border-[#EF8557]"
              }`}
            >
              <Icon className="size-3.5" />
              <span>{label}</span>
            </button>
          ))}
        </div>

        {/* ═══ 1. OVERVIEW & METRICS ═══ */}
        {activeSection === "overview" && (
          <div className="space-y-8">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <div className="border border-[#226192]/20 bg-[#FFFFFF] p-5 shadow-sm">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#EF8557]">
                  Total Reserved Booking Value
                </span>
                <p className="font-['Space_Grotesk'] text-3xl font-extrabold text-[#226192] mt-1">
                  ₹{totalRevenue.toLocaleString("en-IN")}
                </p>
                <span className="text-[11px] text-emerald-700 font-semibold mt-1 block">
                  Across {totalOrdersCount} customer stock reservations
                </span>
              </div>

              <div className="border border-[#226192]/20 bg-[#FFFFFF] p-5 shadow-sm">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#EF8557]">
                  Active Stock Bookings
                </span>
                <p className="font-['Space_Grotesk'] text-3xl font-extrabold text-[#226192] mt-1">
                  {totalOrdersCount}
                </p>
                <span className="text-[11px] text-[#252525]/70 mt-1 block">
                  {pendingOrdersCount} held / in transit · {deliveredOrdersCount} completed
                </span>
              </div>

              <div className="border border-[#226192]/20 bg-[#FFFFFF] p-5 shadow-sm">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#EF8557]">
                  Inventory Health
                </span>
                <p className="font-['Space_Grotesk'] text-3xl font-extrabold text-[#226192] mt-1">
                  {totalVariantsCount} SKUs
                </p>
                <span className="text-[11px] text-amber-600 font-bold mt-1 block">
                  {lowStockVariantsCount} low stock alerts · {outOfStockVariantsCount} out of stock
                </span>
              </div>

              <div className="border border-[#226192]/20 bg-[#FFFFFF] p-5 shadow-sm">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#EF8557]">
                  Wholesale B2B Inquiries
                </span>
                <p className="font-['Space_Grotesk'] text-3xl font-extrabold text-[#226192] mt-1">
                  {wholesaleLeads.length} Leads
                </p>
                <span className="text-[11px] text-emerald-700 font-semibold mt-1 block">
                  Boutique retailers & regional MBOs
                </span>
              </div>
            </div>

            {/* Brand-Wise Sales Performance */}
            <div className="border border-[#226192]/20 bg-[#FFFFFF] p-6 shadow-sm">
              <h3 className="font-['Space_Grotesk'] text-lg font-bold uppercase text-[#226192] border-b border-[#226192]/10 pb-3">
                Brand-Wise Product & Sales Distribution
              </h3>
              <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {brandsList.map((b) => {
                  const brandStyles = productList.filter((p) => p.brandId === b.id);
                  return (
                    <div key={b.id} className="border border-[#226192]/15 bg-[#EAE6DE]/30 p-4">
                      <span className="rounded-none bg-[#226192] text-[#FFFFFF] px-2 py-0.5 text-[9px] font-bold uppercase">
                        {b.badge}
                      </span>
                      <h4 className="font-['Space_Grotesk'] text-base font-bold text-[#226192] mt-2">
                        {b.name}
                      </h4>
                      <p className="text-xs text-[#252525]/75 mt-0.5 line-clamp-1">{b.tagline}</p>
                      <div className="mt-3 border-t border-[#226192]/10 pt-2 text-xs space-y-1">
                        <p>
                          ✦ Active Styles: <strong>{brandStyles.length}</strong>
                        </p>
                        <p>
                          ✦ Production: <strong>Tirupur Line A & B</strong>
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Owner Email Notification Status & Quick Test */}
            <div className="border border-[#226192]/20 bg-[#FFFFFF] p-6 shadow-sm space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#226192]/10 pb-3">
                <div className="flex items-center gap-2.5">
                  <Mail className="size-5 text-[#EF8557]" />
                  <div>
                    <h3 className="font-['Space_Grotesk'] text-lg font-bold uppercase text-[#226192]">
                      Automated Owner Email Notifications ({COMPANY_OWNER_EMAIL})
                    </h3>
                    <p className="text-xs text-[#252525]/70">
                      Status:{" "}
                      {emailStatus?.configured ? (
                        <strong className="text-emerald-700">
                          ✓ Active via {emailStatus.provider}
                        </strong>
                      ) : (
                        <strong className="text-amber-700">
                          Manual mailto mode (Add a free key in .env.local for automatic delivery)
                        </strong>
                      )}
                    </p>
                  </div>
                </div>

                <Button
                  type="button"
                  onClick={handleSendTestEmail}
                  disabled={testEmailState.loading}
                  className="rounded-none bg-[#226192] text-xs font-bold uppercase text-[#FFFFFF] hover:bg-[#EF8557]"
                >
                  <Send className="size-3.5 mr-1.5" />
                  <span>{testEmailState.loading ? "Testing..." : "Send Test Email"}</span>
                </Button>
              </div>

              {testEmailState.msg && (
                <div className="border border-[#226192]/20 bg-[#EAE6DE]/50 p-3 text-xs font-semibold text-[#226192]">
                  {testEmailState.msg}
                </div>
              )}

              <div className="grid gap-4 sm:grid-cols-2 text-xs">
                <div className="border border-[#226192]/15 bg-[#EAE6DE]/30 p-4 space-y-1">
                  <span className="font-bold text-[#226192] uppercase block">
                    Option A — Google Apps Script (Free, Uses Your Gmail)
                  </span>
                  <p className="text-[#252525]/80">
                    Deploy a free Web App at <strong>script.google.com</strong> logged in as{" "}
                    <strong>{COMPANY_OWNER_EMAIL}</strong> and add{" "}
                    <code className="bg-[#FFFFFF] px-1">BOOKING_WEBHOOK_URL=...</code> to{" "}
                    <code className="bg-[#FFFFFF] px-1">.env.local</code>.
                  </p>
                </div>
                <div className="border border-[#226192]/15 bg-[#EAE6DE]/30 p-4 space-y-1">
                  <span className="font-bold text-[#226192] uppercase block">
                    Option B — Resend API (Free 3,000 Emails / Month)
                  </span>
                  <p className="text-[#252525]/80">
                    Sign up at <strong>resend.com</strong> using{" "}
                    <strong>{COMPANY_OWNER_EMAIL}</strong>, create an API key, and add{" "}
                    <code className="bg-[#FFFFFF] px-1">RESEND_API_KEY=re_...</code> to{" "}
                    <code className="bg-[#FFFFFF] px-1">.env.local</code>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ═══ 2. ORDER MANAGEMENT ═══ */}
        {activeSection === "orders" && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 border-b border-[#226192]/10 pb-4">
              <div className="flex items-center gap-2 max-w-sm flex-1">
                <Input
                  type="text"
                  placeholder="Search booking #, email, customer, city..."
                  value={orderSearch}
                  onChange={(e) => setOrderSearch(e.target.value)}
                  className="h-9 rounded-none text-xs"
                />
              </div>

              <div className="flex items-center gap-2 text-xs">
                <span className="font-semibold text-[#252525]/70">Status:</span>
                <select
                  value={orderStatusFilter}
                  onChange={(e) => setOrderStatusFilter(e.target.value)}
                  className="h-9 border border-[#226192]/30 bg-[#FFFFFF] px-3 font-bold text-[#226192]"
                >
                  <option value="All">All Statuses</option>
                  <option value="Booking Placed">Booking Placed</option>
                  <option value="Stock Reserved">Stock Reserved</option>
                  <option value="Confirmed">Confirmed</option>
                  <option value="Processing">Processing</option>
                  <option value="Packed">Packed</option>
                  <option value="Shipped">Shipped</option>
                  <option value="Out for Delivery">Out for Delivery</option>
                  <option value="Delivered">Delivered</option>
                  <option value="Return Requested">Return Requested</option>
                </select>
              </div>
            </div>

            {/* Bookings Table */}
            <div className="overflow-x-auto border border-[#226192]/20 bg-[#FFFFFF] shadow-sm">
              <table className="w-full text-left text-xs">
                <thead className="bg-[#226192] text-[#FFFFFF] text-[10px] uppercase font-bold tracking-wider">
                  <tr>
                    <th className="p-3">Booking ID</th>
                    <th className="p-3">Customer & Email (ID)</th>
                    <th className="p-3">Reserved Items</th>
                    <th className="p-3">Total (Incl. GST)</th>
                    <th className="p-3">Booking Status</th>
                    <th className="p-3">Hold / Courier Ref</th>
                    <th className="p-3 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#226192]/10">
                  {filteredOrders.map((ord) => (
                    <tr key={ord.id} className="hover:bg-[#EAE6DE]/30">
                      <td className="p-3 font-mono font-bold text-[#226192]">
                        {ord.orderNumber}
                        <span className="block text-[10px] text-[#252525]/50 font-normal">
                          {new Date(ord.date).toLocaleDateString("en-IN")}
                        </span>
                      </td>

                      <td className="p-3">
                        <span className="font-semibold text-[#252525] block">
                          {ord.shippingAddress.fullName}
                        </span>
                        <span className="font-mono text-[10px] text-[#EF8557] font-semibold block">
                          {ord.shippingAddress.email}
                        </span>
                        <span className="text-[10px] text-[#252525]/70">
                          {ord.shippingAddress.phone} · {ord.shippingAddress.city} –{" "}
                          {ord.shippingAddress.pinCode}
                        </span>
                      </td>

                      <td className="p-3">
                        <span className="font-bold text-[#226192]">{ord.items.length} styles</span>
                        <span className="block text-[10px] text-[#252525]/70 truncate max-w-[200px]">
                          {ord.items
                            .map((i) => `${i.productName} (${i.colour}, ${i.size} x${i.quantity})`)
                            .join(", ")}
                        </span>
                      </td>

                      <td className="p-3 font-extrabold text-[#226192]">
                        ₹{ord.total}
                        <span className="block text-[10px] text-emerald-700 font-normal">
                          Incl. GST ₹{ord.tax}
                        </span>
                      </td>

                      <td className="p-3">
                        <span className="rounded-full bg-[#EF8557]/15 px-2.5 py-0.5 text-[10px] font-bold text-[#EF8557]">
                          {ord.status}
                        </span>
                      </td>

                      <td className="p-3 text-[11px]">
                        {ord.trackingNumber ? (
                          <div>
                            <span className="font-mono text-[#226192] font-semibold">
                              {ord.trackingNumber}
                            </span>
                            <span className="block text-[9px] text-[#252525]/60">
                              {ord.courierName}
                            </span>
                          </div>
                        ) : (
                          <span className="text-gray-400 italic">Not Assigned</span>
                        )}
                      </td>

                      <td className="p-3 text-right">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => {
                            setEditingOrderId(ord.id);
                            setEditStatus(ord.status);
                            setEditTracking(ord.trackingNumber || "");
                            setEditCourier(ord.courierName || "Muthu International Direct Hold");
                          }}
                          className="rounded-none border-[#226192] text-[10px] font-bold text-[#226192]"
                        >
                          Update Status
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Edit Booking Status Modal */}
            {editingOrderId && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#252525]/75 p-4 backdrop-blur-sm">
                <div className="w-full max-w-md border border-[#226192] bg-[#EAE6DE] p-6 shadow-2xl space-y-4">
                  <h3 className="font-['Space_Grotesk'] text-lg font-bold uppercase text-[#226192] border-b border-[#226192]/20 pb-2">
                    Update Stock Reservation Status
                  </h3>

                  <div>
                    <label className="block text-[10px] font-bold uppercase text-[#226192] mb-1">
                      Booking Status Flow *
                    </label>
                    <select
                      value={editStatus}
                      onChange={(e) => setEditStatus(e.target.value as OrderStatus)}
                      className="w-full h-9 border border-[#226192]/30 bg-[#FFFFFF] px-2 text-xs font-semibold text-[#226192]"
                    >
                      <option value="Booking Placed">Booking Placed</option>
                      <option value="Stock Reserved">Stock Reserved</option>
                      <option value="Confirmed">Confirmed</option>
                      <option value="Processing">Processing</option>
                      <option value="Packed">Packed</option>
                      <option value="Shipped">Shipped</option>
                      <option value="Out for Delivery">Out for Delivery</option>
                      <option value="Delivered">Delivered</option>
                      <option value="Cancelled">Cancelled</option>
                      <option value="Return Requested">Return Requested</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold uppercase text-[#226192] mb-1">
                      Hold / Courier Partner Name
                    </label>
                    <Input
                      value={editCourier}
                      onChange={(e) => setEditCourier(e.target.value)}
                      className="h-9 rounded-none text-xs"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold uppercase text-[#226192] mb-1">
                      Hold / Tracking Reference
                    </label>
                    <Input
                      value={editTracking}
                      onChange={(e) => setEditTracking(e.target.value)}
                      placeholder="e.g. RES-TRP-99012"
                      className="h-9 rounded-none text-xs font-mono"
                    />
                  </div>

                  <div className="flex justify-end gap-2 pt-3 border-t border-[#226192]/20">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setEditingOrderId(null)}
                      className="rounded-none text-xs"
                    >
                      Cancel
                    </Button>
                    <Button
                      size="sm"
                      onClick={() => handleUpdateOrderStatus(editingOrderId)}
                      className="rounded-none bg-[#226192] text-xs font-bold uppercase text-[#FFFFFF] hover:bg-[#EF8557]"
                    >
                      Save Status Update
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ═══ 3. VARIANT-LEVEL INVENTORY MANAGEMENT ═══ */}
        {activeSection === "inventory" && (
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-[#226192]/10 pb-4">
              <div>
                <h3 className="font-['Space_Grotesk'] text-lg font-bold uppercase text-[#226192]">
                  SKU & Variant Level Stock Controller
                </h3>
                <p className="text-xs text-[#252525]/75">
                  Track discrete size and colour units. Reservations automatically deduct stock
                  here.
                </p>
              </div>
              {stockUpdatedMsg && (
                <span className="text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1">
                  ✓ {stockUpdatedMsg}
                </span>
              )}
            </div>

            <div className="overflow-x-auto border border-[#226192]/20 bg-[#FFFFFF] shadow-sm">
              <table className="w-full text-left text-xs">
                <thead className="bg-[#226192] text-[#FFFFFF] text-[10px] uppercase font-bold tracking-wider">
                  <tr>
                    <th className="p-3">Product Name</th>
                    <th className="p-3">Brand</th>
                    <th className="p-3">Variant SKU</th>
                    <th className="p-3">Size & Colour</th>
                    <th className="p-3">Price / MRP</th>
                    <th className="p-3">Available Stock</th>
                    <th className="p-3 text-right">Live Stock Adjustment</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#226192]/10">
                  {productList.flatMap((prod) =>
                    (prod.variants || []).map((variant) => {
                      const liveStock = StockStore.getVariantStock(variant.id, variant.stock);
                      return (
                        <tr key={variant.id} className="hover:bg-[#EAE6DE]/30">
                          <td className="p-3 font-bold text-[#226192] max-w-[200px] truncate">
                            {prod.name}
                          </td>
                          <td className="p-3 text-[11px] font-semibold text-[#EF8557]">
                            {prod.brandName}
                          </td>
                          <td className="p-3 font-mono text-[11px] text-[#252525]/70">
                            {variant.sku}
                          </td>
                          <td className="p-3">
                            <span className="font-semibold">{variant.size}</span>
                            <span className="text-[10px] text-[#252525]/60 ml-1.5">
                              ({variant.colour})
                            </span>
                          </td>
                          <td className="p-3 font-semibold">
                            ₹{variant.price}{" "}
                            <span className="text-[10px] text-[#252525]/50 line-through">
                              ₹{variant.mrp}
                            </span>
                          </td>
                          <td className="p-3">
                            {liveStock === 0 ? (
                              <span className="rounded bg-rose-100 text-rose-800 text-[10px] font-bold px-2 py-0.5">
                                Out of Stock
                              </span>
                            ) : liveStock <= 5 ? (
                              <span className="rounded bg-amber-100 text-amber-800 text-[10px] font-bold px-2 py-0.5">
                                Low: {liveStock} Left
                              </span>
                            ) : (
                              <span className="text-emerald-700 font-bold">{liveStock} Units</span>
                            )}
                          </td>
                          <td className="p-3 text-right">
                            <div className="inline-flex items-center gap-1">
                              <button
                                type="button"
                                onClick={() => handleAdjustStock(variant.id, variant.stock, -1)}
                                className="size-7 border border-[#226192]/30 bg-[#FFFFFF] font-bold text-[#226192] hover:bg-[#EAE6DE]"
                              >
                                -
                              </button>
                              <span className="w-8 text-center font-bold text-xs">{liveStock}</span>
                              <button
                                type="button"
                                onClick={() => handleAdjustStock(variant.id, variant.stock, 5)}
                                className="px-2 py-1 border border-[#226192]/30 bg-[#FFFFFF] text-[10px] font-bold text-[#226192] hover:bg-[#EAE6DE]"
                                title="Add 5 units from production batch"
                              >
                                +5
                              </button>
                            </div>
                          </td>
                        </tr>
                      );
                    }),
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* ═══ 4. BRANDS MANAGER ═══ */}
        {activeSection === "brands" && (
          <div className="space-y-6">
            <div className="border-b border-[#226192]/10 pb-4">
              <h3 className="font-['Space_Grotesk'] text-lg font-bold uppercase text-[#226192]">
                Brand Identity & Positioning Settings
              </h3>
              <p className="text-xs text-[#252525]/75">
                Manage all 4 brands under Muthu International.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              {brandsList.map((b) => (
                <div
                  key={b.id}
                  className="border border-[#226192]/20 bg-[#FFFFFF] p-6 shadow-sm space-y-3"
                >
                  <div className="flex items-center justify-between border-b border-[#226192]/10 pb-2">
                    <h4 className="font-['Space_Grotesk'] text-xl font-bold uppercase text-[#226192]">
                      {b.name}
                    </h4>
                    <span className="border border-[#EF8557] px-2 py-0.5 text-[9px] font-bold uppercase text-[#EF8557]">
                      {b.badge}
                    </span>
                  </div>

                  <p className="font-serif italic text-xs text-[#EF8557]">
                    &ldquo;{b.tagline}&rdquo;
                  </p>
                  <p className="text-xs text-[#252525]/80">{b.description}</p>

                  <div className="border-t border-[#226192]/10 pt-3 text-xs space-y-1">
                    <p>
                      ✦ Role: <strong>{b.role}</strong>
                    </p>
                    <p>
                      ✦ Positioning: <strong>{b.positioning}</strong>
                    </p>
                  </div>

                  <div className="pt-2">
                    <Link
                      to="/brands/$slug"
                      params={{ slug: b.slug }}
                      className="text-xs font-bold text-[#226192] hover:text-[#EF8557] flex items-center gap-1"
                    >
                      <span>Preview Dedicated Brand Landing Page</span>
                      <ExternalLink className="size-3" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ═══ 5. GEO-SHIPPING ENGINE SETTINGS ═══ */}
        {activeSection === "shipping" && (
          <div className="space-y-6">
            <div className="border-b border-[#226192]/10 pb-4">
              <h3 className="font-['Space_Grotesk'] text-lg font-bold uppercase text-[#226192]">
                Geo-Wise Courier Zone & Fee Engine
              </h3>
              <p className="text-xs text-[#252525]/75">
                Calculated directly based on delivery PIN code destination prefix.
              </p>
            </div>

            <div className="border border-[#226192]/20 bg-[#FFFFFF] p-5 shadow-sm max-w-md">
              <label className="block text-xs font-bold uppercase text-[#226192] mb-1">
                Free Shipping Threshold (In Rupees):
              </label>
              <div className="flex gap-2">
                <Input
                  type="number"
                  value={freeShipThreshold}
                  onChange={(e) => setFreeShipThreshold(Number(e.target.value))}
                  className="h-9 rounded-none text-xs font-bold text-[#226192]"
                />
                <Button
                  size="sm"
                  className="rounded-none bg-[#226192] text-xs font-bold uppercase text-[#FFFFFF]"
                >
                  Save
                </Button>
              </div>
              <span className="text-[10px] text-[#252525]/60 mt-1 block">
                Orders with subtotal ≥ ₹{freeShipThreshold} automatically receive 100% free
                delivery.
              </span>
            </div>

            <div className="overflow-x-auto border border-[#226192]/20 bg-[#FFFFFF]">
              <table className="w-full text-left text-xs">
                <thead className="bg-[#226192] text-[#FFFFFF] text-[10px] uppercase font-bold">
                  <tr>
                    <th className="p-3">Zone Key</th>
                    <th className="p-3">Geographic Zone Coverage</th>
                    <th className="p-3">Transit Time</th>
                    <th className="p-3">Configured Base Fee</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#226192]/10">
                  {Object.values(shippingZones).map((zone) => (
                    <tr key={zone.id} className="hover:bg-[#EAE6DE]/30">
                      <td className="p-3 font-mono font-bold text-[#226192]">{zone.id}</td>
                      <td className="p-3">
                        <span className="font-bold text-[#252525] block">{zone.name}</span>
                        <span className="text-[10px] text-[#252525]/70">{zone.description}</span>
                      </td>
                      <td className="p-3 font-semibold text-[#226192]">{zone.estimatedDays}</td>
                      <td className="p-3 font-extrabold text-[#EF8557] text-sm">₹{zone.fee}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* ═══ 6. WHOLESALE ENQUIRIES CRM ═══ */}
        {activeSection === "wholesale" && (
          <div className="space-y-6">
            <div className="border-b border-[#226192]/10 pb-4">
              <h3 className="font-['Space_Grotesk'] text-lg font-bold uppercase text-[#226192]">
                Wholesale & B2B Inquiries Pipeline
              </h3>
              <p className="text-xs text-[#252525]/75">
                Bulk retail enquiries submitted via the `/wholesale` portal.
              </p>
            </div>

            <div className="space-y-4">
              {wholesaleLeads.map((lead) => (
                <div
                  key={lead.id}
                  className="border border-[#226192]/20 bg-[#FFFFFF] p-5 shadow-sm space-y-3 text-xs"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#226192]/10 pb-2 gap-2">
                    <div>
                      <h4 className="font-['Space_Grotesk'] text-base font-bold text-[#226192]">
                        {lead.companyName}
                      </h4>
                      <p className="text-[11px] text-[#252525]/70">
                        Contact: <strong>{lead.contactPerson}</strong> ({lead.city}, {lead.state}) ·
                        Phone: {lead.phone} · Email: {lead.email}
                      </p>
                    </div>

                    <span className="rounded-none bg-[#EF8557] px-2.5 py-0.5 text-[10px] font-bold text-[#FFFFFF] uppercase">
                      Status: {lead.status}
                    </span>
                  </div>

                  <div className="grid sm:grid-cols-3 gap-2 bg-[#EAE6DE]/30 p-2.5 font-semibold text-[#226192]">
                    <p>
                      Estimated Qty:{" "}
                      <span className="text-[#252525]">{lead.estimatedQuantity}</span>
                    </p>
                    <p>
                      Brand Focus: <span className="text-[#EF8557]">{lead.interestedBrand}</span>
                    </p>
                    <p>
                      Category: <span className="text-[#252525]">{lead.productCategory}</span>
                    </p>
                  </div>

                  <p className="text-xs text-[#252525]/85 italic bg-[#FFFFFF] p-2 border border-[#226192]/10">
                    &ldquo;{lead.message}&rdquo;
                  </p>

                  <div className="flex items-center gap-2 pt-1">
                    <span className="text-[10px] font-bold text-[#226192] uppercase">
                      Change Pipeline Stage:
                    </span>
                    {(["New", "Contacted", "Sample Requested", "Order Finalized"] as const).map(
                      (st) => (
                        <button
                          key={st}
                          type="button"
                          onClick={() => {
                            WholesaleStore.updateStatus(lead.id, st);
                            setWholesaleLeads(WholesaleStore.getEnquiries());
                          }}
                          className={`px-2 py-0.5 text-[10px] font-bold border transition-colors ${
                            lead.status === st
                              ? "bg-[#226192] text-[#FFFFFF] border-[#226192]"
                              : "border-[#226192]/20 bg-[#FFFFFF] text-[#226192] hover:border-[#EF8557]"
                          }`}
                        >
                          {st}
                        </button>
                      ),
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ═══ 7. COUPONS & PROMOTIONS MANAGER ═══ */}
        {activeSection === "coupons" && (
          <div className="space-y-6">
            <div className="border-b border-[#226192]/10 pb-4">
              <h3 className="font-['Space_Grotesk'] text-lg font-bold uppercase text-[#226192]">
                Active Coupons & Promotions
              </h3>
              <p className="text-xs text-[#252525]/75">
                Automated promotional codes available to retail shoppers at checkout.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {activeCoupons.map((c) => (
                <div
                  key={c.code}
                  className="border border-[#226192]/20 bg-[#FFFFFF] p-5 shadow-sm space-y-2"
                >
                  <div className="flex items-center justify-between border-b border-[#226192]/10 pb-2">
                    <span className="font-mono text-base font-extrabold text-[#EF8557]">
                      {c.code}
                    </span>
                    <span className="text-[9px] font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.5">
                      Active
                    </span>
                  </div>
                  <p className="text-xs text-[#252525]/80">{c.description}</p>
                  <div className="border-t border-[#226192]/10 pt-2 text-[11px] text-[#252525]/70 space-y-0.5">
                    <p>
                      ✦ Type: <strong>{c.discountType}</strong>
                    </p>
                    <p>
                      ✦ Min Order: <strong>₹{c.minOrderValue}</strong>
                    </p>
                    <p>
                      ✦ Expiry: <strong>{c.expiresAt}</strong>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
