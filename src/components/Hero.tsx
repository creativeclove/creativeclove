import { motion } from 'framer-motion';
import {
  ArrowRight,
  Play,
  TrendingUp,
  Users,
  Heart,
  Eye,
  Instagram,
  Youtube,
  Linkedin,
  BarChart3,
} from 'lucide-react';
import { Button } from './Button';
import { fadeUp, fadeRight, staggerContainer } from '../lib/animations';

const scrollTo = (href: string) =>
  document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28"
    >
      {/* Background accents */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-brand-200/40 blur-3xl" />
        <div className="absolute top-1/2 -left-32 h-80 w-80 rounded-full bg-brand-100/50 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, #111 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-8">
        {/* Left: copy */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-start gap-6"
        >
          <motion.span
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full bg-mist px-4 py-2 text-xs font-semibold text-ink-soft"
          >
            <span className="flex h-2 w-2">
              <span className="absolute h-2 w-2 animate-ping rounded-full bg-brand-500 opacity-75" />
              <span className="h-2 w-2 rounded-full bg-brand-500" />
            </span>
            Creative &amp; Performance Marketing Agency
          </motion.span>

          <motion.h1
            variants={fadeUp}
            className="text-5xl font-extrabold leading-[1.05] tracking-tight text-ink sm:text-6xl lg:text-7xl text-balance"
          >
            Design.
            <br />
            Market. <span className="gradient-text">Grow.</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="max-w-xl text-lg leading-relaxed text-ink-soft/70"
          >
            Helping brands build an unforgettable digital presence through
            creativity and performance marketing. We create scroll-stopping
            social media creatives, engaging videos, SEO strategies, and
            high-converting paid campaigns that help businesses grow faster.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="flex flex-col gap-3 sm:flex-row"
          >
            <Button size="lg" onClick={() => scrollTo('#contact')}>
              Get Started
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              size="lg"
              variant="ghost"
              onClick={() => scrollTo('#portfolio')}
            >
              <Play className="h-4 w-4 text-brand-600" />
              View Our Work
            </Button>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="flex items-center gap-6 pt-2"
          >
            <div className="flex -space-x-3">
              {['A', 'B', 'C', 'D'].map((l, i) => (
                <div
                  key={l}
                  className={`flex h-10 w-10 items-center justify-center rounded-full border-2 border-white text-xs font-bold text-white ${
                    i % 2 === 0 ? 'bg-brand-500' : 'bg-ink'
                  }`}
                >
                  {l}
                </div>
              ))}
            </div>
            <div>
              <div className="flex items-center gap-1 text-brand-500">
                {[...Array(5)].map((_, i) => (
                  <Heart key={i} className="h-3.5 w-3.5 fill-current" />
                ))}
              </div>
              <p className="text-sm font-medium text-ink-soft/70">
                100+ happy clients worldwide
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Right: floating illustration */}
        <motion.div
          variants={fadeRight}
          initial="hidden"
          animate="visible"
          className="relative mx-auto h-[420px] w-full max-w-md sm:h-[520px]"
        >
          <HeroIllustration />
        </motion.div>
      </div>
    </section>
  );
}

function HeroIllustration() {
  return (
    <div className="relative h-full w-full">
      {/* Main dashboard card */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute left-1/2 top-1/2 w-[88%] -translate-x-1/2 -translate-y-1/2 rounded-3xl bg-white p-5 shadow-card ring-1 ring-ink/5"
      >
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-red-400" />
            <span className="h-3 w-3 rounded-full bg-yellow-400" />
            <span className="h-3 w-3 rounded-full bg-green-400" />
          </div>
          <BarChart3 className="h-4 w-4 text-ink-soft/40" />
        </div>

        <div className="mb-4">
          <p className="text-xs font-medium text-ink-soft/50">Total Reach</p>
          <div className="flex items-end gap-2">
            <p className="text-2xl font-extrabold text-ink">10.2M</p>
            <span className="mb-1 inline-flex items-center gap-0.5 rounded-full bg-brand-100 px-2 py-0.5 text-xs font-semibold text-brand-700">
              <TrendingUp className="h-3 w-3" /> +42%
            </span>
          </div>
        </div>

        {/* Bar chart */}
        <div className="flex h-28 items-end justify-between gap-2">
          {[40, 65, 50, 80, 60, 95, 75].map((h, i) => (
            <motion.div
              key={i}
              initial={{ height: 0 }}
              animate={{ height: `${h}%` }}
              transition={{ duration: 0.8, delay: 0.3 + i * 0.08, ease: 'easeOut' }}
              className={`flex-1 rounded-t-md ${
                i === 5 ? 'bg-brand-gradient' : 'bg-mist'
              }`}
            />
          ))}
        </div>

        <div className="mt-4 grid grid-cols-3 gap-2">
          {[
            { icon: Eye, label: 'Impressions', value: '2.4M' },
            { icon: Heart, label: 'Engagement', value: '8.1%' },
            { icon: Users, label: 'Followers', value: '128K' },
          ].map((s) => (
            <div key={s.label} className="rounded-xl bg-mist p-2.5">
              <s.icon className="mb-1 h-3.5 w-3.5 text-brand-600" />
              <p className="text-[10px] font-medium text-ink-soft/50">{s.label}</p>
              <p className="text-sm font-bold text-ink">{s.value}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Floating: social icons card */}
      <motion.div
        animate={{ y: [0, -16, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        className="absolute -left-2 top-4 rounded-2xl bg-white p-3 shadow-card ring-1 ring-ink/5 sm:left-0"
      >
        <div className="flex flex-col gap-2">
          {[Instagram, Youtube, Linkedin].map((Icon, i) => (
            <div
              key={i}
              className="flex h-9 w-9 items-center justify-center rounded-xl bg-mist"
            >
              <Icon className="h-4 w-4 text-ink" />
            </div>
          ))}
        </div>
      </motion.div>

      {/* Floating: growth badge */}
      <motion.div
        animate={{ y: [0, 14, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute -right-1 top-12 rounded-2xl bg-ink p-4 text-white shadow-card sm:right-0"
      >
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-gradient">
            <TrendingUp className="h-4 w-4 text-white" />
          </div>
          <div>
            <p className="text-[10px] text-white/60">Conversion</p>
            <p className="text-sm font-bold">+128%</p>
          </div>
        </div>
      </motion.div>

      {/* Floating: engagement card */}
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
        className="absolute -bottom-2 left-4 rounded-2xl bg-white p-3.5 shadow-card ring-1 ring-ink/5 sm:bottom-0"
      >
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-gradient-soft">
            <Heart className="h-5 w-5 fill-brand-500 text-brand-500" />
          </div>
          <div>
            <p className="text-xs font-medium text-ink-soft/50">Engagement Rate</p>
            <p className="text-lg font-extrabold text-ink">8.4%</p>
          </div>
        </div>
      </motion.div>

      {/* Decorative ring */}
      <div className="absolute right-8 bottom-8 h-20 w-20 animate-spin-slow rounded-full border border-dashed border-brand-300/50" />
    </div>
  );
}
