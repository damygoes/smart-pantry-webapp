import { LanguagesIcon } from '@components/shared/icons';
import LanguageSwitch from '@components/shared/language-switch/LanguageSwitch';
import type { NavSwitchItem } from '@components/shared/navigation/NavSwitches';
import ThemeToggle from '@components/shared/theme-toggle/ThemeToggle';

const NavSwitchItems = () => {
	const items: NavSwitchItem[] = [
		{
			title: <ThemeToggle />,
		},
		{
			title: <LanguageSwitch />,
			icon: LanguagesIcon,
		},
	];
	return items;
};

export default NavSwitchItems;
