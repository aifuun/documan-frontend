import { Avatar } from '@/components/catalyst-ui/avatar';
import { AuthGetCurrentUserServer } from '@/utils/amplify-utils';
import {
  Dropdown,
  DropdownButton,
  DropdownDivider,
  DropdownItem,
  DropdownLabel,
  DropdownMenu,
} from '@/components/catalyst-ui/dropdown';
import {
  SidebarFooter,
  SidebarItem,
} from '@/components/catalyst-ui/sidebar';
import {
  ArrowRightStartOnRectangleIcon,
  ChevronUpIcon,
  LightBulbIcon,
  ShieldCheckIcon,
  UserIcon,
} from '@heroicons/react/20/solid';
import { redirect } from 'next/navigation';

export default async function SidebarFootContent() {
  try {
    const user = await AuthGetCurrentUserServer();

    if (!user) {
      console.warn("User is not authenticated, redirecting to login...");
      redirect('/login'); // 如果用户未认证，重定向到登录页面
  }

    const userName = user.username || 'Guest';


    return (
      <SidebarFooter>
        <Dropdown>
          <DropdownButton as={SidebarItem}>
            <span className="flex min-w-0 items-center gap-3">
              <Avatar
                src="/profile-photo.jpg"
                className="size-10"
                square
                alt="User Avatar"
              />
              <span className="min-w-0">
                <span className="block truncate text-sm/5 font-medium text-zinc-950 dark:text-white">
                  {userName}
                </span>
              </span>
            </span>
            <ChevronUpIcon />
          </DropdownButton>
          <DropdownMenu className="min-w-64" anchor="top start">
            {user ? (
              <>
                <DropdownItem href="/my-profile">
                  <UserIcon />
                  <DropdownLabel>My profile</DropdownLabel>
                </DropdownItem>
                <DropdownDivider />
                <DropdownItem href="/privacy-policy">
                  <ShieldCheckIcon />
                  <DropdownLabel>Privacy policy</DropdownLabel>
                </DropdownItem>
                <DropdownItem href="/share-feedback">
                  <LightBulbIcon />
                  <DropdownLabel>Share feedback</DropdownLabel>
                </DropdownItem>
                <DropdownDivider />
                <DropdownItem href="/logout">
                  <ArrowRightStartOnRectangleIcon />
                  <DropdownLabel>Sign out</DropdownLabel>
                </DropdownItem>
              </>
            ) : (
              <>
                <DropdownItem href="/login">
                  <ArrowRightStartOnRectangleIcon />
                  <DropdownLabel>Log in</DropdownLabel>
                </DropdownItem>
              </>
            )}
          </DropdownMenu>
        </Dropdown>
      </SidebarFooter>
    );
  } catch (error) {
    console.error('Error fetching user:', error);
    // 如果发生错误，重定向到登录页面
    redirect('/login');
    return null;
  }
}