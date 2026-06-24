import { useState } from "react";
import { motion } from "framer-motion";

import { omniverseAliens } from "../../data/omniverseAliens";
import "../../styles/OmniverseDatabase.css";

export default function OmniverseDatabase() {

const [selectedAlien, setSelectedAlien] =
useState(omniverseAliens[0]);

return (

<section
  id="omniverse"
  className="ov-database"
>

  <h2 className="ov-title">
    OMNIVERSE DATABASE
  </h2>

  <div className="ov-screen">

    <motion.div
      key={selectedAlien.id}
      className="ov-image"
      initial={{
        opacity:0,
        x:-40
      }}
      animate={{
        opacity:1,
        x:0
      }}
    >

      <img
  src={`${import.meta.env.BASE_URL}images/omniverse/${selectedAlien.image}`}
  alt={selectedAlien.name}
  style={{
    filter: `drop-shadow(0 0 30px ${selectedAlien.glow})`
  }}
/>

    </motion.div>

    <motion.div
      key={selectedAlien.name}
      className="ov-content"
      initial={{
        opacity:0,
        y:20
      }}
      animate={{
        opacity:1,
        y:0
      }}
    >

      <p className="ov-tag">
        OMNITRIX SCAN COMPLETE
      </p>

      <h2>
        {selectedAlien.name}
      </h2>

      <p>
        Species: {selectedAlien.species}
      </p>

      <p>
        Planet: {selectedAlien.planet}
      </p>

      <div className="ov-divider"></div>

      <p className="ov-description">
        {selectedAlien.description}
      </p>

    </motion.div>

    <div className="ov-stats">

      <h3>
        OMNIVERSE ANALYSIS
      </h3>

      <div className="ov-stat">

        <span>
          POWER {selectedAlien.power}%
        </span>

        <div className="ov-bar">

          <motion.div
            className="ov-fill"
            style={{
              background:selectedAlien.glow
            }}
            initial={{
              width:0
            }}
            animate={{
              width:
              `${selectedAlien.power}%`
            }}
          />

        </div>

      </div>

      <div className="ov-stat">

        <span>
          SPEED {selectedAlien.speed}%
        </span>

        <div className="ov-bar">

          <motion.div
            className="ov-fill"
            style={{
              background:selectedAlien.glow
            }}
            initial={{
              width:0
            }}
            animate={{
              width:
              `${selectedAlien.speed}%`
            }}
          />

        </div>

      </div>

      <div className="ov-stat">

        <span>
          INTELLIGENCE
          {selectedAlien.intelligence}%
        </span>

        <div className="ov-bar">

          <motion.div
            className="ov-fill"
            style={{
              background:selectedAlien.glow
            }}
            initial={{
              width:0
            }}
            animate={{
              width:
              `${selectedAlien.intelligence}%`
            }}
          />

        </div>

      </div>

      <div className="ov-stat">

        <span>
          DURABILITY
          {selectedAlien.durability}%
        </span>

        <div className="ov-bar">

          <motion.div
            className="ov-fill"
            style={{
              background:selectedAlien.glow
            }}
            initial={{
              width:0
            }}
            animate={{
              width:
              `${selectedAlien.durability}%`
            }}
          />

        </div>

      </div>

    </div>

  </div>

  <div className="ov-selector">

    {omniverseAliens.map((alien) => (

      <button
        key={alien.id}
        className="ov-btn"
        style={
          selectedAlien.id === alien.id
          ? {
              background:alien.glow,
              color:"#000",
              border:
              `2px solid ${alien.glow}`,
              boxShadow:
              `0 0 10px ${alien.glow}`
               
            }
          : {}
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