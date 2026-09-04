import { Plus, ArrowLeftRight, X } from "lucide-react";
import { useState } from "react";

type Transfer = {
  id: number;
  item: string;
  from: string;
  to: string;
};

export default function Transfers() {
  const [showForm, setShowForm] = useState(false);
  const [transfers, setTransfers] = useState<Transfer[]>([]);

  const [item, setItem] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  const handleCreateTransfer = (e: React.FormEvent) => {
    e.preventDefault();

    if (!item || !from || !to) {
      alert("Please fill all fields");
      return;
    }

    setTransfers([
      ...transfers,
      {
        id: Date.now(),
        item,
        from,
        to,
      },
    ]);

    setItem("");
    setFrom("");
    setTo("");
    setShowForm(false);
  };

  return (
    <div>
      <div className="page-heading">
        <div>
          <h2>Inventory Transfers</h2>
          <p>Move inventory between locations</p>
        </div>

        <button
          className="primary-btn"
          onClick={() => setShowForm(true)}
        >
          <Plus size={18} />
          New Transfer
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
            <h3>Create New Transfer</h3>

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
            onSubmit={handleCreateTransfer}
            style={{
              display: "flex",
              gap: "12px",
              flexWrap: "wrap",
            }}
          >
            <input
              placeholder="Item name"
              value={item}
              onChange={(e) => setItem(e.target.value)}
              style={{
                padding: "12px",
                border: "1px solid #d1d5db",
                borderRadius: "8px",
              }}
            />

            <input
              placeholder="From location"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              style={{
                padding: "12px",
                border: "1px solid #d1d5db",
                borderRadius: "8px",
              }}
            />

            <input
              placeholder="To location"
              value={to}
              onChange={(e) => setTo(e.target.value)}
              style={{
                padding: "12px",
                border: "1px solid #d1d5db",
                borderRadius: "8px",
              }}
            />

            <button className="primary-btn" type="submit">
              Transfer
            </button>
          </form>
        </div>
      )}

      {transfers.length === 0 ? (
        <div className="table-card empty-card">
          <ArrowLeftRight size={42} />
          <h3>Transfer Management</h3>
          <p>Manage and track inventory transfers.</p>
        </div>
      ) : (
        <div className="table-card">
          <table>
            <thead>
              <tr>
                <th>Item</th>
                <th>From</th>
                <th>To</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {transfers.map((transfer) => (
                <tr key={transfer.id}>
                  <td>{transfer.item}</td>
                  <td>{transfer.from}</td>
                  <td>{transfer.to}</td>
                  <td>
                    <span className="badge success">In Progress</span>
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