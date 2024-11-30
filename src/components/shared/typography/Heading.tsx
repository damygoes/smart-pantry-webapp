import { cn } from '@utils/classNameMerge';
import { type VariantProps, cva } from 'class-variance-authority';

const headingVariants = cva('text-balance', {
	variants: {
		appearance: {
			default: 'text-muted-foreground',
			primary: 'text-primary',
			secondary: 'text-secondary',
		},
		size: {
			lg: 'text-lg',
			xl: 'text-xl',
			'2xl': 'text-2xl',
			'3xl': 'text-3xl',
		},
		weight: {
			medium: 'font-medium',
			semibold: 'font-semibold',
			bold: 'font-bold',
			extraBold: 'font-extrabold',
		},
	},
	defaultVariants: {
		size: 'xl',
		appearance: 'default',
		weight: 'bold',
	},
});

export interface HeadingProps
	extends React.HTMLAttributes<HTMLHeadingElement>,
		VariantProps<typeof headingVariants> {
	/** Heading contents */
	children: React.ReactNode;
	/** The HTML tag of the heading */
	tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
	/** The appearance of the heading */
	appearance?: 'default' | 'primary' | 'secondary';
	/** How large should the heading be? */
	size?: 'lg' | 'xl' | '2xl' | '3xl';
	/** The weight of the heading */
	weight?: 'medium' | 'semibold' | 'bold' | 'extraBold';
}

const Heading = ({
	children,
	className,
	tag = 'h1',
	size = 'xl',
	appearance = 'default',
	weight = 'bold',
	...props
}: HeadingProps) => {
	let Tag: keyof JSX.IntrinsicElements;

	switch (tag) {
		case 'h2':
			Tag = 'h2';
			break;
		case 'h3':
			Tag = 'h3';
			break;
		case 'h4':
			Tag = 'h4';
			break;
		case 'h5':
			Tag = 'h5';
			break;
		case 'h6':
			Tag = 'h6';
			break;
		default:
			Tag = 'h1';
			break;
	}

	return (
		<Tag
			className={cn(headingVariants({ size, appearance, weight }), className)}
			{...props}
		>
			{children}
		</Tag>
	);
};

Heading.displayName = 'Heading';

export { Heading };
