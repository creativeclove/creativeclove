import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { fadeUp, staggerContainer, viewportOnce } from '../lib/animations';

const faqs = [
  {
    question: 'How long does a project take?',
    answer:
      'Timelines vary by scope. Social media creatives typically deliver within 2-3 days, while full branding or campaign projects take 2-4 weeks. We share a clear timeline after our discovery call so you always know what to expect.',
  },
  {
    question: 'Do you manage ad campaigns?',
    answer:
      'Yes. We handle end-to-end paid advertising across Google Ads, Meta Ads, and LinkedIn Ads—including strategy, creative production, targeting, launch, optimization, and reporting. Our focus is always on ROI.',
  },
  {
    question: 'Can you handle SEO?',
    answer:
      'Absolutely. We offer technical SEO, on-page optimization, keyword research, local SEO, and content strategy. We start with a full audit and build a roadmap tailored to your business goals and competitive landscape.',
  },
  {
    question: 'Do you offer monthly packages?',
    answer:
      'We do. Our monthly retainer packages bundle creative production, social media management, and performance marketing into one predictable plan. Retainers are fully customizable based on your goals and budget.',
  },
  {
    question: 'What industries do you work with?',
    answer:
      'We work across restaurants, real estate, healthcare, education, e-commerce, and corporate sectors. Our process adapts to your industry, audience, and growth stage—no matter the niche.',
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Questions"
          title="Frequently asked"
          highlight="questions"
          description="Everything you need to know before working with us."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-12 flex flex-col gap-3"
        >
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={i}
                variants={fadeUp}
                className={`overflow-hidden rounded-2xl border transition-colors duration-300 ${
                  isOpen
                    ? 'border-brand-300 bg-white shadow-soft'
                    : 'border-ink/5 bg-white'
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-semibold text-ink sm:text-lg">
                    {faq.question}
                  </span>
                  <span
                    className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                      isOpen ? 'rotate-45 bg-brand-gradient text-white' : 'bg-mist text-ink'
                    }`}
                  >
                    <Plus className="h-4 w-4" />
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <p className="px-6 pb-5 text-sm leading-relaxed text-ink-soft/70 sm:text-base">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
