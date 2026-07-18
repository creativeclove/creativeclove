import { motion } from 'framer-motion';
import { Search, Map, PenTool, Rocket, TrendingUp, type LucideIcon } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { fadeUp, staggerContainer, viewportOnce } from '../lib/animations';

interface Step {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

const steps: Step[] = [
  { number: '01', title: 'Discovery', description: 'Understand goals', icon: Search },
  { number: '02', title: 'Strategy', description: 'Create roadmap', icon: Map },
  { number: '03', title: 'Design', description: 'Creative execution', icon: PenTool },
  { number: '04', title: 'Launch', description: 'Campaign deployment', icon: Rocket },
  { number: '05', title: 'Growth', description: 'Optimization and scaling', icon: TrendingUp },
];

export function Process() {
  return (
    <section id="process" className="bg-mist/50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="How We Work"
          title="A process built for"
          highlight="momentum"
          description="Five focused steps that take your brand from idea to impact."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-16 grid gap-6 md:grid-cols-3 lg:grid-cols-5"
        >
          {steps.map((step, i) => (
            <motion.div key={step.number} variants={fadeUp} className="relative">
              <div className="relative flex h-full flex-col rounded-3xl border border-ink/5 bg-white p-6 shadow-soft transition-shadow duration-300 hover:shadow-card">
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-4xl font-extrabold text-brand-200">
                    {step.number}
                  </span>
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-ink text-brand-500">
                    <step.icon className="h-5 w-5" strokeWidth={1.75} />
                  </div>
                </div>
                <h3 className="mb-1 text-lg font-bold text-ink">{step.title}</h3>
                <p className="text-sm text-ink-soft/60">{step.description}</p>
              </div>

              {/* Connector arrow (desktop) */}
              {i < steps.length - 1 && (
                <div className="absolute -right-5 top-1/2 hidden -translate-y-1/2 text-brand-400 lg:block">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path
                      d="M4 10H16M16 10L11 5M16 10L11 15"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
