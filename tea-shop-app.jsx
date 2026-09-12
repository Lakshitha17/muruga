import React, { useState, useMemo } from "react";
import { Plus, Minus, ShoppingCart, X, ChevronLeft, LayoutGrid, Receipt, TrendingUp, AlertCircle, Check } from "lucide-react";

const MENU = [
  { id: "m1", name: "Masala Chai", category: "Tea", price: 15, tag: "Bestseller", stock: "ok" },
  { id: "m2", name: "Ginger Tea", category: "Tea", price: 15, tag: null, stock: "ok" },
  { id: "m3", name: "Elaichi Tea", category: "Tea", price: 18, tag: null, stock: "ok" },
  { id: "m4", name: "Kulhad Chai", category: "Tea", price: 20, tag: "Bestseller", stock: "ok" },
  { id: "m5", name: "Lemon Tea", category: "Tea", price: 12, tag: null, stock: "low" },
  { id: "m6", name: "Black Coffee", category: "Coffee", price: 15, tag: null, stock: "ok" },
  { id: "m7", name: "Cold Coffee", category: "Coffee", price: 30, tag: null, stock: "ok" },
  { id: "m8", name: "Samosa", category: "Snacks", price: 12, tag: null, stock: "ok" },
  { id: "m9", name: "Bun Maska", category: "Snacks", price: 20, tag: "Bestseller", stock: "ok" },
  { id: "m10", name: "Khari Biscuit", category: "Snacks", price: 8, tag: null, stock: "low" },
];

const CATEGORIES = ["All", "Tea", "Coffee", "Snacks"];

const currency = (n) => `\u20b9${n.toFixed(0)}`;

function Badge({ children, tone = "amber" }) {
  const tones = {
    amber: { background: "var(--tag-bg)", color: "var(--tag-fg)" },
    low: { background: "#3a1f1f", color: "#f3a8a8" },
  };
  return (
    <span
      style={{
        fontFamily: "var(--font-mono)",
        fontSize: "10px",
        letterSpacing: "0.06em",
        textTransform: "uppercase",
        padding: "3px 7px",
        borderRadius: "3px",
        ...tones[tone],
      }}
    >
      {children}
    </span>
  );
}

