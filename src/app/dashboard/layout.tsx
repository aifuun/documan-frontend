import { ReactNode } from "react";
import { Navbar } from "@/components/catalyst-ui/navbar";
import { Sidebar } from "@/components/catalyst-ui/sidebar";
import { SidebarLayout } from "@/components/catalyst-ui/sidebar-layout";
import SidebarBodyContent from "@/components/dashboard-sidebar/sidebar-body-content";
import SidebarHeaderContent from "@/components/dashboard-sidebar/sidebar-header-content";
import SidebarFootContent from "@/components/dashboard-sidebar/sidebar-foot-content";

export default function DashboardLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
    <SidebarLayout
      sidebar={
        <Sidebar>
          <SidebarHeaderContent />
          <SidebarBodyContent />
          <SidebarFootContent />
        </Sidebar>
      }
      navbar={<Navbar>{/* Your navbar content */}</Navbar>}
    >
      {children}
    </SidebarLayout>
  );
}