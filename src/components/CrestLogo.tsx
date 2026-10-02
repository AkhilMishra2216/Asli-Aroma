import React from 'react';

interface CrestLogoProps {
  variant?: 'light' | 'dark' | 'emerald';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSubtitle?: boolean;
  className?: string;
  onClick?: () => void;
}

export const CrestLogo: React.FC<CrestLogoProps> = ({
  variant = 'light',
  size = 'md',
  showSubtitle = true,
  className = '',
  onClick
}) => {
  const isLight = variant === 'light'; // dark text on light cream
  const textColor = isLight ? 'text-[#241711]' : 'text-[#F6F0E4]';
  const subColor = isLight ? 'text-[#064D3B]' : 'text-[#C89B3C]';

  const iconSizes = {
    sm: 'w-8 h-8',
    md: 'w-11 h-11',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24'
  };

  const titleSizes = {
    sm: 'text-base tracking-[0.18em]',
    md: 'text-xl tracking-[0.22em]',
    lg: 'text-2xl tracking-[0.25em]',
    xl: 'text-4xl tracking-[0.25em]'
  };

  const subSizes = {
    sm: 'text-[9px] tracking-[0.22em]',
    md: 'text-[10px] tracking-[0.26em]',
    lg: 'text-xs tracking-[0.28em]',
    xl: 'text-sm tracking-[0.3em]'
  };

  return (
    <div
      onClick={onClick}
      className={`inline-flex items-center gap-3.5 select-none cursor-pointer group ${className}`}
      role="button"
      tabIndex={0}
      aria-label="ASLI AROMA™ Home"
    >
      {/* Royal 3D Crest Monogram Crown & Medallion */}
      <div className={`relative flex-shrink-0 ${iconSizes[size]} transition-transform duration-500 group-hover:scale-105`}>
        <img
          src="/assets/asli_aroma_logo.png"
          alt="ASLI AROMA™ Royal Crest"
          className="w-full h-full object-contain filter drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)]"
        />
      </div>

      {/* Brand Name with Trademark & Editorial Subtitle */}
      <div className="flex flex-col text-left">
        <span
          className={`font-serif font-semibold uppercase leading-tight transition-colors duration-300 ${textColor} ${titleSizes[size]} group-hover:text-[#C89B3C] flex items-baseline`}
        >
          ASLI AROMA
          <span className="text-[0.65em] font-sans font-bold tracking-normal ml-0.5 text-[#C89B3C]">
            ™
          </span>
        </span>
        {showSubtitle && (
          <span
            className={`font-sans uppercase font-medium mt-0.5 leading-none transition-colors ${subColor} ${subSizes[size]}`}
          >
            Spice Garden of India
          </span>
        )}
      </div>
    </div>
  );
};
