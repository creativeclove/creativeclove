import { Sparkles, Instagram, Linkedin, ArrowUpRight } from 'lucide-react';

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
];

const serviceLinks = [
  'Social Media Creatives',
  'Banner Design',
  'Video Editing',
  'SEO',
  'Paid Advertising',
  'Brand Design',
];

const socials = [
  { Icon: Instagram, href: 'https://www.instagram.com/thecreativeclove', label: 'Instagram' },
  { Icon: Linkedin, href: 'https://www.linkedin.com/in/creativeclove', label: 'LinkedIn' },
];

export function Footer() {
  const handleNav = (href: string) =>
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer className="bg-ink pt-20 text-white">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 pb-14 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <button
              onClick={() => handleNav('#home')}
              className="flex items-center gap-2.5"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-gradient">
                <Sparkles className="h-5 w-5 text-white" strokeWidth={2.5} />
              </span>
              <span className="text-lg font-extrabold tracking-tight">
                Creative<span className="text-brand-500">Clove</span>
              </span>
            </button>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/50">
              A creative and performance marketing agency helping brands grow
              online through design, content, and data-driven campaigns.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-white/70 transition-colors hover:bg-brand-gradient hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="mb-5 text-sm font-semibold uppercase tracking-wider text-white/40">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNav(link.href)}
                    className="text-sm text-white/60 transition-colors hover:text-brand-400"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-5 text-sm font-semibold uppercase tracking-wider text-white/40">
              Services
            </h4>
            <ul className="flex flex-col gap-3">
              {serviceLinks.map((s) => (
                <li key={s}>
                  <button
                    onClick={() => handleNav('#services')}
                    className="text-left text-sm text-white/60 transition-colors hover:text-brand-400"
                  >
                    {s}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h4 className="mb-5 text-sm font-semibold uppercase tracking-wider text-white/40">
              Let's Talk
            </h4>
            <p className="mb-4 text-sm text-white/60">
              Ready to grow your brand? Start with a free consultation.
            </p>
            <button
              onClick={() => handleNav('#contact')}
              className="group inline-flex items-center gap-2 rounded-2xl bg-brand-gradient px-5 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:shadow-glow"
            >
              Book a Free Consultation
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-8 sm:flex-row">
          <p className="text-sm text-white/40">
            © 2026 CreativeClove. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-white/40 transition-colors hover:text-white/70">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-white/40 transition-colors hover:text-white/70">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
