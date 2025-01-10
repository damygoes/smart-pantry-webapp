import type { Meta, StoryObj } from '@storybook/react';
import { Heading } from './Heading';

const meta = {
	title: 'Components/Heading',
	component: Heading,
	tags: ['autodocs'],
	argTypes: {
		children: {
			description: 'The contents of the Heading',
			control: { type: 'text' },
			table: {
				type: { summary: 'string' },
			},
		},
		tag: {
			description: 'The HTML tag of the Heading',
			options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
			control: { type: 'radio' },
			table: {
				defaultValue: { summary: 'h1' },
				type: { summary: 'string' },
			},
		},
		appearance: {
			description: 'The appearance of the Heading',
			options: ['default', 'primary'],
			control: { type: 'radio' },
			table: {
				defaultValue: { summary: 'primary' },
				type: { summary: 'string' },
			},
		},
		size: {
			description: 'How large should the Heading be?',
			options: ['lg', 'xl', '2xl', '3xl'],
			control: { type: 'radio' },
			table: {
				defaultValue: { summary: 'xl' },
				type: { summary: 'string' },
			},
		},
		weight: {
			description: 'The weight of the Heading',
			options: ['medium', 'semibold', 'bold', 'extraBold'],
			control: { type: 'radio' },
			table: {
				defaultValue: { summary: 'bold' },
				type: { summary: 'string' },
			},
		},
	},
	args: {
		children: 'Heading',
		tag: 'h1',
		appearance: 'default',
		size: 'xl',
		weight: 'bold',
	},
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof meta>;

const Template = (args: Story['args']) => (
	<Heading {...args}> {args?.children ?? 'Heading'} </Heading>
);

export const Default: Story = {
	render: Template,
};

export const Large: Story = {
	render: Template,
	args: {
		size: 'lg',
		children: 'Large Heading',
	},
};
export const ExtraLarge: Story = {
	render: Template,
	args: {
		size: 'xl',
		children: 'Extra Large Heading',
	},
};
export const DoubleLarge: Story = {
	render: Template,
	args: {
		size: '2xl',
		children: 'Double Large Heading',
	},
};
export const TripleLarge: Story = {
	render: Template,
	args: {
		size: '3xl',
		children: 'Triple Large Heading',
	},
};

export const Primary: Story = {
	render: Template,
	args: {
		appearance: 'primary',
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

export const ExtraBold: Story = {
	render: Template,
	args: {
		weight: 'extraBold',
	},
};

export const H2: Story = {
	render: Template,
	args: {
		tag: 'h2',
	},
};

export const H3: Story = {
	render: Template,
	args: {
		tag: 'h3',
	},
};

export const H4: Story = {
	render: Template,
	args: {
		tag: 'h4',
	},
};

export const H5: Story = {
	render: Template,
	args: {
		tag: 'h5',
	},
};

export const H6: Story = {
	render: Template,
	args: {
		tag: 'h6',
	},
};
