import { motion } from 'framer-motion';
import { fadeUp, staggerContainer, viewportOnce } from '../lib/animations';

const logos = [
  'Lumina',
  'Northpeak',
  'Vertex',
  'Cassia',
  'Orbital',
  'Monarch',
];

export function Trust() {
  return (
    <section className="border-y border-ink/5 bg-mist/50 py-12">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mb-8 text-center text-sm font-semibold uppercase tracking-[0.2em] text-ink-soft/50"
        >
          Trusted by Growing Brands
        </motion.p>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-2 items-center gap-x-8 gap-y-6 sm:grid-cols-3 md:grid-cols-6"
        >
          {logos.map((logo) => (
            <motion.div
              key={logo}
              variants={fadeUp}
              className="flex items-center justify-center"
            >
              <span className="text-xl font-extrabold tracking-tight text-ink-soft/35 grayscale transition-all duration-300 hover:text-ink-soft/70 hover:grayscale-0 sm:text-2xl">
                {logo}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
