import { Plus, ShoppingCart, X } from "lucide-react";
import { useState } from "react";

type Order = {
  id: number;
  customer: string;
  product: string;
  quantity: number;
};

export default function Orders() {
  const [showForm, setShowForm] = useState(false);
  const [orders, setOrders] = useState<Order[]>([]);

  const [customer, setCustomer] = useState("");
  const [product, setProduct] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleCreateOrder = (e: React.FormEvent) => {
    e.preventDefault();

    if (!customer || !product || !quantity) {
      alert("Please fill all fields");
      return;
    }

    setOrders([
      ...orders,
      {
        id: Date.now(),
        customer,
        product,
        quantity: Number(quantity),
      },
    ]);

    setCustomer("");
    setProduct("");
    setQuantity("");
    setShowForm(false);
  };

  return (
    <div>
      <div className="page-heading">
        <div>
          <h2>Orders</h2>
          <p>Manage customer orders and fulfillment</p>
        </div>

        <button
          className="primary-btn"
          onClick={() => setShowForm(true)}
        >
          <Plus size={18} />
          Create Order
        </button>
      </div>

      {showForm && (
        <div className="table-card" style={{ marginBottom: "24px" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "20px",
            }}
          >
            <h3>Create New Order</h3>

            <button
              onClick={() => setShowForm(false)}
              style={{
                border: "none",
                background: "transparent",
                cursor: "pointer",
              }}
            >
              <X size={22} />
            </button>
          </div>

          <form
            onSubmit={handleCreateOrder}
            style={{
              display: "flex",
              gap: "12px",
              flexWrap: "wrap",
            }}
          >
            <input
              placeholder="Customer name"
              value={customer}
              onChange={(e) => setCustomer(e.target.value)}
              style={{
                padding: "12px",
                border: "1px solid #d1d5db",
                borderRadius: "8px",
              }}
            />

            <input
              placeholder="Product"
              value={product}
              onChange={(e) => setProduct(e.target.value)}
              style={{
                padding: "12px",
                border: "1px solid #d1d5db",
                borderRadius: "8px",
              }}
            />

            <input
              type="number"
              placeholder="Quantity"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              style={{
                padding: "12px",
                border: "1px solid #d1d5db",
                borderRadius: "8px",
              }}
            />

            <button className="primary-btn" type="submit">
              Create Order
            </button>
          </form>
        </div>
      )}

      {orders.length === 0 ? (
        <div className="table-card empty-card">
          <ShoppingCart size={42} />
          <h3>Order Management</h3>
          <p>Create, track and manage all business orders.</p>
        </div>
      ) : (
        <div className="table-card">
          <table>
            <thead>
              <tr>
                <th>Customer</th>
                <th>Product</th>
                <th>Quantity</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {orders.map((order) => (
                <tr key={order.id}>
                  <td>{order.customer}</td>
                  <td>{order.product}</td>
                  <td>{order.quantity}</td>
                  <td>
                    <span className="badge success">Created</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}