import benImage from "../../assets/images/ben10-main.png";
import "../../styles/AboutBen.css";

export default function AboutBen() {
  return (
    <section className="about-ben">

      <div className="about-ben-image">

        <div className="image-border"></div>

        <img
          src={benImage}
          alt="Ben 10"
        />

      </div>

      <div className="about-ben-content">

        <p className="section-tag">
          HERO OF THE UNIVERSE
        </p>

        <h2 className="ben-heading">
          BEN TENNYSON
        </h2>

        <p className="typewriter">
          It's Hero Time!
        </p>

        <p className="ben-story">
          Benjamin Kirby Tennyson is a young hero who
          discovered the Omnitrix, a powerful alien
          device capable of transforming him into
          numerous alien species.

          Using the Omnitrix, Ben protects Earth and
          the universe from powerful threats while
          constantly growing as a hero.
        </p>

      </div>

    </section>
  );
}