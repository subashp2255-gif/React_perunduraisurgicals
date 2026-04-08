import { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  function toggleFaq(index) {
    setOpenIndex((prev) => (prev === index ? null : index));
  }

  const items = [
    {
      q: 'Do you supply to individual pharmacies?',
      a: 'Yes — we supply to individual retail pharmacies as well as bulk institutional buyers such as hospitals and nursing homes. Minimum order quantities may apply.',
    },
    {
      q: 'What is the minimum order value?',
      a: 'Our minimum order value is ₹2,000 for retail pharmacy clients. For hospital or institutional buyers, the minimum is ₹5,000.',
    },
    {
      q: 'Do you offer credit terms?',
      a: 'Yes, we offer 15–30 day credit terms for established institutional clients. New clients start on cash/advance basis.',
    },
    {
      q: 'Are all products genuine and properly stored?',
      a: 'Absolutely. All products are stored in our GST-registered, drug-licensed warehouse. Temperature-sensitive products are kept in our cold room.',
    },
    {
      q: 'Do you deliver outside Perundurai?',
      a: 'Yes. We deliver across Erode district and can arrange transport to other parts of Tamil Nadu for bulk orders.',
    },
  ];

  return (
    <section id="faq" className="section alt" style={{ paddingTop: 0 }}>
      <div className="s-head center reveal">
        <span className="s-tag">FAQ</span>
        <h2 className="s-title">
          Frequently Asked <em>Questions</em>
        </h2>
      </div>
      <div className="faq-wrap">
        {items.map((item, i) => (
          <div
            key={item.q}
            className="faq-item reveal reveal-up"
            style={i > 0 ? { transitionDelay: `${i * 0.1}s` } : undefined}
          >
            <button
              type="button"
              className={`faq-q ${openIndex === i ? 'open' : ''}`}
              onClick={() => toggleFaq(i)}
            >
              {item.q}
              <svg viewBox="0 0 24 24">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
            <div className={`faq-a ${openIndex === i ? 'open' : ''}`}>{item.a}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
