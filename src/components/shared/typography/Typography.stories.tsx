import type { Meta, StoryObj } from '@storybook/react';
import { Typography } from './Typography';

const meta = {
	title: 'Components/Typography',
	component: Typography,
	tags: ['autodocs'],
	argTypes: {
		children: {
			description: 'Typography contents',
			control: { type: 'text' },
			table: {
				type: { summary: 'string' },
			},
		},
		size: {
			description: 'How large should the typography be?',
			options: ['xs', 'sm', 'base', 'lg'],
			control: { type: 'radio' },
			table: {
				defaultValue: { summary: 'sm' },
				type: { summary: 'string' },
			},
		},
		weight: {
			description: 'The weight of the typography',
			options: ['light', 'normal', 'medium', 'semibold', 'bold'],
			control: { type: 'radio' },
			table: {
				defaultValue: { summary: 'normal' },
				type: { summary: 'string' },
			},
		},
		appearance: {
			description: 'The appearance of the typography',
			options: ['default', 'primary', 'destructive'],
			control: { type: 'radio' },
			table: {
				defaultValue: { summary: 'default' },
				type: { summary: 'string' },
			},
		},
	},
	args: {
		children: 'Typography',
		size: 'sm',
		weight: 'normal',
		appearance: 'default',
	},
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof Typography>;

const Template = (args: Story['args']) => (
	<Typography {...args}> {args?.children ?? 'Typography'} </Typography>
);

export const Default: Story = {
	render: Template,
};

export const Primary: Story = {
	render: Template,
	args: {
		appearance: 'primary',
	},
};

export const Destructive: Story = {
	render: Template,
	args: {
		appearance: 'destructive',
	},
};

export const Light: Story = {
	render: Template,
	args: {
		weight: 'light',
	},
};

export const Medium: Story = {
	render: Template,
	args: {
		weight: 'medium',
	},
};

export const Semibold: Story = {
	render: Template,
	args: {
		weight: 'semibold',
	},
};

export const Bold: Story = {
	render: Template,
	args: {
		weight: 'bold',
	},
};

export const ExtraSmall: Story = {
	render: Template,
	args: {
		size: 'xs',
	},
};

export const Small: Story = {
	render: Template,
	args: {
		size: 'sm',
	},
};

export const Base: Story = {
	render: Template,
	args: {
		size: 'base',
	},
};

export const Large: Story = {
	render: Template,
	args: {
		size: 'lg',
	},
};
