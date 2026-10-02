import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { Button } from './Button';
import { PageRoute } from '../types';

interface HeroProps {
  onNavigate: (page: PageRoute) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Slow subtle parallax
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  });

  const yBackground = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const yForeground = useTransform(scrollYProgress, [0, 1], [0, -40]);

  // Floating spice particle mist effect on canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.offsetWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.offsetHeight || 720);

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.offsetWidth;
      height = canvas.height = canvas.parentElement.offsetHeight;
    };
    window.addEventListener('resize', handleResize);

    // Warm golden & copper particles evoking ground cardamom, turmeric pollen, and star anise dust
    const particleCount = 28;
    const particles = Array.from({ length: particleCount }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 2 + 0.6,
      speedX: (Math.random() - 0.5) * 0.35,
      speedY: -Math.random() * 0.45 - 0.15, // float upwards gently
      opacity: Math.random() * 0.5 + 0.2,
      color: Math.random() > 0.4 ? '#C89B3C' : '#d4af37'
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;

        if (p.y < 0) {
          p.y = height + 5;
          p.x = Math.random() * width;
        }
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.opacity;
        ctx.shadowBlur = 4;
        ctx.shadowColor = '#C89B3C';
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[92vh] lg:min-h-[95vh] bg-[#003427] text-[#F6F0E4] overflow-hidden flex items-center justify-center border-b border-[#C89B3C]/30"
    >
      {/* Background Subtle Gradient & Terroir Pattern */}
      <motion.div
        style={{ y: yBackground }}
        className="absolute inset-0 pointer-events-none opacity-40 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#0d634e] via-[#064D3B] to-[#002117]"
      />

      {/* Subtle organic topography contour linework */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#C89B3C 1px, transparent 1px)`,
          backgroundSize: '32px 32px'
        }}
      />

      {/* Floating Spice Particles Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-10 opacity-70" />

      {/* Hero Content Container */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Headline & Actions */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Tagline / Lot Origin */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 bg-[#064D3B]/90 border border-[#C89B3C]/40 mb-6 text-[#C89B3C]"
            >
              <img
                src="/assets/asli_aroma_logo.png"
                alt="ASLI AROMA™"
                className="w-5 h-5 object-contain"
              />
              <span className="label-caps font-semibold tracking-[0.18em] text-[10px] text-[#F6F0E4]">
                ASLI AROMA™ ESTATE HARVEST • WAYANAD & MALABAR COAST
              </span>
            </motion.div>

            {/* Main Editorial Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal tracking-tight text-[#F6F0E4] leading-[1.08]"
            >
              The True Taste{' '}
              <br />
              <span className="italic font-serif text-[#C89B3C] font-normal">
                of India.
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
              className="mt-6 text-base sm:text-lg md:text-xl text-[#F6F0E4]/85 font-light leading-relaxed max-w-xl"
            >
              Authentic spices. Timeless culinary traditions. Sourced directly from the sacred spice hills of Kerala and Malabar. Preserving natural volatile oils, aromas and medicinal gastronomy.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <Button
                variant="gold"
                size="lg"
                onClick={() => onNavigate('shop')}
                icon={<ArrowRight size={16} />}
              >
                Explore Our Spices
              </Button>

              <Button
                variant="secondary"
                size="lg"
                onClick={() => onNavigate('our-story')}
                className="text-[#F6F0E4] border-[#C89B3C]/70 hover:bg-[#C89B3C] hover:text-[#241711]"
              >
                Our Story
              </Button>
            </motion.div>

            {/* Bottom Proof Metrics Strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="mt-12 pt-8 border-t border-[#C89B3C]/25 w-full grid grid-cols-3 gap-4 max-w-lg"
            >
              <div>
                <div className="font-serif text-2xl sm:text-3xl font-semibold text-[#C89B3C]">
                  4.8%
                </div>
                <div className="text-[10px] sm:text-xs uppercase tracking-wider text-[#F6F0E4]/70 font-mono mt-0.5">
                  Avg. Volatile Oil
                </div>
              </div>

              <div>
                <div className="font-serif text-2xl sm:text-3xl font-semibold text-[#C89B3C]">
                  100%
                </div>
                <div className="text-[10px] sm:text-xs uppercase tracking-wider text-[#F6F0E4]/70 font-mono mt-0.5">
                  Sun-Cured Terroir
                </div>
              </div>

              <div>
                <div className="font-serif text-2xl sm:text-3xl font-semibold text-[#C89B3C]">
                  72h
                </div>
                <div className="text-[10px] sm:text-xs uppercase tracking-wider text-[#F6F0E4]/70 font-mono mt-0.5">
                  Micro-Batch Milled
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Layered Cinematic Product Composition */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <motion.div
              style={{ y: yForeground }}
              className="relative w-full max-w-md lg:max-w-none"
            >
              {/* Back Layer: Signature Gift Box Archival Mount */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, rotate: -2 }}
                animate={{ opacity: 1, scale: 1, rotate: -2 }}
                transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-10 bg-[#FFFFFF] p-3 shadow-2xl border border-[#C89B3C]/50 transition-transform duration-700 hover:rotate-0"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-[#F6F0E4]">
                  <img
                    src="/assets/asli_aroma_gift_box.jpg"
                    alt="ASLI AROMA™ Royal Three-Blend Gift Box"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-2 left-2 bg-[#241711]/80 backdrop-blur-xs text-[#F6F0E4] px-2 py-0.5 text-[9px] uppercase tracking-widest font-mono">
                    Imperial Archive Folio #03
                  </div>
                </div>
                <div className="pt-2 px-1 flex items-center justify-between text-[#241711]">
                  <span className="font-serif text-xs font-semibold tracking-wider">
                    Premium Spice Collection
                  </span>
                  <span className="text-[10px] text-[#7A1624] font-mono tracking-widest uppercase">
                    Kashmir • Salem • Wayanad
                  </span>
                </div>
              </motion.div>

              {/* Front Overlapping Layer: User's Authentic Clove Jar with Warm Chiaroscuro Lighting */}
              <motion.div
                initial={{ opacity: 0, y: 30, x: 20 }}
                animate={{ opacity: 1, y: 0, x: 0 }}
                transition={{ duration: 1.1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="absolute -bottom-8 -right-4 sm:-bottom-12 sm:-right-8 z-20 w-44 sm:w-56 md:w-64 bg-[#F6F0E4] p-2.5 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.7)] border-2 border-[#C89B3C]"
              >
                <div className="relative aspect-square overflow-hidden bg-[#241711]">
                  <img
                    src="/assets/product_laung_cloves.jpg"
                    alt="ASLI AROMA™ Single Estate Malabar Cloves Jar"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute top-2 right-2 bg-[#064D3B] text-[#F6F0E4] p-1 border border-[#C89B3C]">
                    <ShieldCheck size={14} className="text-[#C89B3C]" />
                  </div>
                </div>
                <div className="p-2 text-center bg-[#F6F0E4]">
                  <p className="label-caps text-[#7A1624] text-[9px] font-semibold">
                    Malabar Coast • Single Estate
                  </p>
                  <p className="font-serif text-xs text-[#241711] font-semibold mt-0.5">
                    Whole Cloves (Laung)
                  </p>
                  <p className="text-[10px] text-[#064D3B] font-mono mt-0.5">
                    17.4% Pure Eugenol
                  </p>
                </div>
              </motion.div>

              {/* Decorative Antique Gold Corner Filigree */}
              <div className="absolute -top-4 -left-4 w-12 h-12 border-t-2 border-l-2 border-[#C89B3C] pointer-events-none opacity-60" />
            </motion.div>
          </div>

        </div>
      </div>

      {/* Bottom Architectural Transition Hairline */}
      <div className="absolute bottom-0 left-0 right-0 gold-hairline" />
    </section>
  );
};
