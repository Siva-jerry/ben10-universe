import { useState } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

import { originalAliens } from "../../data/originalAliens";
import "../../styles/OriginalAliens.css";

export default function OriginalAliens() {

  const [selectedAlien, setSelectedAlien] =
    useState(originalAliens[0]);

  return (

    <section
    id="aliens"
    className="original-aliens">

      <div className="dna-glow dna-left"></div>
      <div className="dna-glow dna-right"></div>

      <h2 className="database-title">
        ORIGINAL OMNITRIX DATABASE
      </h2>

      <div className="alien-screen">

<motion.div
  key={selectedAlien.id + "-image"}
  className="original-image"
  initial={{
    opacity: 0,
    x: -50
  }}
  animate={{
    opacity: 1,
    x: 0
  }}
  transition={{
    duration: 0.6
  }}
>

  <img
    src={`/src/assets/images/original/${selectedAlien.image}`}
    alt={selectedAlien.name}
  />

</motion.div>

       <motion.div
  key={selectedAlien.id + "-content"}
  className="original-content"
  initial={{
    opacity: 0,
    x: 50
  }}
  animate={{
    opacity: 1,
    x: 0
  }}
  transition={{
    duration: 0.6
  }}
>

  <h2 className="original-name">
    {selectedAlien.name}
  </h2>

  <p className="original-species">
    Species: {selectedAlien.species}
  </p>

  <p className="original-planet">
    Planet: {selectedAlien.planet}
  </p>

  <div className="original-divider"></div>

  <TypeAnimation
    key={selectedAlien.id}
    sequence={[
      selectedAlien.description
    ]}
    speed={80}
    cursor={false}
  />

</motion.div>

      </div>

      <div className="original-selector">

        {originalAliens.map((alien) => (

          <button
            key={alien.id}
            className={
  selectedAlien.id === alien.id
    ? "original-btn active"
    : "original-btn"
}
            onClick={() =>
              setSelectedAlien(alien)
            }
          >

            {alien.name}

          </button>

        ))}

      </div>

    </section>

  );
}