import { motion } from 'framer-motion';
import { Lightbulb, TrendingUp, Zap, Headphones, type LucideIcon } from 'lucide-react';
import { fadeUp, staggerContainer, viewportOnce } from '../lib/animations';

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: Lightbulb,
    title: 'Creative Thinking',
    description: 'Fresh ideas that make your brand stand out in a crowded feed.',
  },
  {
    icon: TrendingUp,
    title: 'Performance Marketing',
    description: 'Data-driven campaigns focused on ROI and measurable growth.',
  },
  {
    icon: Zap,
    title: 'Fast Turnaround',
    description: 'Quick delivery without compromising on quality or detail.',
  },
  {
    icon: Headphones,
    title: 'Dedicated Support',
    description: "We're your extended creative team, always just a message away.",
  },
];

export function WhyUs() {
  return (
    <section id="why-us" className="bg-ink py-24 text-white sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col items-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-brand-400">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
            Why CreativeClove
          </span>
          <h2 className="mt-4 max-w-3xl text-center text-3xl font-extrabold leading-[1.1] tracking-tight sm:text-4xl md:text-5xl text-balance">
            The creative partner that{' '}
            <span className="gradient-text">drives results</span>
          </h2>
          <p className="mt-4 max-w-2xl text-center text-base leading-relaxed text-white/60 sm:text-lg">
            We blend art and analytics to build brands that don't just look
            good—they perform.
          </p>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              className="group rounded-3xl border border-white/10 bg-white/[0.04] p-7 transition-colors duration-300 hover:border-brand-500/40 hover:bg-white/[0.07]"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-gradient text-white shadow-glow">
                <feature.icon className="h-7 w-7" strokeWidth={1.75} />
              </div>
              <h3 className="mb-2 text-lg font-bold text-white">
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed text-white/55">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
