import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, ShieldCheck } from 'lucide-react';
import { Button } from './Button';

interface AccountModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AccountModal: React.FC<AccountModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (!isOpen) return null;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setIsLoggedIn(true);
    }
  };

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 bg-[#002117]/80 backdrop-blur-md flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-[#F6F0E4] border-2 border-[#C89B3C] max-w-md w-full p-6 sm:p-8 shadow-2xl relative"
        >
          {/* Close */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-xs font-mono uppercase text-[#241711] hover:text-[#7A1624] px-2 py-1 border border-[#C89B3C]"
          >
            [ CLOSE ✕ ]
          </button>

          {!isLoggedIn ? (
            <div>
              <div className="w-16 h-16 mx-auto mb-3">
                <img
                  src="/assets/asli_aroma_logo.png"
                  alt="ASLI AROMA™ Crest"
                  className="w-full h-full object-contain filter drop-shadow-sm"
                />
              </div>

              <h3 className="font-serif text-2xl font-medium text-center text-[#241711]">
                ASLI AROMA™ Connoisseur Portal
              </h3>
              <p className="text-xs text-center text-[#404944] mt-1.5 leading-relaxed">
                Access your private harvest allocations, reserve tasting invitations, and track temperature-controlled consignments.
              </p>

              <form onSubmit={handleLogin} className="mt-6 space-y-4">
                <div>
                  <label className="label-caps text-[#064D3B] text-[10px] block mb-1">
                    Registered Email
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="patron@estate.com"
                    className="w-full px-3.5 py-2.5 bg-[#FFF8F6] border border-[#C89B3C] text-sm text-[#241711] rounded-none focus:outline-none focus:border-[#064D3B]"
                  />
                </div>

                <Button variant="primary" size="md" type="submit" className="w-full">
                  Sign In to Vault
                </Button>
              </form>

              <p className="mt-4 text-[10px] text-center text-[#404944] font-mono">
                No password required. Instant token dispatched to your email.
              </p>
            </div>
          ) : (
            <div className="text-center">
              <div className="w-14 h-14 rounded-full border-2 border-[#C89B3C] flex items-center justify-center mx-auto mb-4 bg-[#064D3B] text-[#C89B3C]">
                <Award size={28} />
              </div>

              <span className="label-caps text-[#7A1624] text-xs font-semibold">
                HERITAGE PATRON STATUS: ACTIVE
              </span>
              <h3 className="font-serif text-2xl font-medium text-[#241711] mt-1">
                Welcome, Culinary Patron
              </h3>
              <p className="text-xs font-mono text-[#064D3B] mt-1">{email}</p>

              <div className="mt-6 p-4 bg-[#EFE6D4] border border-[#C89B3C]/40 text-left text-xs space-y-2">
                <div className="flex items-center justify-between pb-2 border-b border-[#C89B3C]/20">
                  <span className="text-[#404944]">Allocated Lot:</span>
                  <span className="font-mono font-bold text-[#064D3B]">Wayanad Cloves #42</span>
                </div>
                <div className="flex items-center justify-between pb-2 border-b border-[#C89B3C]/20">
                  <span className="text-[#404944]">Terroir Privilege Tier:</span>
                  <span className="font-mono text-[#7A1624]">Maharaja Reserve</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#404944]">Consignment Status:</span>
                  <span className="font-mono text-[#064D3B] flex items-center gap-1">
                    <ShieldCheck size={12} className="text-[#C89B3C]" /> Express Dispatch Ready
                  </span>
                </div>
              </div>

              <div className="mt-6 flex gap-2">
                <Button
                  variant="gold"
                  size="sm"
                  onClick={() => setIsLoggedIn(false)}
                  className="w-full"
                >
                  Sign Out
                </Button>
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={onClose}
                  className="w-full"
                >
                  Close
                </Button>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
