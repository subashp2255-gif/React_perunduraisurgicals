export default function About() {
  return (
    <section id="about" className="section alt">
      <div className="about-grid">
        <div className="about-visual reveal reveal-left">
          <div className="about-img" style={{ background: 'none', padding: 0 }}>
            <div className="about-ribbon">Since 2009</div>
            <img
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=85&auto=format&fit=crop"
              alt="Medical warehouse and storage"
              style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '20px' }}
              loading="lazy"
            />
          </div>

          <div className="about-chip reveal reveal-up" style={{ transitionDelay: '0.3s' }}>
            <strong>2009</strong>
            <span>Est. Since</span>
          </div>
        </div>
        <div className="reveal reveal-right">
          <span className="s-tag">About Us</span>
          <h2 className="s-title">
            Rooted in <em>Perundurai,</em>
            <br />
            Serving Tamil Nadu
          </h2>
          <p className="s-sub">
            Perundurai Surgicals is a leading wholesale distributor of pharmaceutical and surgical products based in
            Perundurai, Erode District. We cater to government hospitals, private clinics, nursing homes, and retail
            pharmacies with genuine, quality-assured products.
          </p>
          <ul className="about-facts">
            <li className="about-fact reveal reveal-up">
              <div className="fact-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>
              <div className="fact-text">
                <strong>Proprietor</strong>
                <p>K. Ragavendran B.E. — Over 15 years of industry expertise.</p>
              </div>
            </li>
            <li className="about-fact reveal reveal-up" style={{ transitionDelay: '0.1s' }}>
              <div className="fact-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div className="fact-text">
                <strong>Strategic Location</strong>
                <p>Based in Perundurai, the heart of Erode&apos;s healthcare hub.</p>
              </div>
            </li>
            <li className="about-fact reveal reveal-up" style={{ transitionDelay: '0.2s' }}>
              <div className="fact-icon">
                <svg viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <div className="fact-text">
                <strong>Swift Operations</strong>
                <p>Mon–Sat: 9:00 AM – 7:00 PM. Local same-day dispatch.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
