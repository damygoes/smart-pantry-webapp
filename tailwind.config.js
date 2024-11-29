/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./index.html',
		'./src/**/*.{ts,tsx,js,jsx}',
		'./src/stories/**/*.{ts,tsx}',
		'./src/**/*.stories.{ts,tsx}',
	],
	prefix: '',
	theme: {
		container: {
			center: 'true',
			padding: '2rem',
			screens: {
				'2xl': '1400px',
			},
		},
		colors: {
			background: 'hsl(var(--background))',
			foreground: 'hsl(var(--foreground))',
			card: {
				DEFAULT: 'hsl(var(--card))',
				foreground: 'hsl(var(--card-foreground))',
			},
			popover: {
				DEFAULT: 'hsl(var(--popover))',
				foreground: 'hsl(var(--popover-foreground))',
			},
			primary: {
				DEFAULT: 'hsl(var(--primary))',
				foreground: 'hsl(var(--primary-foreground))',
			},
			secondary: {
				DEFAULT: 'hsl(var(--secondary))',
				foreground: 'hsl(var(--secondary-foreground))',
			},
			muted: {
				DEFAULT: 'hsl(var(--muted))',
				foreground: 'hsl(var(--muted-foreground))',
			},
			accent: {
				DEFAULT: 'hsl(var(--accent))',
				foreground: 'hsl(var(--accent-foreground))',
			},
			destructive: {
				DEFAULT: 'hsl(var(--destructive))',
				foreground: 'hsl(var(--destructive-foreground))',
			},
			border: 'hsl(var(--border))',
			input: 'hsl(var(--input))',
			ring: 'hsl(var(--ring))',
			chart: {
				1: 'hsl(var(--chart-1))',
				2: 'hsl(var(--chart-2))',
				3: 'hsl(var(--chart-3))',
				4: 'hsl(var(--chart-4))',
				5: 'hsl(var(--chart-5))',
			},
		},
		fontFamily: {
			sans: ['Lato', 'sans-serif'],
		},
		fontSize: {
			'3xs': 'calc(var(--font-size) - 0.375rem)',
			'2xs': 'calc(var(--font-size) - 0.25rem)',
			xs: 'calc(var(--font-size) - 0.125rem)',
			sm: 'var(--font-size)',
			base: 'calc(var(--font-size) + 0.125rem)',
			lg: 'calc(var(--font-size) + 0.25rem)',
			xl: 'calc(var(--font-size) + 0.375rem)',
			'2xl': 'calc(var(--font-size) + 0.5rem)',
			'3xl': 'calc(var(--font-size) + 0.625rem)',
		},
		borderRadius: {
			lg: 'var(--radius)',
			md: 'calc(var(--radius) - 2px)',
			sm: 'calc(var(--radius) - 4px)',
		},
		extend: {
			keyframes: {
				'caret-blink': {
					'0%,70%,100%': {
						opacity: '1',
					},
					'20%,50%': {
						opacity: '0',
					},
				},
			},
			animation: {
				'caret-blink': 'caret-blink 1.25s ease-out infinite',
			},
			colors: {
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))',
				},
			},
		},
	},
	plugins: [require('tailwindcss-animate')],
};