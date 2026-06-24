import { useState } from "react";
import { motion } from "framer-motion";

import { ultimateAliens } from "../../data/ultimateAliens";
import "../../styles/UltimateAlienDatabase.css";

export default function UltimateAlienDatabase() {

  const [selectedAlien, setSelectedAlien] =
    useState(ultimateAliens[0]);

  return (

    <section
      id="ultimate"
      className="ultimate-database"
    >

      <h2 className="ultimate-title">
        ULTIMATRIX EVOLUTION LAB
      </h2>

      <div className="ultimate-screen">

        <motion.div
          key={selectedAlien.id}
          className="ultimate-image"
          initial={{
            opacity:0,
            scale:.8
          }}
          animate={{
            opacity:1,
            scale:1
          }}
        >

          <img
            src={`/src/assets/images/ultimate/${selectedAlien.image}`}
            alt={selectedAlien.name}
          />

        </motion.div>

        <motion.div
          key={selectedAlien.name}
          className="ultimate-content"
          initial={{
            opacity:0,
            x:40
          }}
          animate={{
            opacity:1,
            x:0
          }}
        >

          <p className="mutation-alert">
            EVOLUTION COMPLETE
          </p>

          <h2>
            {selectedAlien.name}
          </h2>

          <p className="ultimate-species">
            Species: {selectedAlien.species}
          </p>

          <p className="ultimate-planet">
            Planet: {selectedAlien.planet}
          </p>

          <div className="ultimate-divider"></div>

          <p className="ultimate-description">
            {selectedAlien.description}
          </p>

        </motion.div>

        <div className="evolution-panel">

          <h3>
            MUTATION ANALYSIS
          </h3>

          <div className="ultimate-stat">

            <span>
              POWER
            </span>

            <span>
              {selectedAlien.power}%
            </span>

          </div>

          <div className="ultimate-bar">
            <motion.div
              className="ultimate-fill power"
              initial={{ width:0 }}
              animate={{
                width:
                `${selectedAlien.power}%`
              }}
            />
          </div>

          <div className="ultimate-stat">

            <span>
              SPEED
            </span>

            <span>
              {selectedAlien.speed}%
            </span>

          </div>

          <div className="ultimate-bar">
            <motion.div
              className="ultimate-fill speed"
              initial={{ width:0 }}
              animate={{
                width:
                `${selectedAlien.speed}%`
              }}
            />
          </div>

          <div className="ultimate-stat">

            <span>
              INTELLIGENCE
            </span>

            <span>
              {selectedAlien.intelligence}%
            </span>

          </div>

          <div className="ultimate-bar">
            <motion.div
              className="ultimate-fill intelligence"
              initial={{ width:0 }}
              animate={{
                width:
                `${selectedAlien.intelligence}%`
              }}
            />
          </div>

          <div className="ultimate-stat">

            <span>
              DURABILITY
            </span>

            <span>
              {selectedAlien.durability}%
            </span>

          </div>

          <div className="ultimate-bar">
            <motion.div
              className="ultimate-fill durability"
              initial={{ width:0 }}
              animate={{
                width:
                `${selectedAlien.durability}%`
              }}
            />
          </div>

        </div>

      </div>

      <div className="ultimate-selector">

        {ultimateAliens.map(
          (alien) => (

            <button
              key={alien.id}
              className={
                selectedAlien.id === alien.id
                ? "ultimate-btn active"
                : "ultimate-btn"
              }
              onClick={() =>
                setSelectedAlien(alien)
              }
            >

              {alien.name}

            </button>

          )
        )}

      </div>

    </section>

  );
}