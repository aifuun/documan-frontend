

import { Avatar } from '@/components/catalyst-ui/avatar'
import {
  Dropdown,
  DropdownButton,
  DropdownDivider,
  DropdownItem,
  DropdownLabel,
  DropdownMenu,
} from '@/components/catalyst-ui/dropdown'
import {
  Sidebar,
  SidebarBody,
  SidebarFooter,
  SidebarHeader,
  SidebarItem,
  SidebarLabel,
  SidebarSection,
  SidebarSpacer,
} from '@/components/catalyst-ui/sidebar'
import {
  ArrowRightStartOnRectangleIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  Cog8ToothIcon,
  LightBulbIcon,
  PlusIcon,
  ShieldCheckIcon,
  UserIcon,
} from '@heroicons/react/20/solid'
import {
  Cog6ToothIcon,
  HomeIcon,
  InboxIcon,
  MagnifyingGlassIcon,
  MegaphoneIcon,
  QuestionMarkCircleIcon,
  SparklesIcon,
  Square2StackIcon,
  TicketIcon,
} from '@heroicons/react/20/solid'


export default function SidebarBodyContent() {


    return (
        <SidebarBody>
        <SidebarSection>
          <SidebarItem href="/dashboard/overview">
            <HomeIcon />
            <SidebarLabel>Overview</SidebarLabel>
          </SidebarItem>
          <SidebarItem href="/dashboard/my-documents">
            < Square2StackIcon />
            <SidebarLabel>My Documents</SidebarLabel>
          </SidebarItem>
          <SidebarItem href="/dashboard/upload">
            <PlusIcon />
            <SidebarLabel>Upload New Documents</SidebarLabel>
          </SidebarItem>
          <SidebarItem href="/dashboard/faq">
            < MegaphoneIcon />
            <SidebarLabel>Saved Q&A</SidebarLabel>
          </SidebarItem>
 
        </SidebarSection>
        <SidebarSpacer />
        <SidebarSection>
          <SidebarItem href="/dashboard/settings">
            < Cog8ToothIcon />
            <SidebarLabel>Settings</SidebarLabel>
          </SidebarItem>
          <SidebarItem href="/dashboard/support">
            <QuestionMarkCircleIcon />
            <SidebarLabel>Support</SidebarLabel>
          </SidebarItem>
         
        </SidebarSection>
      </SidebarBody>
    )
}
