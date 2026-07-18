import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { Button } from './Button';
import { fadeLeft, fadeRight, viewportOnce } from '../lib/animations';

const services = [
  'Social Media Creatives',
  'Banner Design',
  'Video Editing',
  'SEO',
  'Paid Advertising',
  'Brand Design',
];

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: '', email: '', phone: '', company: '', service: '', message: '' });
    }, 4000);
  };

  const inputClass =
    'w-full rounded-xl border border-ink/10 bg-mist px-4 py-3 text-sm text-ink placeholder:text-ink-soft/40 transition-colors focus:border-brand-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-500/20';

  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: info */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="flex flex-col"
          >
            <span className="inline-flex w-fit items-center gap-2 rounded-full bg-brand-gradient-soft px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-brand-700">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
              Get in Touch
            </span>
            <h2 className="mt-4 text-3xl font-extrabold leading-[1.1] tracking-tight text-ink sm:text-4xl md:text-5xl text-balance">
              Let's Build Something{' '}
              <span className="gradient-text">Amazing Together</span>
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-ink-soft/70">
              Tell us about your brand and goals. We'll get back to you within
              24 hours with a tailored plan.
            </p>

            <div className="mt-10 flex flex-col gap-5">
              <ContactItem
                icon={Mail}
                label="Email"
                value="thecreativeclove@gmail.com"
              />
              <ContactItem
                icon={Phone}
                label="Phone"
                value="+91 XXXXX XXXXX"
              />
              <ContactItem
                icon={MapPin}
                label="Address"
                value="Bangalore, India"
              />
            </div>

            <div className="mt-10 hidden rounded-3xl bg-ink p-6 text-white lg:block">
              <p className="text-sm font-medium text-white/60">
                Prefer a quick chat?
              </p>
              <p className="mt-1 text-lg font-bold">
                Book a free 30-minute consultation today.
              </p>
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="rounded-3xl border border-ink/5 bg-white p-7 shadow-card sm:p-9"
          >
            {submitted ? (
              <div className="flex h-full min-h-[400px] flex-col items-center justify-center text-center">
                <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-brand-gradient">
                  <CheckCircle2 className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-ink">Message sent!</h3>
                <p className="mt-2 max-w-xs text-ink-soft/70">
                  Thanks for reaching out. We'll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Name">
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className={inputClass}
                    />
                  </Field>
                  <Field label="Email">
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@company.com"
                      className={inputClass}
                    />
                  </Field>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Phone">
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+91 ..."
                      className={inputClass}
                    />
                  </Field>
                  <Field label="Company">
                    <input
                      type="text"
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Company name"
                      className={inputClass}
                    />
                  </Field>
                </div>

                <Field label="Service">
                  <select
                    name="service"
                    required
                    value={form.service}
                    onChange={handleChange}
                    className={inputClass}
                  >
                    <option value="" disabled>
                      Select a service
                    </option>
                    {services.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </Field>

                <Field label="Message">
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project..."
                    className={`${inputClass} resize-none`}
                  />
                </Field>

                <Button type="submit" size="lg" className="w-full">
                  Send Message
                  <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ContactItem({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof Mail;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-4">
      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-brand-gradient-soft">
        <Icon className="h-5 w-5 text-brand-600" />
      </div>
      <div>
        <p className="text-xs font-medium uppercase tracking-wider text-ink-soft/50">
          {label}
        </p>
        <p className="text-base font-semibold text-ink">{value}</p>
      </div>
    </div>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-sm font-medium text-ink-soft">{label}</span>
      {children}
    </label>
  );
}
