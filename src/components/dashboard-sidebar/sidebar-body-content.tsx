import {
  SidebarBody,
  SidebarItem,
  SidebarLabel,
  SidebarSection,
  SidebarSpacer,
} from "@/components/catalyst-ui/sidebar";
import { Cog8ToothIcon, PlusIcon } from "@heroicons/react/20/solid";
import {
  HomeIcon,
  MegaphoneIcon,
  QuestionMarkCircleIcon,
  Square2StackIcon,
} from "@heroicons/react/20/solid";

export default function SidebarBodyContent() {
  return (
    <SidebarBody>
      <SidebarSection>
        <SidebarItem href="/dashboard/overview">
          <HomeIcon />
          <SidebarLabel>Overview</SidebarLabel>
        </SidebarItem>
        <SidebarItem href="/dashboard/list">
          <Square2StackIcon />
          <SidebarLabel>My Documents</SidebarLabel>
        </SidebarItem>
        <SidebarItem href="/dashboard/upload">
          <PlusIcon />
          <SidebarLabel>Upload New Documents</SidebarLabel>
        </SidebarItem>
        <SidebarItem href="/dashboard/faq">
          <MegaphoneIcon />
          <SidebarLabel>Saved Q&A</SidebarLabel>
        </SidebarItem>
      </SidebarSection>
      <SidebarSpacer />
      <SidebarSection>
        <SidebarItem href="/dashboard/settings">
          <Cog8ToothIcon />
          <SidebarLabel>Settings</SidebarLabel>
        </SidebarItem>
        <SidebarItem href="/dashboard/support">
          <QuestionMarkCircleIcon />
          <SidebarLabel>Support</SidebarLabel>
        </SidebarItem>
      </SidebarSection>
    </SidebarBody>
  );
}
