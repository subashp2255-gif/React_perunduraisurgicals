export default function Licenses() {
  return (
    <section id="licenses" className="section">
      <div className="s-head center reveal reveal-up">
        <span className="s-tag">Certifications</span>
        <h2 className="s-title">
          Licensed & <em>Fully Compliant</em>
        </h2>
        <p className="s-sub" style={{ margin: '0 auto' }}>
          All operations are registered and compliant with Indian pharmaceutical regulations.
        </p>
      </div>
      <div className="lic-grid">
        <div className="lic-card reveal reveal-scale">
          <svg viewBox="0 0 24 24">
            <rect x="2" y="3" width="20" height="18" rx="2" />
            <line x1="8" y1="8" x2="16" y2="8" />
            <line x1="8" y1="12" x2="16" y2="12" />
            <line x1="8" y1="16" x2="12" y2="16" />
          </svg>
          <h4>Drug License (Retail)</h4>
          <p>TN-XX-XXXXXX</p>
        </div>
        <div className="lic-card reveal reveal-scale" style={{ transitionDelay: '0.1s' }}>
          <svg viewBox="0 0 24 24">
            <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
            <polyline points="14 2 14 8 20 8" />
          </svg>
          <h4>Drug License (Wholesale)</h4>
          <p>TN-XX-XXXXXX</p>
        </div>
        <div className="lic-card reveal reveal-scale" style={{ transitionDelay: '0.2s' }}>
          <svg viewBox="0 0 24 24">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
          <h4>GST Registration</h4>
          <p>33XXXXXXXXXXXZX</p>
        </div>
        <div className="lic-card reveal reveal-scale" style={{ transitionDelay: '0.3s' }}>
          <svg viewBox="0 0 24 24">
            <circle cx="12" cy="8" r="6" />
            <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
          </svg>
          <h4>MSME Registration</h4>
          <p>UDYAM-TN-XX-XXXXXXX</p>
        </div>
      </div>
    </section>
  );
}
