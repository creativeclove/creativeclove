import { motion } from 'framer-motion';
import {
  Share2,
  LayoutTemplate,
  Video,
  Search,
  Target,
  Palette,
  type LucideIcon,
} from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { fadeUp, staggerContainer, viewportOnce } from '../lib/animations';

interface Service {
  icon: LucideIcon;
  title: string;
  items: string[];
}

const services: Service[] = [
  {
    icon: Share2,
    title: 'Social Media Creatives',
    items: ['Instagram Posts', 'Carousel', 'Festival Posts', 'Stories', 'Brand Creatives'],
  },
  {
    icon: LayoutTemplate,
    title: 'Banner Design',
    items: ['Website Banners', 'Landing Pages', 'Ad Creatives', 'Campaign Graphics'],
  },
  {
    icon: Video,
    title: 'Video Editing',
    items: ['Reels', 'Product Videos', 'Motion Graphics', 'Corporate Videos', 'YouTube Shorts'],
  },
  {
    icon: Search,
    title: 'SEO',
    items: ['Technical SEO', 'On-page SEO', 'Keyword Research', 'Local SEO', 'Content Strategy'],
  },
  {
    icon: Target,
    title: 'Paid Advertising',
    items: ['Google Ads', 'Meta Ads', 'LinkedIn Ads', 'Lead Generation', 'Remarketing'],
  },
  {
    icon: Palette,
    title: 'Brand Design',
    items: ['Logo', 'Brand Identity', 'Brand Guidelines', 'Marketing Assets'],
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="What We Do"
          title="Services built for"
          highlight="real growth"
          description="From scroll-stopping creatives to data-driven campaigns, we cover every touchpoint your brand needs to win online."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ServiceCard({ icon: Icon, title, items }: Service) {
  return (
    <motion.article
      variants={fadeUp}
      whileHover={{ y: -6 }}
      className="group relative overflow-hidden rounded-3xl border border-ink/5 bg-white p-7 shadow-soft transition-shadow duration-300 hover:shadow-card"
    >
      {/* Hover gradient wash */}
      <div className="pointer-events-none absolute inset-0 -z-0 bg-brand-gradient-soft opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative">
        <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-ink text-brand-500 transition-all duration-300 group-hover:bg-brand-gradient group-hover:text-white">
          <Icon className="h-7 w-7" strokeWidth={1.75} />
        </div>

        <h3 className="mb-4 text-xl font-bold text-ink">{title}</h3>

        <ul className="flex flex-wrap gap-2">
          {items.map((item) => (
            <li
              key={item}
              className="rounded-lg bg-mist px-3 py-1.5 text-xs font-medium text-ink-soft transition-colors group-hover:bg-white"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Corner accent */}
      <div className="absolute -bottom-12 -right-12 h-24 w-24 rounded-full bg-brand-gradient opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-20" />
    </motion.article>
  );
}
