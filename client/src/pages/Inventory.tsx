import { Plus, Search, Package, X } from "lucide-react";
import { useState } from "react";

type InventoryItem = {
  name: string;
  sku: string;
  quantity: number;
  status: string;
};

export default function Inventory() {
  const [search, setSearch] = useState("");
  const [showForm, setShowForm] = useState(false);

  const [items, setItems] = useState<InventoryItem[]>([
    {
      name: "Laptop",
      sku: "LP-001",
      quantity: 25,
      status: "In Stock",
    },
    {
      name: "Wireless Mouse",
      sku: "WM-002",
      quantity: 48,
      status: "In Stock",
    },
    {
      name: "Keyboard",
      sku: "KB-003",
      quantity: 8,
      status: "Low Stock",
    },
  ]);

  const [name, setName] = useState("");
  const [sku, setSku] = useState("");
  const [quantity, setQuantity] = useState("");

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleAddItem = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !sku || !quantity) {
      alert("Please fill all fields");
      return;
    }

    const qty = Number(quantity);

    setItems([
      ...items,
      {
        name,
        sku,
        quantity: qty,
        status: qty <= 10 ? "Low Stock" : "In Stock",
      },
    ]);

    setName("");
    setSku("");
    setQuantity("");
    setShowForm(false);
  };

  return (
    <div>
      <div className="page-heading">
        <div>
          <h2>Inventory Management</h2>
          <p>Manage and monitor your inventory items</p>
        </div>

        <button
          className="primary-btn"
          onClick={() => setShowForm(true)}
        >
          <Plus size={18} />
          Add Item
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
            <h3>Add Inventory Item</h3>

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
            onSubmit={handleAddItem}
            style={{
              display: "flex",
              gap: "12px",
              flexWrap: "wrap",
            }}
          >
            <input
              placeholder="Product name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{
                padding: "12px",
                border: "1px solid #d1d5db",
                borderRadius: "8px",
              }}
            />

            <input
              placeholder="SKU"
              value={sku}
              onChange={(e) => setSku(e.target.value)}
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
              Save Item
            </button>
          </form>
        </div>
      )}

      <div className="table-card">
        <div className="table-toolbar">
          <div className="search-box">
            <Search size={19} />

            <input
              placeholder="Search inventory..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>SKU</th>
              <th>Quantity</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {filteredItems.map((item) => (
              <tr key={item.sku}>
                <td>
                  <div className="product-cell">
                    <div className="product-icon">
                      <Package size={18} />
                    </div>

                    {item.name}
                  </div>
                </td>

                <td>{item.sku}</td>

                <td>{item.quantity}</td>

                <td>
                  <span
                    className={
                      item.status === "Low Stock"
                        ? "badge warning"
                        : "badge success"
                    }
                  >
                    {item.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}