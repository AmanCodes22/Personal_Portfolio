import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail, Phone, MapPin, Github, Linkedin, MessageCircle, Instagram, Send, CheckCircle, AlertCircle,
} from 'lucide-react';
import { portfolioData } from '@/data/portfolioData';

const contactIcons = { Github, Linkedin, Mail, MessageCircle, Instagram };

export default function Contact() {
  const { personal, socialLinks } = portfolioData;
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState(null);
  const [errors, setErrors] = useState({});

  const contactCards = [
    { icon: Mail, label: 'Email', value: personal.email, href: `mailto:${personal.email}` },
    { icon: Phone, label: 'Phone', value: personal.phone, href: `tel:${personal.phone}` },
    { icon: MapPin, label: 'Location', value: personal.location, href: null },
  ];

  const socials = [
    { icon: 'Github', url: socialLinks.github, label: 'GitHub' },
    { icon: 'Linkedin', url: socialLinks.linkedin, label: 'LinkedIn' },
    { icon: 'Mail', url: socialLinks.email, label: 'Email' },
    { icon: 'MessageCircle', url: socialLinks.whatsapp, label: 'WhatsApp' },
    { icon: 'Instagram', url: socialLinks.instagram, label: 'Instagram' },
  ];

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.email.trim()) e.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email';
    if (!form.subject.trim()) e.subject = 'Subject is required';
    if (!form.message.trim()) e.message = 'Message is required';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    const mailtoLink = `mailto:${personal.email}?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`;
    window.location.href = mailtoLink;
    setStatus('success');
    setForm({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setStatus(null), 5000);
  };

  const handleChange = (field) => (e) => {
    setForm({ ...form, [field]: e.target.value });
    if (errors[field]) setErrors({ ...errors, [field]: undefined });
  };

  const inputClass = (field) => `w-full px-4 py-3 rounded-lg card-bg border ${errors[field] ? 'border-red-500/50' : 'border-base'} text-sm text-white placeholder:text-muted focus:outline-none focus:border-accent-purple/50 transition-colors`;

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-accent-purple/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-3">Let's Connect & Collaborate</h2>
            <p className="text-secondary text-sm mb-8">
              Whether it's a new project or collaboration — I'd love to hear from you!
            </p>

            <div className="space-y-3 mb-8">
              {contactCards.map((card) => {
                const Icon = card.icon;
                const content = (
                  <div className="flex items-center gap-4 p-4 rounded-xl card-bg border border-base hover:border-accent-purple/30 transition-colors">
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-accent-purple/20 to-accent-blue/20 flex items-center justify-center shrink-0">
                      <Icon size={18} className="text-accent-purple" />
                    </div>
                    <div>
                      <div className="text-[10px] uppercase tracking-wider text-muted">{card.label}</div>
                      <div className="text-sm font-medium text-white">{card.value}</div>
                    </div>
                  </div>
                );
                return card.href ? (
                  <a key={card.label} href={card.href} className="block">{content}</a>
                ) : (
                  <div key={card.label}>{content}</div>
                );
              })}
            </div>

            <div className="flex gap-2">
              {socials.map((s) => {
                const Icon = contactIcons[s.icon];
                return (
                  <motion.a
                    key={s.label}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 rounded-full card-bg border border-base flex items-center justify-center text-secondary hover:text-accent-purple hover:border-accent-purple/40 transition-colors"
                  >
                    <Icon size={16} />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Right side - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-6 sm:p-8 rounded-2xl card-bg border border-base glow-card"
          >
            <h3 className="font-display text-xl font-bold mb-6">Get In Touch</h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={handleChange('name')}
                  className={inputClass('name')}
                />
                {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  value={form.email}
                  onChange={handleChange('email')}
                  className={inputClass('email')}
                />
                {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Subject"
                  value={form.subject}
                  onChange={handleChange('subject')}
                  className={inputClass('subject')}
                />
                {errors.subject && <p className="text-red-400 text-xs mt-1">{errors.subject}</p>}
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  rows={5}
                  value={form.message}
                  onChange={handleChange('message')}
                  className={inputClass('message') + ' resize-none'}
                />
                {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-accent-purple to-accent-blue text-white text-sm font-medium hover:opacity-90 transition-opacity"
              >
                <Send size={16} /> Send Message
              </motion.button>

              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 p-3 rounded-lg bg-green-500/10 border border-green-500/30 text-green-400 text-xs"
                >
                  <CheckCircle size={16} /> Message prepared! Your email client should open shortly.
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
