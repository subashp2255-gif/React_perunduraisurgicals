import { publicUrl } from '../utils/publicUrl';

export default function Brands() {
  return (
    <section id="brands" className="section alt">
      <div className="s-head reveal reveal-up">
        <span className="s-tag">Brands We Carry</span>
        <h2 className="s-title">
          Authorised <em>Distributor</em> for Leading Brands
        </h2>
        <p className="s-sub">We stock products from trusted, globally and nationally recognised medical brands.</p>
      </div>
      <div className="brands-grid">
        <div className="brand-tile reveal reveal-scale">
          <div className="brand-logo-wrapper">
            <img src={publicUrl('romsonsorg.png')} alt="Romsons" />
          </div>
          <span className="status">Authorised</span>
        </div>
        <div className="brand-tile reveal reveal-scale" style={{ transitionDelay: '0.1s' }}>
          <div className="brand-logo-wrapper">
            <img src={publicUrl('sevana.png')} alt="Sevana" />
          </div>
          <span className="status">Authorised</span>
        </div>
        <div className="brand-tile reveal reveal-scale" style={{ transitionDelay: '0.2s' }}>
          <div className="brand-logo-wrapper">
            <img src={publicUrl('3M.webp')} alt="3M Health" />
          </div>
          <span className="status">Authorised</span>
        </div>
        <div className="brand-tile reveal reveal-scale" style={{ transitionDelay: '0.3s' }}>
          <div className="brand-logo-wrapper">
            <img src={publicUrl('puniska.png')} alt="Puniska" />
          </div>
          <span className="status">Authorised</span>
        </div>
        <div className="brand-tile reveal reveal-scale" style={{ transitionDelay: '0.4s' }}>
          <div className="brand-logo-wrapper">
            <img src={publicUrl('HMD.webp')} alt="HMD" />
          </div>
          <span className="status">Authorised</span>
        </div>
      </div>
    </section>
  );
}
