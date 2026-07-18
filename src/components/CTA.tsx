import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from './Button';
import { fadeUp, staggerContainer, viewportOnce } from '../lib/animations';

export function CTA() {
  const scrollTo = (href: string) =>
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section className="py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="relative overflow-hidden rounded-4xl bg-brand-gradient px-8 py-16 text-center text-white sm:px-16 sm:py-20"
        >
          {/* Decorative shapes */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
            <div className="absolute -bottom-24 -left-16 h-56 w-56 rounded-full bg-ink/10 blur-2xl" />
          </div>

          <motion.h2
            variants={fadeUp}
            className="relative text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl md:text-5xl text-balance"
          >
            Ready to grow your brand?
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="relative mx-auto mt-4 max-w-xl text-base text-white/80 sm:text-lg"
          >
            Let's turn your vision into a campaign that converts. Start with a
            free, no-obligation consultation today.
          </motion.p>
          <motion.div
            variants={fadeUp}
            className="relative mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <button
              onClick={() => scrollTo('#contact')}
              className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-ink px-8 py-4 text-base font-semibold text-white shadow-soft transition-all hover:-translate-y-0.5 hover:bg-ink/90"
            >
              Book a Free Consultation
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
            <Button variant="ghost" size="lg" onClick={() => scrollTo('#services')}>
              Explore Services
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
