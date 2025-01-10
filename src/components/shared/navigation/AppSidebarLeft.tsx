import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from '@components/ui/sidebar/Sidebar';
import { MainNavigationLinks } from '@constants/MainNavigationLinks';
import { CommandIcon } from '../icons';
import MainNavigation from './MainNavigation';
import { NavUser } from './NavUser';

export const AppSidebarLeft = ({
	...props
}: React.ComponentProps<typeof Sidebar>) => {
	const mainNavLinks = MainNavigationLinks();

	return (
		<Sidebar variant="inset" {...props}>
			<SidebarHeader>
				<SidebarMenu>
					<SidebarMenuItem>
						<SidebarMenuButton size="lg" asChild>
							<span>
								<div className="flex items-center justify-center rounded-lg aspect-square size-8 bg-sidebar-primary text-sidebar-primary-foreground">
									<CommandIcon />
								</div>
								<div className="grid flex-1 text-sm leading-tight text-left">
									<span className="font-semibold truncate">Smart</span>
									<span className="text-xs truncate">Pantry</span>
								</div>
							</span>
						</SidebarMenuButton>
					</SidebarMenuItem>
				</SidebarMenu>
			</SidebarHeader>
			<SidebarContent>
				<MainNavigation items={mainNavLinks} />
			</SidebarContent>
			<SidebarFooter>
				<NavUser />
			</SidebarFooter>
		</Sidebar>
	);
};
