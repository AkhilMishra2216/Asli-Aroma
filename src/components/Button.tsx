import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

export interface ButtonProps extends Omit<HTMLMotionProps<'button'>, 'children'> {
  variant?: 'primary' | 'secondary' | 'gold' | 'tertiary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  icon,
  iconPosition = 'right',
  className = '',
  ...props
}) => {
  const sizeStyles = {
    sm: 'px-4 py-2 text-xs tracking-wider',
    md: 'px-6 py-3 text-sm tracking-wider',
    lg: 'px-8 py-4 text-base tracking-widest'
  };

  const variantStyles = {
    primary:
      'bg-[#064D3B] text-[#F6F0E4] border border-[#C89B3C] hover:bg-[#241711] hover:border-[#d4af37] shadow-sm hover:shadow-gold-glow transition-all duration-300 font-medium',
    secondary:
      'bg-transparent text-[#241711] border border-[#C89B3C] hover:bg-[#C89B3C] hover:text-[#241711] transition-all duration-300 font-medium',
    gold:
      'bg-[#C89B3C] text-[#241711] border border-[#d4af37] hover:bg-[#a67d28] hover:text-[#FFFFFF] shadow-sm hover:shadow-gold-glow transition-all duration-300 font-semibold',
    tertiary:
      'bg-transparent text-[#7A1624] hover:text-[#064D3B] p-0 border-b border-[#7A1624] hover:border-[#064D3B] transition-all duration-200 font-medium tracking-[0.14em] uppercase text-xs inline-flex items-center gap-2',
    ghost:
      'bg-transparent text-inherit hover:bg-[rgba(200,155,60,0.1)] border border-transparent hover:border-[rgba(200,155,60,0.3)] transition-all duration-200'
  };

  const isTertiary = variant === 'tertiary';

  return (
    <motion.button
      whileTap={{ scale: 0.98 }}
      className={`inline-flex items-center justify-center gap-2.5 rounded-none uppercase select-none transition-colors ${
        !isTertiary ? sizeStyles[size] : ''
      } ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {icon && iconPosition === 'left' && <span className="flex-shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="flex-shrink-0">{icon}</span>}
      {isTertiary && !icon && <span className="text-[#C89B3C] text-[10px]">◆</span>}
    </motion.button>
  );
};
