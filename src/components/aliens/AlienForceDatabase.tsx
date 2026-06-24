import { useState } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

import { alienForceAliens } from "../../data/alienForceAliens";
import "../../styles/AlienForceDatabase.css";

export default function AlienForceDatabase() {

  const [selectedAlien, setSelectedAlien] =
    useState(alienForceAliens[0]);

  return (

    <section
      id="alien-force"
      className="alien-force-database"
    >

      <h2 className="af-title">
        ALIEN FORCE DATABASE
      </h2>

      <div className="af-screen">

        {/* IMAGE */}

        <motion.div
          key={selectedAlien.id + "-img"}
          className="af-image"
          initial={{
            opacity:0,
            x:-40
          }}
          animate={{
            opacity:1,
            x:0
          }}
          transition={{
            duration:.5
          }}
        >

          <img
  src={`/src/assets/images/alien-force/${selectedAlien.image}`}
  alt={selectedAlien.name}
  style={{
    filter: `drop-shadow(0 0 35px ${selectedAlien.glow})`
  }}
/>

        </motion.div>

        {/* CONTENT */}

        <motion.div
          key={selectedAlien.id + "-content"}
          className="af-content"
          initial={{
            opacity:0,
            y:20
          }}
          animate={{
            opacity:1,
            y:0
          }}
          transition={{
            duration:.5
          }}
        >

          <h2>
            {selectedAlien.name}
          </h2>

          <p className="af-species">
            Species: {selectedAlien.species}
          </p>

          <p className="af-planet">
            Planet: {selectedAlien.planet}
          </p>

          <div className="af-divider"></div>

          <TypeAnimation
            key={selectedAlien.id}
            sequence={[
              selectedAlien.description
            ]}
            speed={85}
            cursor={false}
          />

        </motion.div>

        {/* STATS */}

        <motion.div
          key={selectedAlien.id + "-stats"}
          className="af-stats"
          initial={{
            opacity:0,
            x:40
          }}
          animate={{
            opacity:1,
            x:0
          }}
          transition={{
            duration:.5
          }}
        >

          <h3>DNA ANALYSIS</h3>

         <div className="stat">

  <span>
    POWER {selectedAlien.power}%
  </span>

  <div className="bar">

    <motion.div
      className="fill"
      initial={{ width: 0 }}
      animate={{
        width: `${selectedAlien.power}%`
      }}
      transition={{
        duration: 1
      }}
    />

  </div>

</div>

          <div className="stat">

            <span>
SPEED
{selectedAlien.speed}%
</span>

            <div className="bar">

              <motion.div
  className="fill"
  initial={{ width:0 }}
  animate={{
    width:`${selectedAlien.speed}%`
  }}
  transition={{
    duration:1
  }}
/>

            </div>

          </div>

          <div className="stat">

            <span>
              INTELLIGENCE
              {selectedAlien.intelligence}%
            </span>

            <div className="bar">

             <motion.div
  className="fill"
  initial={{ width:0 }}
  animate={{
    width:`${selectedAlien.intelligence}%`
  }}
  transition={{
    duration:1
  }}
/>

            </div>

          </div>

          <div className="stat">

            <span>
                DURABILITY
                {selectedAlien.durability}%
            </span>

            <div className="bar">

             <motion.div
  className="fill"
  initial={{ width:0 }}
  animate={{
    width:`${selectedAlien.durability}%`
  }}
  transition={{
    duration:1
  }}
/>

            </div>

          </div>

        </motion.div>

      </div>

      {/* SELECTOR */}

      <div className="af-selector">

        {alienForceAliens.map((alien) => (

          <button
  key={alien.id}
  className={
    selectedAlien.id === alien.id
      ? "af-btn active"
      : "af-btn"
  }
  style={
  selectedAlien.id === alien.id
    ? {
        background: alien.glow,
        color:"#000",

        boxShadow:
          `0 0 15px ${alien.glow}`,

        border:
          `2px solid ${alien.glow}`
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