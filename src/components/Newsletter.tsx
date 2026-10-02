import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, CheckCircle2 } from 'lucide-react';
import { Button } from './Button';

export const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubmitted(true);
    }
  };

  return (
    <section className="py-24 bg-[#F6F0E4] relative border-b border-[#C89B3C]/30 text-center">
      {/* Decorative filigree frame border */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="border border-[#C89B3C]/40 p-8 sm:p-14 bg-[#FFF8F6] relative shadow-luxury">
          {/* Inner Jaipur Hairline */}
          <div className="absolute inset-[6px] border border-[#C89B3C]/25 pointer-events-none" />

          {/* Royal Crest Emblem */}
          <div className="w-14 h-14 mx-auto mb-3">
            <img
              src="/assets/asli_aroma_logo.png"
              alt="ASLI AROMA™ Crest"
              className="w-full h-full object-contain filter drop-shadow-sm"
            />
          </div>

          {/* Tagline */}
          <div className="inline-flex items-center gap-2 text-[#7A1624] mb-3">
            <span className="text-[9px] text-[#C89B3C]">◆</span>
            <span className="label-caps font-semibold">THE SENSORY DISPATCH</span>
            <span className="text-[9px] text-[#C89B3C]">◆</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium text-[#241711] leading-tight">
            Let Your Kitchen Smell Like Home.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#404944] font-light max-w-xl mx-auto leading-relaxed">
            Discover masterclass recipes, single-estate harvest dispatches, and the timeless aroma of authentic India.
          </p>

          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mt-8 p-6 bg-[#064D3B] text-[#F6F0E4] border border-[#C89B3C] max-w-md mx-auto"
            >
              <CheckCircle2 size={24} className="text-[#C89B3C] mx-auto mb-2" />
              <p className="font-serif text-lg font-medium">
                Welcome to the Royal Spice Register.
              </p>
              <p className="text-xs text-[#eed5cb] mt-1 font-mono">
                Your first seasonal harvest guide has been sent to {email}.
              </p>
            </motion.div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="mt-8 max-w-md mx-auto flex flex-col sm:flex-row gap-3 relative z-10"
            >
              <div className="relative flex-grow">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full px-4 py-3 bg-[#F6F0E4] border border-[#C89B3C]/50 text-[#241711] placeholder-[#404944]/60 text-sm focus:outline-none focus:border-[#064D3B] rounded-none transition-colors"
                />
                <Mail
                  size={16}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#C89B3C] pointer-events-none"
                />
              </div>

              <Button
                type="submit"
                variant="primary"
                size="md"
                className="flex-shrink-0"
              >
                Join the Aroma
              </Button>
            </form>
          )}

          {/* Privacy Note */}
          <div className="mt-6 flex items-center justify-center gap-4 text-[10px] text-[#404944] font-mono uppercase tracking-wider">
            <span>◆ 100% SPAM FREE</span>
            <span>◆ MONTHLY HARVEST JOURNAL ONLY</span>
          </div>

        </div>

      </div>
    </section>
  );
};
