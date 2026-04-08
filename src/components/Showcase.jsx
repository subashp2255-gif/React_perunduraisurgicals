export default function Showcase() {
  return (
    <div className="showcase-band" style={{ paddingTop: '40px', paddingBottom: '60px', background: '#fff' }}>
      <div className="showcase-inner-4col">
        <div
          className="sc-img reveal reveal-left"
          style={{ height: '280px', position: 'relative', overflow: 'hidden', borderRadius: '16px' }}
        >
          <img
            src="https://images.unsplash.com/photo-1504813184591-01572f98c85f?w=600&q=80&auto=format&fit=crop"
            alt="Pharmacy wholesale"
            loading="lazy"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div className="sc-label">Wholesale Pharma</div>
        </div>
        <div
          className="sc-img reveal reveal-up"
          style={{
            height: '280px',
            position: 'relative',
            overflow: 'hidden',
            borderRadius: '16px',
            transitionDelay: '0.1s',
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1624727828489-a1e03b79bba8?w=600&q=80&auto=format&fit=crop"
            alt="Surgical supplies"
            loading="lazy"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div className="sc-label">Surgical Supplies</div>
        </div>
        <div
          className="sc-img reveal reveal-up"
          style={{
            height: '280px',
            position: 'relative',
            overflow: 'hidden',
            borderRadius: '16px',
            transitionDelay: '0.2s',
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=600&q=80&auto=format&fit=crop"
            alt="Medical distribution"
            loading="lazy"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div className="sc-label">Rapid Distribution</div>
        </div>
        <div
          className="sc-img reveal reveal-right"
          style={{
            height: '280px',
            position: 'relative',
            overflow: 'hidden',
            borderRadius: '16px',
            transitionDelay: '0.3s',
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1563213126-a4273aed2016?w=600&q=80&auto=format&fit=crop"
            alt="Cold storage medical"
            loading="lazy"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div className="sc-label">Cold Chain Storage</div>
        </div>
      </div>
    </div>
  );
}
