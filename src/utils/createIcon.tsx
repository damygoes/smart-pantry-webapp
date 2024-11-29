import type { ComponentPropsWithoutRef, ElementType } from 'react';

// Extend SVGProps to include `size`
type IconProps = ComponentPropsWithoutRef<'svg'> & {
  size?: number;
};

// Helper function to create icons with common properties
export const createIcon = (IconComponent: ElementType) => {
  if (!IconComponent) {
    throw new Error('IconComponent is required');
  }

  return ({ size = 15, ...props }: IconProps) => (
    <IconComponent width={size} height={size} {...props} />
  );
};
