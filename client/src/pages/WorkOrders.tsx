import { Plus, Wrench, X } from "lucide-react";
import { useState } from "react";

type WorkOrder = {
  id: number;
  title: string;
  assignee: string;
  priority: string;
};

export default function WorkOrders() {
  const [showForm, setShowForm] = useState(false);
  const [workOrders, setWorkOrders] = useState<WorkOrder[]>([]);

  const [title, setTitle] = useState("");
  const [assignee, setAssignee] = useState("");
  const [priority, setPriority] = useState("Medium");

  const handleCreateWorkOrder = (e: React.FormEvent) => {
    e.preventDefault();

    if (!title || !assignee) {
      alert("Please fill all fields");
      return;
    }

    setWorkOrders([
      ...workOrders,
      {
        id: Date.now(),
        title,
        assignee,
        priority,
      },
    ]);

    setTitle("");
    setAssignee("");
    setPriority("Medium");
    setShowForm(false);
  };

  return (
    <div>
      <div className="page-heading">
        <div>
          <h2>Work Orders</h2>
          <p>Track operational work and tasks</p>
        </div>

        <button
          className="primary-btn"
          onClick={() => setShowForm(true)}
        >
          <Plus size={18} />
          Create Work Order
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
            <h3>Create Work Order</h3>

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
            onSubmit={handleCreateWorkOrder}
            style={{
              display: "flex",
              gap: "12px",
              flexWrap: "wrap",
            }}
          >
            <input
              placeholder="Work order title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              style={{
                padding: "12px",
                border: "1px solid #d1d5db",
                borderRadius: "8px",
              }}
            />

            <input
              placeholder="Assigned to"
              value={assignee}
              onChange={(e) => setAssignee(e.target.value)}
              style={{
                padding: "12px",
                border: "1px solid #d1d5db",
                borderRadius: "8px",
              }}
            />

            <select
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
              style={{
                padding: "12px",
                border: "1px solid #d1d5db",
                borderRadius: "8px",
              }}
            >
              <option>Low</option>
              <option>Medium</option>
              <option>High</option>
            </select>

            <button className="primary-btn" type="submit">
              Create
            </button>
          </form>
        </div>
      )}

      {workOrders.length === 0 ? (
        <div className="table-card empty-card">
          <Wrench size={42} />
          <h3>Work Order Management</h3>
          <p>Create and monitor operational tasks.</p>
        </div>
      ) : (
        <div className="table-card">
          <table>
            <thead>
              <tr>
                <th>Work Order</th>
                <th>Assigned To</th>
                <th>Priority</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {workOrders.map((order) => (
                <tr key={order.id}>
                  <td>{order.title}</td>
                  <td>{order.assignee}</td>
                  <td>{order.priority}</td>
                  <td>
                    <span className="badge success">Open</span>
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