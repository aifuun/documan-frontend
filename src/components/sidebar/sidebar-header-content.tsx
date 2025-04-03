import { Avatar } from '@/components/ui/avatar'

import {
  Dropdown,
  DropdownButton,
  DropdownDivider,
  DropdownItem,
  DropdownLabel,
  DropdownMenu
} from '@/components/ui/dropdown'

import {
  SidebarHeader,
  SidebarItem,
  SidebarLabel,
  SidebarSection,
} from '@/components/ui/sidebar'

import {
  ChevronDownIcon,
  Cog8ToothIcon,
  PlusIcon,
} from '@heroicons/react/20/solid'

import {
  InboxIcon,
  MagnifyingGlassIcon,
} from '@heroicons/react/20/solid'

export default function SidebarHeaderContent() {

    return(
    <SidebarHeader>
        <Dropdown>
          <DropdownButton as={SidebarItem} className="mb-2.5">
            <Avatar src="/tailwind-logo.svg" />
            <SidebarLabel>Tailwind Labs</SidebarLabel>
            <ChevronDownIcon />
          </DropdownButton>
          <DropdownMenu className="min-w-64" anchor="bottom start">
            <DropdownItem href="/teams/1/settings">
              <Cog8ToothIcon />
              <DropdownLabel>Settings</DropdownLabel>
            </DropdownItem>
            <DropdownDivider />
            <DropdownItem href="/teams/1">
              <Avatar slot="icon" src="/tailwind-logo.svg" />
              <DropdownLabel>Tailwind Labs</DropdownLabel>
            </DropdownItem>
            <DropdownItem href="/teams/2">
              <Avatar slot="icon" initials="WC" className="bg-purple-500 text-white" />
              <DropdownLabel>Workcation</DropdownLabel>
            </DropdownItem>
            <DropdownDivider />
            <DropdownItem href="/teams/create">
              <PlusIcon />
              <DropdownLabel>New team&hellip;</DropdownLabel>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <SidebarSection>
          <SidebarItem href="/search">
            <MagnifyingGlassIcon />
            <SidebarLabel>Search</SidebarLabel>
          </SidebarItem>
          <SidebarItem href="/inbox">
            <InboxIcon />
            <SidebarLabel>Inbox</SidebarLabel>
          </SidebarItem>
        </SidebarSection>
      </SidebarHeader>
      );
}