function CustomerView({ cart, setCart, onCheckout }) {
  const [activeCat, setActiveCat] = useState("All");
  const [cartOpen, setCartOpen] = useState(false);

  const items = useMemo(
    () => (activeCat === "All" ? MENU : MENU.filter((m) => m.category === activeCat)),
    [activeCat]
  );

  const cartCount = Object.values(cart).reduce((a, b) => a + b, 0);
  const cartTotal = Object.entries(cart).reduce((sum, [id, qty]) => {
    const item = MENU.find((m) => m.id === id);
    return sum + (item ? item.price * qty : 0);
  }, 0);

  const addItem = (id) => setCart((c) => ({ ...c, [id]: (c[id] || 0) + 1 }));
  const removeItem = (id) =>
    setCart((c) => {
      const next = { ...c };
      if (!next[id]) return next;
      next[id] -= 1;
      if (next[id] <= 0) delete next[id];
      return next;
    });

  return (
    <div style={{ position: "relative", minHeight: "100%" }}>
      {/* Category pills */}
      <div style={{ display: "flex", gap: "8px", padding: "18px 20px 6px", flexWrap: "wrap" }}>
        {CATEGORIES.map((c) => (
          <button
            key={c}
            onClick={() => setActiveCat(c)}
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "13px",
              padding: "7px 16px",
              borderRadius: "999px",
              border: `1px solid ${activeCat === c ? "var(--accent)" : "var(--line)"}`,
              background: activeCat === c ? "var(--accent)" : "transparent",
              color: activeCat === c ? "var(--bg)" : "var(--fg-dim)",
              cursor: "pointer",
              transition: "all 0.15s ease",
            }}
          >
            {c}
          </button>
        ))}
      </div>

      {/* Menu grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(230px, 1fr))",
          gap: "14px",
          padding: "14px 20px 100px",
        }}
      >
        {items.map((item) => {
          const qty = cart[item.id] || 0;
          return (
            <div
              key={item.id}
              style={{
                border: "1px solid var(--line)",
                borderRadius: "10px",
                padding: "16px",
                background: "var(--card)",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                position: "relative",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <div>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: "17px", color: "var(--fg)" }}>
                    {item.name}
                  </div>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: "12px", color: "var(--fg-dim)", marginTop: "4px" }}>
                    {item.category}
                  </div>
                </div>
                {item.tag && <Badge>{item.tag}</Badge>}
              </div>

              {item.stock === "low" && (
                <div style={{ display: "flex", alignItems: "center", gap: "5px", fontSize: "11px", color: "#e0a060" }}>
                  <AlertCircle size={12} />
                  <span style={{ fontFamily: "var(--font-mono)" }}>Low stock</span>
                </div>
              )}

              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "auto" }}>
                <span style={{ fontFamily: "var(--font-display)", fontSize: "20px", color: "var(--accent)" }}>
                  {currency(item.price)}
                </span>

                {qty === 0 ? (
                  <button
                    onClick={() => addItem(item.id)}
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "13px",
                      padding: "7px 14px",
                      borderRadius: "6px",
                      border: "1px solid var(--accent)",
                      background: "transparent",
                      color: "var(--accent)",
                      cursor: "pointer",
                    }}
                  >
                    Add
                  </button>
                ) : (
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", background: "var(--bg)", borderRadius: "6px", border: "1px solid var(--line)" }}>
                    <button onClick={() => removeItem(item.id)} style={iconBtnStyle}>
                      <Minus size={13} />
                    </button>
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: "13px", color: "var(--fg)", minWidth: "12px", textAlign: "center" }}>
                      {qty}
                    </span>
                    <button onClick={() => addItem(item.id)} style={iconBtnStyle}>
                      <Plus size={13} />
                    </button>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Floating cart bar */}
      {cartCount > 0 && !cartOpen && (
        <button
          onClick={() => setCartOpen(true)}
          style={{
            position: "absolute",
            bottom: "18px",
            left: "20px",
            right: "20px",
            background: "var(--accent)",
            color: "var(--bg)",
            border: "none",
            borderRadius: "10px",
            padding: "14px 18px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            cursor: "pointer",
            fontFamily: "var(--font-body)",
            fontSize: "14px",
            boxShadow: "0 8px 24px rgba(0,0,0,0.35)",
          }}
        >
          <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <ShoppingCart size={16} />
            {cartCount} item{cartCount > 1 ? "s" : ""}
          </span>
          <span style={{ fontFamily: "var(--font-mono)" }}>{currency(cartTotal)} &rsaquo;</span>
        </button>
      )}

      {/* Cart drawer */}
      {cartOpen && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "var(--bg)",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px", padding: "18px 20px", borderBottom: "1px solid var(--line)" }}>
            <button onClick={() => setCartOpen(false)} style={{ ...iconBtnStyle, border: "1px solid var(--line)" }}>
              <ChevronLeft size={15} />
            </button>
            <span style={{ fontFamily: "var(--font-display)", fontSize: "18px", color: "var(--fg)" }}>Your order</span>
          </div>

          <div style={{ flex: 1, overflowY: "auto", padding: "12px 20px" }}>
            {Object.keys(cart).length === 0 && (
              <div style={{ fontFamily: "var(--font-body)", color: "var(--fg-dim)", padding: "30px 0", textAlign: "center" }}>
                Your cart is empty.
              </div>
            )}
            {Object.entries(cart).map(([id, qty]) => {
              const item = MENU.find((m) => m.id === id);
              if (!item) return null;
              return (
                <div key={id} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 0", borderBottom: "1px solid var(--line)" }}>
                  <div>
                    <div style={{ fontFamily: "var(--font-body)", fontSize: "14px", color: "var(--fg)" }}>{item.name}</div>
                    <div style={{ fontFamily: "var(--font-mono)", fontSize: "12px", color: "var(--fg-dim)" }}>
                      {currency(item.price)} &times; {qty}
                    </div>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <button onClick={() => removeItem(id)} style={iconBtnStyle}>
                      <Minus size={13} />
                    </button>
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: "13px", minWidth: "12px", textAlign: "center" }}>{qty}</span>
                    <button onClick={() => addItem(id)} style={iconBtnStyle}>
                      <Plus size={13} />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {Object.keys(cart).length > 0 && (
            <div style={{ padding: "16px 20px 22px", borderTop: "1px solid var(--line)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "14px" }}>
                <span style={{ fontFamily: "var(--font-body)", color: "var(--fg-dim)", fontSize: "14px" }}>Total</span>
                <span style={{ fontFamily: "var(--font-display)", fontSize: "20px", color: "var(--accent)" }}>{currency(cartTotal)}</span>
              </div>
              <button
                onClick={() => {
                  onCheckout(cartTotal, cartCount);
                  setCart({});
                  setCartOpen(false);
                }}
                style={{
                  width: "100%",
                  padding: "13px",
                  borderRadius: "8px",
                  border: "none",
                  background: "var(--accent)",
                  color: "var(--bg)",
                  fontFamily: "var(--font-body)",
                  fontSize: "14px",
                  cursor: "pointer",
                }}
              >
                Place order
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function AdminView({ orders }) {
  const totalSales = orders.reduce((s, o) => s + o.total, 0);
  const totalItems = orders.reduce((s, o) => s + o.count, 0);
  const lowStock = MENU.filter((m) => m.stock === "low");

  const bestSellers = useMemo(() => {
    const tally = {};
    orders.forEach((o) => {
      Object.entries(o.items).forEach(([id, qty]) => {
        tally[id] = (tally[id] || 0) + qty;
      });
    });
    return Object.entries(tally)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 4)
      .map(([id, qty]) => ({ item: MENU.find((m) => m.id === id), qty }))
      .filter((x) => x.item);
  }, [orders]);

  return (
    <div style={{ padding: "20px" }}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: "12px", marginBottom: "22px" }}>
        <StatCard label="Today's sales" value={currency(totalSales)} icon={<TrendingUp size={15} />} />
        <StatCard label="Orders" value={orders.length} icon={<Receipt size={15} />} />
        <StatCard label="Items sold" value={totalItems} icon={<LayoutGrid size={15} />} />
      </div>

      {lowStock.length > 0 && (
        <div style={{ marginBottom: "22px", padding: "12px 14px", border: "1px solid #4a2f2f", borderRadius: "8px", background: "#241616" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "6px" }}>
            <AlertCircle size={13} color="#e0a060" />
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "#e0a060", textTransform: "uppercase", letterSpacing: "0.05em" }}>
              Low stock
            </span>
          </div>
          <div style={{ fontFamily: "var(--font-body)", fontSize: "13px", color: "var(--fg-dim)" }}>
            {lowStock.map((m) => m.name).join(", ")} running low &mdash; reorder soon.
          </div>
        </div>
      )}

      <div style={{ fontFamily: "var(--font-display)", fontSize: "16px", color: "var(--fg)", marginBottom: "10px" }}>
        Best sellers today
      </div>
      {bestSellers.length === 0 ? (
        <div style={{ fontFamily: "var(--font-body)", color: "var(--fg-dim)", fontSize: "13px", marginBottom: "22px" }}>
          No orders placed yet.
        </div>
      ) : (
        <div style={{ marginBottom: "22px" }}>
          {bestSellers.map(({ item, qty }) => (
            <div key={item.id} style={{ display: "flex", justifyContent: "space-between", padding: "9px 0", borderBottom: "1px solid var(--line)" }}>
              <span style={{ fontFamily: "var(--font-body)", fontSize: "13px", color: "var(--fg)" }}>{item.name}</span>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "13px", color: "var(--fg-dim)" }}>{qty} sold</span>
            </div>
          ))}
        </div>
      )}

      <div style={{ fontFamily: "var(--font-display)", fontSize: "16px", color: "var(--fg)", marginBottom: "10px" }}>
        Recent orders
      </div>
      {orders.length === 0 ? (
        <div style={{ fontFamily: "var(--font-body)", color: "var(--fg-dim)", fontSize: "13px" }}>
          Orders placed by customers will show up here.
        </div>
      ) : (
        [...orders].reverse().map((o) => (
          <div key={o.id} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 0", borderBottom: "1px solid var(--line)" }}>
            <div>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "12px", color: "var(--fg-dim)" }}>#{o.id}</span>
              <span style={{ fontFamily: "var(--font-body)", fontSize: "13px", color: "var(--fg)", marginLeft: "10px" }}>
                {o.count} item{o.count > 1 ? "s" : ""}
              </span>
            </div>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "13px", color: "var(--accent)" }}>{currency(o.total)}</span>
          </div>
        ))
      )}
    </div>
  );
}

