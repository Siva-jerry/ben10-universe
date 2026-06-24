import "../../styles/Footer.css";

import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope
} from "react-icons/fa";

export default function Footer() {
  const scrollToSection = (id: string) => {
  document
    .getElementById(id)
    ?.scrollIntoView({
      behavior: "smooth"
    });
};

  return (

    <footer className="ben-footer">

      <div className="footer-glow"></div>

      <div className="footer-content">

        <h1 className="footer-logo">
          BEN 10 UNIVERSE
        </h1>

        <p className="footer-tagline">
          "It's Hero Time"
        </p>

       <div className="footer-nav">

<button onClick={() => scrollToSection("home")}>
  Home
</button>

<button onClick={() => scrollToSection("aliens")}>
  Aliens
</button>

<button onClick={() => scrollToSection("allies")}>
  Allies
</button>

<button onClick={() => scrollToSection("villains")}>
  Villains
</button>

<button onClick={() => scrollToSection("transformations")}>
  Transformations
</button>

<button onClick={() => scrollToSection("encyclopedia")}>
  Encyclopedia
</button>

<button onClick={() => scrollToSection("universe")}>
  Universe Database
</button>

</div>

        <div className="footer-social">

          <a href="https://github.com/Siva-jerry">
            <FaGithub />
          </a>

          <a href="https://www.linkedin.com/in/siva-m-823698357?utm_source=share_via&utm_content=profile&utm_medium=member_android">
            <FaLinkedin />
          </a>

          <a href="https://www.instagram.com/example_of_innocent__/">
            <FaInstagram />
          </a>

         <a href="mailto:sivajerry1433@gmail.com">
  <FaEnvelope />
</a>

        </div>

        <div className="footer-bottom">

          <h3>
            CREATED WITH 💚 BY SIVA M
          </h3>

          <p>
            © 2026 Ben 10 Universe
          </p>

        </div>

      </div>

    </footer>

  );

}