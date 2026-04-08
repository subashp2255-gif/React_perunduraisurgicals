import { useEffect, useRef } from 'react';
import '../styles/whyus.css';

const cards = [
  {
    icon: (
      <svg viewBox="0 0 24 24">
        <rect x="1" y="3" width="15" height="13" />
        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
    title: 'Fast & Reliable Delivery',
    desc: 'Same-day delivery within Perundurai. Next-day across Erode district. We understand urgency in healthcare — speed is non-negotiable.',
    chip: 'Same-day local',
    num: '01',
    glowClass: 'glow-cyan',
    gradient: 'grad-cyan',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
      </svg>
    ),
    title: 'Competitive Wholesale Pricing',
    desc: 'Bulk pricing advantages passed directly to you. Special rates for hospitals, nursing homes, and regular institutional buyers.',
    chip: 'Best wholesale rates',
    num: '02',
    glowClass: 'glow-gold',
    gradient: 'grad-gold',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: '100% Genuine Products',
    desc: 'All products sourced directly from authorized manufacturers and C&F agents. Drug-licensed and fully traceable supply chain.',
    chip: 'Drug Licensed',
    num: '03',
    glowClass: 'glow-emerald',
    gradient: 'grad-emerald',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M14 14.76V3.5a2.5 2.5 0 00-5 0v11.26a4.5 4.5 0 105 0z" />
      </svg>
    ),
    title: 'Cold Chain Facility',
    desc: 'Temperature-controlled storage and transport for vaccines, biologicals, and insulin — maintained end-to-end.',
    chip: '2°C–8°C Maintained',
    num: '04',
    glowClass: 'glow-violet',
    gradient: 'grad-violet',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
      </svg>
    ),
    title: 'Responsive Support',
    desc: 'Reach us on WhatsApp or phone, 6 days a week. Quick order processing and a team that genuinely cares.',
    chip: '6 days/week',
    num: '05',
    glowClass: 'glow-rose',
    gradient: 'grad-rose',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
    title: 'GST-Compliant Billing',
    desc: 'Proper GST invoices for every order. Credit facility available for trusted institutional buyers with flexible payment terms.',
    chip: 'GST Invoice',
    num: '06',
    glowClass: 'glow-amber',
    gradient: 'grad-amber',
  },
];

export default function WhyUs() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const cards = el.querySelectorAll('.wu-card');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('wu-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="why-us" className="wu-section" ref={sectionRef}>
      {/* Aurora Background Blobs */}
      <div className="wu-aurora wu-aurora-1" />
      <div className="wu-aurora wu-aurora-2" />
      <div className="wu-aurora wu-aurora-3" />

      {/* Section Header */}
      <div className="wu-header">
        <span className="wu-tag">Why Choose Us</span>
        <h2 className="wu-title">
          The Perundurai Surgicals <span className="wu-title-gradient">Advantage</span>
        </h2>
        <p className="wu-subtitle">
          Beyond being just a supplier — we are your long-term healthcare partner.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="wu-grid">
        {cards.map((card, i) => (
          <div
            key={i}
            className={`wu-card ${card.glowClass}`}
            style={{ transitionDelay: `${i * 0.12}s` }}
          >
            {/* Shimmer Overlay */}
            <div className="wu-shimmer" />

            {/* Number Badge */}
            <span className="wu-number">{card.num}</span>

            {/* Icon */}
            <div className={`wu-icon-box ${card.gradient}`}>
              {card.icon}
            </div>

            {/* Separator */}
            <div className="wu-separator" />

            {/* Content */}
            <h3 className="wu-card-title">{card.title}</h3>
            <p className="wu-card-desc">{card.desc}</p>

            {/* Stat Chip */}
            <span className={`wu-chip ${card.gradient}-chip`}>{card.chip}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
