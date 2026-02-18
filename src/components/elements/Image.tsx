import Image, { ImageProps as NextImagePropsRaw } from 'next/image';
import { CSSProperties } from 'react';

// For NextImage (Strict Numbers)
type TNextImageProps = Omit<NextImagePropsRaw, 'width' | 'height'> & {
  borderRadius?: string | number;
  size?: number;
  width?: number;
  height?: number;
  sizes?: string;
  fill?: boolean;
  className?: string;
  style?: CSSProperties;
};

// Components

export const NextImage = ({
  src,
  alt,
  width,
  height,
  size,
  priority = false,
  borderRadius,
  className,
  style,
  fill,
  sizes,
  ...props
}: TNextImageProps) => {
  const dimensions = fill
    ? {
        fill: true,
        sizes: sizes || '100vw',
      }
    : {
        width: size ?? width ?? 40,
        height: size ?? height ?? 40,
      };

  return (
    <Image
      src={src}
      alt={alt || ''}
      priority={priority}
      className={className}
      style={{
        borderRadius,
        ...style,
      }}
      {...dimensions}
      {...props}
    />
  );
};
