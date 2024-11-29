import { Separator } from '@components/ui/separator/Separator';
import {
	SidebarInset,
	SidebarProvider,
	SidebarTrigger,
} from '@components/ui/sidebar/Sidebar';
import NavSwitchItems from '@constants/NavSwitchItems';
import { useSearchStore } from '@features/search/store';
import { Outlet } from 'react-router-dom';
import { AppSidebarLeft } from '../navigation/AppSidebarLeft';
import { NavSwitches } from '../navigation/NavSwitches';
import Searchbar from '../searchbar/Searchbar';

const RootLayout = () => {
	const navSwitchItems = NavSwitchItems();
	const { searchQuery, setSearchQuery } = useSearchStore();
	return (
		<SidebarProvider>
			<AppSidebarLeft />
			<SidebarInset>
				<header className="sticky top-0 right-0 flex items-center justify-between w-full gap-2 pl-2 h-14 shrink-0">
					<SidebarTrigger />
					<Separator orientation="vertical" className="h-4 mr-2" />
					<div className="flex items-center justify-between flex-1 w-full h-full">
						<Searchbar
							value={searchQuery ?? ''}
							onChange={setSearchQuery}
							className="w-1/2"
						/>
						<div>
							<NavSwitches actions={navSwitchItems} />
						</div>
					</div>
				</header>
				<main className="flex flex-col flex-1 gap-4 p-4">
					<Outlet />
				</main>
			</SidebarInset>
		</SidebarProvider>
	);
};

export default RootLayout;
