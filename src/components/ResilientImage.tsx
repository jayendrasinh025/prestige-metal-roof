import React, { useState } from 'react';
import { Shield } from 'lucide-react';

interface ResilientImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  fallbackLabel?: string;
}

export const ResilientImage: React.FC<ResilientImageProps> = ({
  src,
  alt,
  fallbackLabel,
  className = '',
  ...props
}) => {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-[#161920] via-[#111318] to-[#0B0C0E] text-[#8E95A5] p-6 text-center ${className}`}
        role="img"
        aria-label={alt}
      >
        <Shield className="w-8 h-8 text-[#C89D66]/60 mb-3 stroke-[1.5]" />
        <span className="text-xs font-medium tracking-wide text-[#D1D5DB]">
          {fallbackLabel || alt}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
      {...props}
    />
  );
};
