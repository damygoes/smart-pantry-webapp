import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { createIcon } from '@utils/createIcon';
import { describe, expect, it } from 'vitest';

const MockIcon = (props: React.SVGProps<SVGSVGElement>) => (
	<svg data-testid="mock-icon" {...props} />
);

describe('createIcon', () => {
	it('should create a component that renders the provided IconComponent with default size', () => {
		const WrappedIcon = createIcon(MockIcon);

		const { getByTestId } = render(<WrappedIcon />);
		const iconElement = getByTestId('mock-icon');

		expect(iconElement).toBeInTheDocument();
		expect(iconElement).toHaveAttribute('width', '15'); // Default size
		expect(iconElement).toHaveAttribute('height', '15');
	});

	it('should forward custom props to the IconComponent', () => {
		const WrappedIcon = createIcon(MockIcon);

		const { getByTestId } = render(
			<WrappedIcon
				size={20}
				className="custom-class"
				data-custom="custom-data"
			/>,
		);

		const iconElement = getByTestId('mock-icon');
		expect(iconElement).toHaveAttribute('width', '20'); // Overridden size
		expect(iconElement).toHaveAttribute('height', '20');
		expect(iconElement).toHaveAttribute('class', 'custom-class');
		expect(iconElement).toHaveAttribute('data-custom', 'custom-data');
	});

	it('should throw an error when IconComponent is undefined or null', () => {
		expect(() => createIcon(undefined as never)).toThrow(
			'IconComponent is required',
		);
		expect(() => createIcon(null as never)).toThrow(
			'IconComponent is required',
		);
	});
});
