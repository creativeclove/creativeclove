import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { SectionHeading } from './SectionHeading';

interface Testimonial {
  name: string;
  role: string;
  company: string;
  image: string;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'Priya Sharma',
    role: 'Marketing Director',
    company: 'Lumina Cafe',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200',
    quote:
      "CreativeClove transformed our social presence completely. Our engagement tripled in just three months, and the creatives they produce consistently stop the scroll. They feel like an extension of our own team.",
  },
  {
    name: 'Rahul Verma',
    role: 'Founder & CEO',
    company: 'Northpeak Realty',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200',
    quote:
      "The paid ad campaigns delivered a 4x return on ad spend within the first quarter. Their data-driven approach to performance marketing is genuinely best-in-class. I recommend them to every founder I meet.",
  },
  {
    name: 'Ananya Iyer',
    role: 'Brand Manager',
    company: 'Cassia Wellness',
    image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=200',
    quote:
      "From branding to video editing to SEO, CreativeClove handles everything with remarkable attention to detail. Our organic traffic grew 180% and the brand identity they crafted finally feels like us.",
  },
];

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const paginate = (dir: number) => {
    setDirection(dir);
    setIndex((prev) => (prev + dir + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Client Love"
          title="Words from brands"
          highlight="we've grown with"
          description="Don't just take our word for it—here's what our clients have to say."
        />

        <div className="relative mx-auto mt-16 max-w-4xl">
          <div className="relative overflow-hidden rounded-3xl border border-ink/5 bg-white p-8 shadow-card sm:p-12">
            <Quote className="absolute right-8 top-8 h-16 w-16 text-brand-100" />

            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={index}
                custom={direction}
                initial={{ opacity: 0, x: direction > 0 ? 40 : -40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction > 0 ? -40 : 40 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="relative"
              >
                <div className="mb-6 flex items-center gap-1 text-brand-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>

                <p className="mb-8 text-lg leading-relaxed text-ink-soft sm:text-xl">
                  "{testimonials[index].quote}"
                </p>

                <div className="flex items-center gap-4">
                  <img
                    src={testimonials[index].image}
                    alt={testimonials[index].name}
                    loading="lazy"
                    className="h-14 w-14 rounded-full object-cover ring-2 ring-brand-200"
                  />
                  <div>
                    <p className="font-bold text-ink">
                      {testimonials[index].name}
                    </p>
                    <p className="text-sm text-ink-soft/60">
                      {testimonials[index].role}, {testimonials[index].company}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="mt-6 flex items-center justify-center gap-3">
            <button
              onClick={() => paginate(-1)}
              aria-label="Previous testimonial"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/10 bg-white text-ink transition-colors hover:border-brand-500 hover:bg-mist"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDirection(i > index ? 1 : -1);
                    setIndex(i);
                  }}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === index ? 'w-8 bg-brand-gradient' : 'w-2 bg-ink/15'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => paginate(1)}
              aria-label="Next testimonial"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/10 bg-white text-ink transition-colors hover:border-brand-500 hover:bg-mist"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
