import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  tagline?: string;
  title: string;
  italicTitle?: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  theme?: 'light' | 'dark' | 'emerald';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  tagline,
  title,
  italicTitle,
  subtitle,
  align = 'center',
  theme = 'light',
  className = ''
}) => {
  const isDark = theme === 'dark';
  const isEmerald = theme === 'emerald';

  const tagColor = isDark || isEmerald ? 'text-[#C89B3C]' : 'text-[#7A1624]';
  const titleColor = isDark || isEmerald ? 'text-[#F6F0E4]' : 'text-[#241711]';
  const subColor = isDark || isEmerald ? 'text-[#eed5cb] opacity-90' : 'text-[#404944]';

  const alignStyles = {
    left: 'text-left items-start',
    center: 'text-center items-center',
    right: 'text-right items-end'
  };

  return (
    <div className={`flex flex-col max-w-3xl ${alignStyles[align]} ${className}`}>
      {tagline && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`inline-flex items-center gap-2 mb-3.5 ${tagColor}`}
        >
          <span className="text-[9px] text-[#C89B3C]">◆</span>
          <span className="label-caps font-semibold">{tagline}</span>
          <span className="text-[9px] text-[#C89B3C]">◆</span>
        </motion.div>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className={`font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight leading-[1.15] ${titleColor}`}
      >
        {title}{' '}
        {italicTitle && (
          <span className="italic font-normal font-serif text-[#C89B3C]">
            {italicTitle}
          </span>
        )}
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className={`mt-4 text-base sm:text-lg font-light leading-relaxed max-w-2xl ${subColor}`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};
