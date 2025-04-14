


import { Navbar } from '#/components/catalyst-ui/navbar'
import { Sidebar, SidebarHeader } from '#/components/catalyst-ui/sidebar'
import { SidebarLayout } from '#/components/catalyst-ui/sidebar-layout'
import SidebarBodyContent from '#/components/dashboard-sidebar/sidebar-body-content'
import SidebarHeaderContent from '#/components/dashboard-sidebar/sidebar-header-content'
import SidebarFootContent from '#/components/dashboard-sidebar/sidebar-foot-content'
import DialogContent from '#/components/dashboard-content/dialog-content'

export default function Dashboard() {
  return (
    <SidebarLayout
      sidebar={<Sidebar>

        <SidebarHeaderContent />
        <SidebarBodyContent />
        <SidebarFootContent />
        
        </Sidebar>}
      navbar={<Navbar>{/* Your navbar content */}</Navbar>}
    >
      <DialogContent />
    </SidebarLayout>
  )
}