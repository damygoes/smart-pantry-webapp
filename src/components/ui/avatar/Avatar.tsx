import defaultImage from '@assets/user.svg';
import { cn } from '@utils/classNameMerge';
import { type VariantProps, cva } from 'class-variance-authority';
import { useState } from 'react';

const FALLBACK_AVATAR_ALT_TEXT = 'Avatar';
const FALLBACK_AVATAR_SRC = defaultImage;

const avatarVariants = cva(
	'relative flex shrink-0 overflow-hidden rounded-lg',
	{
		variants: {
			size: {
				xs: 'size-[1.6rem]',
				sm: 'size-[2.8rem]',
				md: 'size-[3.8rem]',
				lg: 'size-[5.2rem]',
				xl: 'size-[8.4rem]',
			},
		},
		defaultVariants: {
			size: 'md',
		},
	},
);

interface AvatarProps
	extends React.HTMLAttributes<HTMLDivElement>,
		VariantProps<typeof avatarVariants> {
	/* the url of an image to render for the Avatar  */
	src: string;
	/* the alt text for the Avatar image */
	alt: string;
	// /* the size of the Avatar */
	size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
	/* optionaö classname for the Avatar */
	className?: string;
}

const Avatar = ({
	src,
	alt,
	size = 'md',
	className,
	...props
}: AvatarProps) => {
	const [isImageError, setIsImageError] = useState(false);
	if (!alt) {
		throw new Error('Avatar component requires an alt prop');
	}

	return (
		<div
			className={cn(
				avatarVariants({ size }),
				{
					'border border-solid border-border': isImageError || !src,
				},
				className,
			)}
			{...props}
		>
			<img
				src={src || FALLBACK_AVATAR_SRC}
				alt={alt || FALLBACK_AVATAR_ALT_TEXT}
				onError={(e) => {
					const target = e.target as HTMLImageElement; // assert the target as an HTMLImageElement
					target.onerror = null; // prevents looping
					target.src = FALLBACK_AVATAR_SRC; // set the fallback image
					setIsImageError(true);
				}}
				className={cn('aspect-square h-full w-full object-cover')}
			/>
		</div>
	);
};

Avatar.displayName = 'Avatar';

export { Avatar };
