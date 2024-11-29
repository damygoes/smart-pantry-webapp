import { Button } from '@components/ui/button/Button';
import { Calendar } from '@components/ui/calendar/Calendar';
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@components/ui/popover/Popover';
import { cn } from '@utils/classNameMerge';
import { format } from 'date-fns';
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { CalendarIcon } from '../icons';

export function DatePicker() {
	const { t } = useTranslation();
	const [date, setDate] = React.useState<Date>();

	return (
		<Popover>
			<PopoverTrigger asChild>
				<Button
					variant={'outline'}
					className={cn(
						'justify-start text-left font-normal',
						!date && 'text-muted-foreground',
					)}
				>
					<CalendarIcon className="w-4 h-4 mr-2" />
					{date ? (
						format(date, 'PPP')
					) : (
						<span>
							{t('components.datePicker.placeholder', 'Select a Date')}
						</span>
					)}
				</Button>
			</PopoverTrigger>
			<PopoverContent className="w-auto p-0">
				<Calendar mode="single" selected={date} onSelect={setDate} />
			</PopoverContent>
		</Popover>
	);
}
