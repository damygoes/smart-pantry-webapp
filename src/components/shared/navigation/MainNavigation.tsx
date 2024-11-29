import {
	SidebarGroup,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from '@components/ui/sidebar/Sidebar';
import type { NavItem } from '@interfaces/NavItem';
import { cn } from '@utils/classNameMerge';
import { Link, useLocation } from 'react-router-dom';

interface MainNavigationProps {
	items: NavItem[];
}

const MainNavigation = ({ items }: MainNavigationProps) => {
	const location = useLocation();
	const activeItem = items.find((item) =>
		location.pathname.startsWith(item.url),
	);

	return (
		<SidebarGroup className="group-data-[collapsible=icon]:hidden">
			<SidebarMenu>
				{items.map((item, index) => (
					<SidebarMenuItem
						// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
						key={index}
						className={cn({
							'bg-sidebar-primary text-sidebar-primary-foreground rounded-md':
								activeItem === item,
						})}
					>
						<SidebarMenuButton
							asChild
							className={cn({
								'hover:bg-sidebar-primary hover:text-sidebar-primary-foreground':
									activeItem === item,
							})}
						>
							<Link to={item.url}>
								{typeof item.icon === 'function' ? <item.icon /> : item.icon}
								<span>{item.name}</span>
							</Link>
						</SidebarMenuButton>
					</SidebarMenuItem>
				))}
			</SidebarMenu>
		</SidebarGroup>
	);
};

export default MainNavigation;
