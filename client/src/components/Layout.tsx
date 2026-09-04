import { NavLink, Outlet, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  ArrowLeftRight,
  Wrench,
  LogOut,
  User,
} from "lucide-react";

export default function Layout() {
  const navigate = useNavigate();

  let user: any = {
    name: "Admin User",
    role: "ADMIN",
  };

  const userData = localStorage.getItem("user");

  if (userData && userData !== "undefined" && userData !== "null") {
    try {
      user = JSON.parse(userData);
    } catch (error) {
      console.error("Invalid user data:", error);
    }
  }

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/login");
  };

  const links = [
    {
      name: "Dashboard",
      path: "/",
      icon: <LayoutDashboard size={20} />,
    },
    {
      name: "Inventory",
      path: "/inventory",
      icon: <Package size={20} />,
    },
    {
      name: "Orders",
      path: "/orders",
      icon: <ShoppingCart size={20} />,
    },
    {
      name: "Transfers",
      path: "/transfers",
      icon: <ArrowLeftRight size={20} />,
    },
    {
      name: "Work Orders",
      path: "/work-orders",
      icon: <Wrench size={20} />,
    },
  ];

  return (
    <div className="app-layout">
      <aside className="sidebar">
        <div className="brand">
          <div className="brand-icon">ERP</div>

          <div>
            <h2>Mini ERP</h2>
            <span>Operations</span>
          </div>
        </div>

        <nav className="nav-links">
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                isActive ? "nav-item active" : "nav-item"
              }
            >
              {link.icon}
              <span>{link.name}</span>
            </NavLink>
          ))}
        </nav>

        <div className="sidebar-bottom">
          <div className="user-info">
            <div className="user-avatar">
              <User size={18} />
            </div>

            <div>
              <strong>{user?.name || "Admin User"}</strong>
              <span>{user?.role || "ADMIN"}</span>
            </div>
          </div>

          <button
            className="logout-btn"
            onClick={handleLogout}
          >
            <LogOut size={18} />
            Logout
          </button>
        </div>
      </aside>

      <main className="main-content">
        <header className="topbar">
          <div>
            <h1>Operations Management</h1>
            <p>
              Monitor and manage your business operations
            </p>
          </div>

          <div className="status">
            <span className="status-dot"></span>
            System Online
          </div>
        </header>

        <div className="page-content">
          <Outlet />
        </div>
      </main>
    </div>
  );
}