import "../../styles/Aliens.css";

export default function AlienHero() {
  return (
    <section className="alien-hero">

      <div className="alien-hero-overlay"></div>

      <div className="alien-hero-content">

        <p className="alien-hero-tag">
          OMNITRIX DNA DATABASE
        </p>

        <h1 className="alien-hero-title">
          ALL ALIENS
        </h1>

        <p className="alien-hero-description">
          Explore every alien transformation stored inside the
          Omnitrix. Discover species, powers, homeworlds and
          legendary abilities from across the Ben 10 universe.
        </p>

        <div className="alien-hero-stats">

          <div className="hero-stat">
            <h3>10</h3>
            <span>Original Aliens</span>
          </div>

          <div className="hero-stat">
            <h3>21+</h3>
            <span>Featured Aliens</span>
          </div>

          <div className="hero-stat">
            <h3>∞</h3>
            <span>DNA Samples</span>
          </div>

        </div>

      </div>

      <div className="dna-ring ring-1"></div>
      <div className="dna-ring ring-2"></div>
      <div className="dna-ring ring-3"></div>

    </section>
  );
}