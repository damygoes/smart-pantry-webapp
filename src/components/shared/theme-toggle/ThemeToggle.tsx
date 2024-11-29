import { Switch } from '@components/ui/switch/Switch';
import { useTheme } from '@providers/ThemeProvider';
import { useTranslation } from 'react-i18next';
import { MoonIcon, SunIcon } from '../icons';

const ThemeToggle = () => {
	const { theme, setTheme } = useTheme();
	const { t } = useTranslation();

	const isDark = theme === 'dark';

	const handleToggle = (checked: boolean) => {
		setTheme(checked ? 'dark' : 'light');
	};

	return (
		<div className="flex items-center gap-2">
			<span>
				<SunIcon aria-label={t('components.themeToggle.light', 'Light Mode')} />
			</span>
			<div className="flex-1">
				<Switch checked={isDark} onCheckedChange={handleToggle}>
					<span
						className={`${
							isDark ? 'translate-x-6 bg-accent' : 'translate-x-1 bg-background'
						} inline-block h-4 w-4 transform rounded-full transition`}
					/>
				</Switch>
			</div>
			<span>
				<MoonIcon aria-label={t('components.themeToggle.dark', 'Dark Mode')} />
			</span>
		</div>
	);
};

export default ThemeToggle;
