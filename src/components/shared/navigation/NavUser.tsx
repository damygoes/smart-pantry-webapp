import { Avatar } from '@components/ui/avatar/Avatar';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@components/ui/dropdown-menu/DropdownMenu';
import {
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	useSidebar,
} from '@components/ui/sidebar/Sidebar';
import LogoutButton from '@features/auth/components/LogoutButton';
import type { User } from '@features/user/types/user';
import { ChevronsUpDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { AccountIcon, UpgradeIcon } from '../icons';

interface NavUserProps {
	user: User | null;
}

export function NavUser({ user }: NavUserProps) {
	const { isMobile } = useSidebar();
	const { t } = useTranslation();

	if (!user) {
		return null;
	}

	const userFullName = `${user.firstName} ${user.lastName}`;
	const userInitials = `${user.firstName[0]}${user.lastName[0]}`;

	return (
		<SidebarMenu>
			<SidebarMenuItem>
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<SidebarMenuButton
							size="lg"
							className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
						>
							<Avatar
								src={user.profilePicture}
								alt={user.firstName}
								fallbackText={userInitials}
								size="sm"
							/>
							<div className="grid flex-1 text-sm leading-tight text-left">
								<span className="font-semibold truncate">{userFullName}</span>
								<span className="text-xs truncate">{user.email}</span>
							</div>
							<ChevronsUpDown className="ml-auto size-4" />
						</SidebarMenuButton>
					</DropdownMenuTrigger>
					<DropdownMenuContent
						className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg p-3"
						side={isMobile ? 'bottom' : 'right'}
						align="end"
						sideOffset={4}
					>
						<DropdownMenuLabel className="p-0 font-normal">
							<div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
								<Avatar
									src={user.profilePicture}
									alt={user.firstName}
									fallbackText={userInitials}
									size="xs"
								/>
								<div className="grid flex-1 text-sm leading-tight text-left">
									<span className="font-semibold truncate">{userFullName}</span>
									<span className="text-xs truncate">{user.email}</span>
								</div>
							</div>
						</DropdownMenuLabel>
						<DropdownMenuSeparator />
						<DropdownMenuGroup>
							<DropdownMenuItem>
								<UpgradeIcon />
								{t('sidebarUserDropdown.upgradeTo', 'Upgrade to')} Pro
							</DropdownMenuItem>
						</DropdownMenuGroup>
						<DropdownMenuSeparator />
						<DropdownMenuGroup>
							<DropdownMenuItem>
								<AccountIcon />
								{t('sidebarUserDropdown.profile', 'Profile')}
							</DropdownMenuItem>
						</DropdownMenuGroup>
						<DropdownMenuSeparator />
						<DropdownMenuItem className="px-0 py-0 focus:bg-none focus:text-muted-foreground">
							<LogoutButton />
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			</SidebarMenuItem>
		</SidebarMenu>
	);
}
