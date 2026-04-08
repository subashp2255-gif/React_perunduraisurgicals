export default function StatsBar() {
  return (
    <div className="stats-bar reveal reveal-up">
      <div className="stat-item">
        <div className="stat-num" data-target="500">
          0<span>+</span>
        </div>
        <div className="stat-lbl">Products Stocked</div>
      </div>
      <div className="stat-item">
        <div className="stat-num" data-target="10">
          0<span>+</span>
        </div>
        <div className="stat-lbl">Trusted Brands</div>
      </div>
      <div className="stat-item">
        <div className="stat-num" data-target="15">
          0<span>+</span>
        </div>
        <div className="stat-lbl">Years Experience</div>
      </div>
      <div className="stat-item">
        <div className="stat-num" data-target="200">
          0<span>+</span>
        </div>
        <div className="stat-lbl">Clients Served</div>
      </div>
    </div>
  );
}
