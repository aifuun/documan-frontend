


import { Navbar } from '@/components/ui/navbar'
import { Sidebar, SidebarHeader } from '@/components/ui/sidebar'
import { SidebarLayout } from '@/components/ui/sidebar-layout'
import SidebarBodyContent from '@/components/sidebar/sidebar-body-content'
import SidebarHeaderContent from '@/components/sidebar/sidebar-header-content'
import SidebarFootContent from '@/components/sidebar/sidebar-foot-content'
import DialogContent from '@/components/page-content/dialog-content'

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