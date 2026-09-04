import {
  Package,
  ShoppingCart,
  ArrowLeftRight,
  Wrench,
} from "lucide-react";

export default function Dashboard() {

  const stats = [
    {
      title: "Inventory Items",
      value: "24",
      icon: <Package size={28} />,
      color: "blue",
    },
    {
      title: "Active Orders",
      value: "12",
      icon: <ShoppingCart size={28} />,
      color: "green",
    },
    {
      title: "Transfers",
      value: "8",
      icon: <ArrowLeftRight size={28} />,
      color: "orange",
    },
    {
      title: "Work Orders",
      value: "6",
      icon: <Wrench size={28} />,
      color: "purple",
    },
  ];

  return (
    <div>

      <div className="page-heading">

        <div>
          <h2>Dashboard Overview</h2>

          <p>
            Overview of your operational activity
          </p>
        </div>

      </div>

      <div className="stats-grid">

        {stats.map((stat) => (

          <div
            className={`stat-card ${stat.color}`}
            key={stat.title}
          >

            <div className="stat-icon">
              {stat.icon}
            </div>

            <div>
              <p>{stat.title}</p>

              <h3>{stat.value}</h3>
            </div>

          </div>

        ))}

      </div>

      <div className="dashboard-grid">

        <div className="dashboard-card">

          <h3>Recent Activity</h3>

          <div className="activity-list">

            <div className="activity">
              <span className="activity-dot green"></span>

              <div>
                <strong>New inventory received</strong>

                <p>Product stock updated successfully</p>
              </div>

              <span>Today</span>
            </div>

            <div className="activity">
              <span className="activity-dot blue"></span>

              <div>
                <strong>Order created</strong>

                <p>New customer order was added</p>
              </div>

              <span>Today</span>
            </div>

            <div className="activity">
              <span className="activity-dot orange"></span>

              <div>
                <strong>Transfer initiated</strong>

                <p>Inventory transfer is in progress</p>
              </div>

              <span>Yesterday</span>
            </div>

          </div>

        </div>

        <div className="dashboard-card">

          <h3>Quick Summary</h3>

          <div className="summary-item">

            <span>Completed Orders</span>

            <strong>18</strong>

          </div>

          <div className="summary-item">

            <span>Pending Orders</span>

            <strong>6</strong>

          </div>

          <div className="summary-item">

            <span>Low Stock Items</span>

            <strong className="danger-text">3</strong>

          </div>

        </div>

      </div>

    </div>
  );
}