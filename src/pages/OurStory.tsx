import React from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { Compass, Leaf, ShieldCheck, Check, X } from 'lucide-react';
import { Button } from '../components/Button';
import { PageRoute } from '../types';

interface OurStoryProps {
  onNavigate: (page: PageRoute) => void;
}

export const OurStory: React.FC<OurStoryProps> = ({ onNavigate }) => {
  return (
    <div className="pt-8 pb-24 bg-[#F6F0E4] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="py-12 border-b border-[#C89B3C]/30 text-center">
          <SectionHeading
            tagline="PROVENANCE & INTEGRITY"
            title="The Soul of"
            italicTitle="ASLI AROMA™"
            subtitle="Reviving the sacred terroir of ancient Indian spice gardens. Why true culinary aroma cannot be mass manufactured."
            align="center"
            className="mx-auto"
          />
        </div>

        {/* Hero Narrative with Full Plantation Image */}
        <div className="mt-12">
          <div className="relative aspect-[21/9] sm:aspect-[16/7] overflow-hidden bg-[#241711] border-2 border-[#C89B3C]">
            <img
              src="/assets/kerala_plantation.jpg"
              alt="Asli Aroma Shade Canopy Spice Plantation in Wayanad"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#241711]/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-[#F6F0E4] flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <span className="label-caps text-[#C89B3C] text-xs">
                  ESTATE 04 • WAYANAD CLOUD FORESTS
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-white font-medium">
                  Where Wild Cardamom & Pepper Vines Flourish
                </h3>
              </div>
              <span className="text-xs font-mono text-[#eed5cb] bg-[#064D3B]/90 px-3 py-1 border border-[#C89B3C]/40">
                Rainforest Alliance Certified Agro-Forestry
              </span>
            </div>
          </div>
        </div>

        {/* Editorial Essay 2-Column */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-6 font-light text-base sm:text-lg text-[#241711] leading-relaxed space-y-6 text-left">
            <h3 className="font-serif text-3xl font-medium text-[#064D3B]">
              The Stolen Perfume of Indian Kitchens
            </h3>
            <p>
              For centuries, the spice ports of Muziris, Calicut, and Cochin were the center of world trade because Indian spices held an unmatched aromatic concentration. A single cracked clove or a pinch of crushed black pepper could perfume an entire palace kitchen.
            </p>
            <p className="text-[#404944] text-base">
              Over the last half-century, industrialisation compromised this legacy. In the race for cheap supermarket scalability, spices were subjected to high-speed hammer mills spinning at thousands of RPMs. The extreme friction generates temperatures upwards of 75°C to 90°C.
            </p>
            <p className="text-[#404944] text-base">
              At that temperature, the fragile monoterpenes, eugenol, and piperine — the literal soul and medicine of the spice — vaporize into the factory exhaust. What ends up on modern grocery shelves is sterile, flavor-exhausted sawdust dyed with artificial enhancers.
            </p>
          </div>

          <div className="lg:col-span-6 bg-[#FFF8F6] p-8 border border-[#C89B3C] shadow-luxury text-left">
            <h4 className="label-caps text-[#7A1624] text-xs font-semibold mb-2">
              OUR SACRED PROMISE
            </h4>
            <h3 className="font-serif text-2xl font-medium text-[#241711] mb-4">
              “Untouched by Industrial Heat.”
            </h3>
            <p className="text-xs sm:text-sm text-[#404944] leading-relaxed font-light mb-6">
              <strong className="font-semibold text-[#064D3B]">ASLI AROMA™</strong> was founded to restore spices to their original biological nobility. We source exclusively from multi-generational heritage growers who cultivate indigenous seeds under native shade canopies.
            </p>

            <div className="space-y-4 pt-4 border-t border-[#C89B3C]/20 text-xs text-[#241711]">
              <div className="flex items-start gap-3">
                <div className="p-1.5 bg-[#064D3B] text-[#C89B3C] border border-[#C89B3C]">
                  <Leaf size={14} />
                </div>
                <div>
                  <strong className="block text-[#064D3B] uppercase font-mono">Biodiversity Canopy Growing:</strong>
                  Spices grown in polycultures alongside jackfruit, coffee, and vanilla retain higher essential oil reserves than monocultures.
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-1.5 bg-[#064D3B] text-[#C89B3C] border border-[#C89B3C]">
                  <Compass size={14} />
                </div>
                <div>
                  <strong className="block text-[#064D3B] uppercase font-mono">Cold Granite Stone Milling:</strong>
                  Water-cooled granite chakki stones turning below 35°C preserve 100% of the live volatile aromatic matrix.
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-1.5 bg-[#064D3B] text-[#C89B3C] border border-[#C89B3C]">
                  <ShieldCheck size={14} />
                </div>
                <div>
                  <strong className="block text-[#064D3B] uppercase font-mono">Nitrogen-Flushed UV Glass:</strong>
                  We never use plastic pouches that leach plasticizers and allow oxygen to degrade terpenes.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Side-by-Side Comparison Table */}
        <div className="mt-20">
          <SectionHeading
            tagline="EMPIRICAL DIFFERENCE"
            title="Industrial Commercial Spices"
            italicTitle="vs. ASLI AROMA™"
            align="center"
            className="mx-auto text-center mb-10"
          />

          <div className="overflow-x-auto bg-[#FFF8F6] border-2 border-[#C89B3C] shadow-luxury">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#241711] text-[#F6F0E4] font-mono uppercase text-[11px] tracking-wider">
                <tr>
                  <th className="p-4 sm:p-5 border-r border-[#C89B3C]/30">Quality Attribute</th>
                  <th className="p-4 sm:p-5 border-r border-[#C89B3C]/30 text-[#ffb3b4]">
                    Mass Commercial Spices
                  </th>
                  <th className="p-4 sm:p-5 bg-[#064D3B] text-[#C89B3C]">
                    ASLI AROMA™ Royal Heritage
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#C89B3C]/20 text-[#241711]">
                <tr>
                  <td className="p-4 sm:p-5 font-semibold text-[#064D3B]">Milling Temperature</td>
                  <td className="p-4 sm:p-5 text-[#404944] flex items-center gap-2">
                    <X size={14} className="text-[#ba1a1a]" /> 75°C – 95°C (Burnt Volatiles)
                  </td>
                  <td className="p-4 sm:p-5 bg-[#064D3B]/5 font-semibold text-[#064D3B] flex items-center gap-2">
                    <Check size={14} className="text-[#C89B3C]" /> Sub-35°C Cold Granite Stone
                  </td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-semibold text-[#064D3B]">Volatile Oil Retention</td>
                  <td className="p-4 sm:p-5 text-[#404944] flex items-center gap-2">
                    <X size={14} className="text-[#ba1a1a]" /> Exhausted (0.8% - 1.5%)
                  </td>
                  <td className="p-4 sm:p-5 bg-[#064D3B]/5 font-semibold text-[#064D3B] flex items-center gap-2">
                    <Check size={14} className="text-[#C89B3C]" /> Intact (Up to 17.4% Eugenol)
                  </td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-semibold text-[#064D3B]">Color & Appearance</td>
                  <td className="p-4 sm:p-5 text-[#404944] flex items-center gap-2">
                    <X size={14} className="text-[#ba1a1a]" /> Polished with mineral oils & starch
                  </td>
                  <td className="p-4 sm:p-5 bg-[#064D3B]/5 font-semibold text-[#064D3B] flex items-center gap-2">
                    <Check size={14} className="text-[#C89B3C]" /> 100% Unadulterated Sun-Cured Hue
                  </td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-semibold text-[#064D3B]">Provenance Traceability</td>
                  <td className="p-4 sm:p-5 text-[#404944] flex items-center gap-2">
                    <X size={14} className="text-[#ba1a1a]" /> Mixed broker lots from anonymous auctions
                  </td>
                  <td className="p-4 sm:p-5 bg-[#064D3B]/5 font-semibold text-[#064D3B] flex items-center gap-2">
                    <Check size={14} className="text-[#C89B3C]" /> Single-Estate Lot Number on every jar
                  </td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-semibold text-[#064D3B]">Packaging Vessel</td>
                  <td className="p-4 sm:p-5 text-[#404944] flex items-center gap-2">
                    <X size={14} className="text-[#ba1a1a]" /> Clear plastic film (oxygen-permeable)
                  </td>
                  <td className="p-4 sm:p-5 bg-[#064D3B]/5 font-semibold text-[#064D3B] flex items-center gap-2">
                    <Check size={14} className="text-[#C89B3C]" /> Heavy UV Glass + Nitrogen hermetic seal
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* CTA to Shop */}
        <div className="mt-16 text-center">
          <Button
            variant="gold"
            size="lg"
            onClick={() => onNavigate('shop')}
          >
            Taste the Authentic Difference
          </Button>
        </div>

      </div>
    </div>
  );
};
