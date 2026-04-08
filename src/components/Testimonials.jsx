export default function Testimonials() {
  return (
    <section id="testimonials" className="section">
      <div className="s-head center reveal reveal-up">
        <span className="s-tag">Client Feedback</span>
        <h2 className="s-title">
          Trusted by <em>Healthcare Professionals</em>
        </h2>
      </div>

      <div className="testi-grid">
        <div className="testi-card reveal reveal-up">
          <div className="testi-stars">★★★★★</div>
          <blockquote>
            &quot;Excellent service and always on time. We&apos;ve been ordering surgical consumables from them for years.
            Quality is never compromised.&quot;
          </blockquote>
          <div className="testi-author">
            <div className="tav">R</div>
            <div className="tavi">
              <strong>Dr. Ramesh K.</strong>
              <small>General Surgeon, Erode</small>
            </div>
          </div>
        </div>
        <div className="testi-card reveal reveal-up">
          <div className="testi-stars">★★★★★</div>
          <blockquote>
            &quot;Best wholesale prices in the region. Billing is always GST-compliant and the team responds fast on
            WhatsApp. Highly recommended.&quot;
          </blockquote>
          <div className="testi-author">
            <div className="tav amber">P</div>
            <div className="tavi">
              <strong>Priya Medical Store</strong>
              <small>Retail Pharmacy, Perundurai</small>
            </div>
          </div>
        </div>
        <div className="testi-card reveal reveal-up" style={{ transitionDelay: '0.1s' }}>
          <div className="testi-stars">★★★★★</div>
          <blockquote>
            &quot;We procure all our IV fluids and OT supplies from here. Cold chain is maintained perfectly. A very
            reliable long-term partner.&quot;
          </blockquote>
          <div className="testi-author">
            <div className="tav green">S</div>
            <div className="tavi">
              <strong>Sri Sakthi Nursing Home</strong>
              <small>Hospital, Bhavani</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
