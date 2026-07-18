import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { fadeUp, staggerContainer, viewportOnce } from '../lib/animations';

interface Project {
  title: string;
  category: string;
  image: string;
  span: string;
}

const projects: Project[] = [
  {
    title: 'Social Media Campaign',
    category: 'Restaurant Branding',
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
    span: 'lg:row-span-2',
  },
  {
    title: 'Healthcare Marketing',
    category: 'Medical & Wellness',
    image: 'https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=800',
    span: '',
  },
  {
    title: 'Real Estate Ads',
    category: 'Property Campaigns',
    image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800',
    span: '',
  },
  {
    title: 'Education Campaign',
    category: 'EdTech Marketing',
    image: 'https://images.pexels.com/photos/5212343/pexels-photo-5212343.jpeg?auto=compress&cs=tinysrgb&w=800',
    span: 'lg:row-span-2',
  },
  {
    title: 'Corporate Website',
    category: 'Web & Branding',
    image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
    span: '',
  },
  {
    title: 'Product Launch',
    category: 'E-commerce',
    image: 'https://images.pexels.com/photos/4464820/pexels-photo-4464820.jpeg?auto=compress&cs=tinysrgb&w=800',
    span: '',
  },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Our Work"
          title="Crafted projects that"
          highlight="make an impact"
          description="A glimpse of the brands we've helped grow through thoughtful design and smart marketing."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-16 grid auto-rows-[220px] grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ProjectCard({ title, category, image, span }: Project) {
  return (
    <motion.article
      variants={fadeUp}
      className={`group relative overflow-hidden rounded-3xl bg-mist ${span}`}
    >
      <img
        src={image}
        alt={title}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-95" />

      <div className="absolute inset-x-0 bottom-0 p-6">
        <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-brand-400">
          {category}
        </p>
        <h3 className="text-lg font-bold text-white">{title}</h3>

        {/* Hover reveal */}
        <div className="mt-3 flex translate-y-3 items-center gap-2 text-sm font-semibold text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand-gradient">
            <ArrowUpRight className="h-4 w-4" />
          </span>
          View Project
        </div>
      </div>
    </motion.article>
  );
}
