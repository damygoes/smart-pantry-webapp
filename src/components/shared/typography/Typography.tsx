import { cn } from '@utils/classNameMerge';
import { cva } from 'class-variance-authority';

const typographyVariants = cva('text-balance', {
	variants: {
		size: {
			xs: 'text-xs',
			sm: 'text-sm',
			base: 'text-base',
			lg: 'text-lg',
		},
		weight: {
			light: 'font-light',
			normal: 'font-normal',
			medium: 'font-medium',
			semibold: 'font-semibold',
			bold: 'font-bold',
		},
		appearance: {
			default: 'text-muted-foreground',
			primary: 'text-primary',
			destructive: 'text-destructive',
		},
	},
	defaultVariants: {
		size: 'sm',
		weight: 'normal',
		appearance: 'default',
	},
});

export interface TypographyProps
	extends React.HTMLAttributes<HTMLParagraphElement> {
	/** Typography contents */
	children: React.ReactNode;
	/** How large should the typography be? */
	size?: 'xs' | 'sm' | 'base' | 'lg';
	/** The weight of the typography */
	weight?: 'light' | 'normal' | 'medium' | 'semibold' | 'bold';
	/** The appearance of the typography */
	appearance?: 'default' | 'primary' | 'destructive';
	/** Additional class name */
	className?: string;
}

const Typography = ({
	children,
	size = 'sm',
	weight = 'normal',
	appearance = 'default',
	className,
	...props
}: TypographyProps) => {
	return (
		<p
			className={cn(
				typographyVariants({ size, weight, appearance }),
				className,
			)}
			{...props}
		>
			{children}
		</p>
	);
};

Typography.displayName = 'Typography';

export { Typography };
