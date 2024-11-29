import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from './Avatar';

const meta = {
    title: 'Primitives/Avatar',
    component: Avatar,
    tags: ['autodocs'],
    argTypes: {
        size: {
            description: 'The size of the Avatar',
            options: ['sm', 'md', 'lg', 'xl'],
            control: { type: 'radio' },
            table: {
                defaultValue: { summary: 'md' },
                type: { summary: 'string' },
            },
        },
        src: {
            description: 'The url of an image to render for the Avatar',
            control: { type: 'text' },
            table: {
                type: { summary: 'string' },
            },
        },
        alt: {
            description: 'The alt text for the Avatar image',
            control: { type: 'text' },
            table: {
                type: { summary: 'string' },
            },
        },
    },
    args: {
        size: 'md',
        src: 'https://randomuser.me/api/portraits',
        alt: 'Random user',
    },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => <Avatar src='' alt='#' />
  }
export const Small: Story = {
    render: () => <Avatar size='sm' src='' alt='#' />
  }
export const Medium: Story = {
    render: () => <Avatar size='md' src='' alt='#' />
  }
export const Large: Story = {
    render: () => <Avatar size='lg' src='' alt='#' />
  }
export const ExtraLarge: Story = {
    render: () => <Avatar size='xl' src='' alt='#' />
  }
export const WithImage: Story = {
    render: () => <Avatar src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyfGVufDB8fDB8fHww' alt='Random user' />
  }
export const WithImageSmall: Story = {
    render: () => <Avatar size='sm' src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyfGVufDB8fDB8fHww' alt='Random user' />
  }
export const WithImageMedium: Story = {
    render: () => <Avatar size='md' src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyfGVufDB8fDB8fHww' alt='Random user' />
  }
export const WithImageLarge: Story = {
    render: () => <Avatar size='lg' src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyfGVufDB8fDB8fHww' alt='Random user' />
  }
export const WithImageExtraLarge: Story = {
    render: () => <Avatar size='xl' src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyfGVufDB8fDB8fHww' alt='Random user' />
  }