function StatCard({ label, value, icon }) {
  return (
    <div style={{ border: "1px solid var(--line)", borderRadius: "8px", padding: "14px", background: "var(--card)" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "var(--fg-dim)", marginBottom: "8px" }}>
        {icon}
        <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.05em" }}>{label}</span>
      </div>
      <div style={{ fontFamily: "var(--font-display)", fontSize: "22px", color: "var(--fg)" }}>{value}</div>
    </div>
  );
}

const iconBtnStyle = {
  width: "26px",
  height: "26px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "5px",
  border: "none",
  background: "transparent",
  color: "var(--fg)",
  cursor: "pointer",
};

export default function TeaShopApp() {
  const [tab, setTab] = useState("customer");
  const [cart, setCart] = useState({});
  const [orders, setOrders] = useState([]);
  const [toast, setToast] = useState(false);

  const handleCheckout = (total, count) => {
    setOrders((o) => [...o, { id: String(o.length + 1).padStart(3, "0"), total, count, items: { ...cart } }]);
    setToast(true);
    setTimeout(() => setToast(false), 2200);
  };

  return (
    <div
      style={{
        "--bg": "#161512",
        "--card": "#1e1c18",
        "--line": "#2f2c26",
        "--fg": "#f0ebe0",
        "--fg-dim": "#a39a8a",
        "--accent": "#c98a3f",
        "--tag-bg": "#2e2113",
        "--tag-fg": "#e0a860",
        "--font-display": "'Fraunces', Georgia, serif",
        "--font-body": "'Inter', sans-serif",
        "--font-mono": "'JetBrains Mono', monospace",
        background: "var(--bg)",
        minHeight: "600px",
        maxWidth: "480px",
        margin: "0 auto",
        borderRadius: "16px",
        overflow: "hidden",
        border: "1px solid var(--line)",
        position: "relative",
        fontFamily: "var(--font-body)",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');
      `}</style>

      {/* Header */}
      <div style={{ padding: "20px 20px 14px", borderBottom: "1px solid var(--line)" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <div style={{ fontFamily: "var(--font-display)", fontSize: "22px", color: "var(--fg)", letterSpacing: "0.01em" }}>
              Kadak Corner
            </div>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--fg-dim)", marginTop: "2px" }}>
              hot chai, fast counter
            </div>
          </div>
          <div style={{ display: "flex", gap: "4px", background: "var(--card)", padding: "3px", borderRadius: "8px", border: "1px solid var(--line)" }}>
            <button
              onClick={() => setTab("customer")}
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "12px",
                padding: "6px 12px",
                borderRadius: "6px",
                border: "none",
                background: tab === "customer" ? "var(--accent)" : "transparent",
                color: tab === "customer" ? "var(--bg)" : "var(--fg-dim)",
                cursor: "pointer",
              }}
            >
              Order
            </button>
            <button
              onClick={() => setTab("admin")}
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "12px",
                padding: "6px 12px",
                borderRadius: "6px",
                border: "none",
                background: tab === "admin" ? "var(--accent)" : "transparent",
                color: tab === "admin" ? "var(--bg)" : "var(--fg-dim)",
                cursor: "pointer",
              }}
            >
              Owner
            </button>
          </div>
        </div>
      </div>

      <div style={{ minHeight: "560px", position: "relative" }}>
        {tab === "customer" ? (
          <CustomerView cart={cart} setCart={setCart} onCheckout={handleCheckout} />
        ) : (
          <AdminView orders={orders} />
        )}
      </div>

      {toast && (
        <div
          style={{
            position: "absolute",
            top: "16px",
            left: "50%",
            transform: "translateX(-50%)",
            background: "var(--accent)",
            color: "var(--bg)",
            padding: "9px 16px",
            borderRadius: "999px",
            display: "flex",
            alignItems: "center",
            gap: "6px",
            fontFamily: "var(--font-body)",
            fontSize: "13px",
            boxShadow: "0 8px 20px rgba(0,0,0,0.4)",
          }}
        >
          <Check size={14} /> Order placed
        </div>
      )}
    </div>
  );
}
