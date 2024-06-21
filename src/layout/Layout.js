import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { SidebarItem } from "./Sidebar";
import {
  BarChart3,
  File,
  LayoutDashboard,
  ListOrdered,
  User,
} from "lucide-react";
import { useLocation } from "react-router-dom";

function Layout({ children }) {
  const location = useLocation();
  return (
    <div className="flex">
      <Sidebar>
        <SidebarItem
          icon={<LayoutDashboard size={20} />}
          text="Dashboard"
          // alert
          route="/"
          active={location.pathname === "/"}
        />
        <SidebarItem
          icon={<User size={20} />}
          text="Profile"
          route="/profile"
          active={location.pathname === "/profile"}
        />
        <SidebarItem
          icon={<File size={20} />}
          text="Documents"
          route="/docs"
          active={location.pathname === "/docs"}
        />
        <SidebarItem
          icon={<ListOrdered size={20} />}
          text="Criteria"
          route="/criteria"
          active={location.pathname === "/criteria"}
        />
      </Sidebar>
      <main className="flex flex-col p-3 gap-3 w-full">
        <Navbar />
        {children}
      </main>
    </div>
  );
}

export default Layout;
