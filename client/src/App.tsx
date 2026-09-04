import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Inventory from "./pages/Inventory";
import Orders from "./pages/Orders";
import Transfers from "./pages/Transfers";
import WorkOrders from "./pages/WorkOrders";

import Layout from "./components/Layout";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          element={
            <ProtectedRoute>
              <Layout />
            </ProtectedRoute>
          }
        >

          <Route
            path="/"
            element={<Dashboard />}
          />

          <Route
            path="/inventory"
            element={<Inventory />}
          />

          <Route
            path="/orders"
            element={<Orders />}
          />

          <Route
            path="/transfers"
            element={<Transfers />}
          />

          <Route
            path="/work-orders"
            element={<WorkOrders />}
          />

        </Route>

      </Routes>

    </BrowserRouter>
  );
}

export default App;