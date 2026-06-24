import "../../styles/Footer.css";

import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope
} from "react-icons/fa";

export default function Footer() {

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

          <a href="#home">
            Home
          </a>

          <a href="#aliens">
            Aliens
          </a>

          <a href="#allies">
            Allies
          </a>

          <a href="#villains">
            Villains
          </a>

          <a href="#transformations">
            Transformations
          </a>

          <a href="#encyclopedia">
            Encyclopedia
          </a>

          <a href="#universe">
            Universe Database
          </a>

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