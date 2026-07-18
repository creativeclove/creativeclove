import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sparkles } from 'lucide-react';
import { Button } from './Button';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Process', href: '#process' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <nav
        className={`mx-auto flex max-w-7xl items-center justify-between px-5 transition-all duration-300 sm:px-8 ${
          scrolled
            ? 'my-3 rounded-2xl glass shadow-soft py-2.5'
            : 'py-4 bg-transparent'
        }`}
      >
        <button
          onClick={() => handleNav('#home')}
          className="flex items-center gap-2.5"
          aria-label="CreativeClove home"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-ink">
            <Sparkles className="h-5 w-5 text-brand-500" strokeWidth={2.5} />
          </span>
          <span className="text-lg font-extrabold tracking-tight text-ink">
            Creative<span className="text-brand-600">Clove</span>
          </span>
        </button>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleNav(link.href)}
                className="rounded-lg px-3.5 py-2 text-sm font-medium text-ink-soft/80 transition-colors hover:bg-mist hover:text-ink"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <Button size="md" onClick={() => handleNav('#contact')}>
            Book a Free Consultation
          </Button>
        </div>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-xl bg-mist text-ink lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="mx-4 mt-2 overflow-hidden rounded-2xl glass shadow-card lg:hidden"
          >
            <ul className="flex flex-col p-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNav(link.href)}
                    className="w-full rounded-xl px-4 py-3 text-left text-sm font-medium text-ink-soft transition-colors hover:bg-mist hover:text-ink"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li className="p-1 pt-2">
                <Button
                  size="md"
                  className="w-full"
                  onClick={() => handleNav('#contact')}
                >
                  Book a Free Consultation
                </Button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
