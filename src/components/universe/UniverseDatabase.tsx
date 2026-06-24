import { useState } from "react";
import { motion } from "framer-motion";

import { universeMap } from "../../data/universeMap";
import "../../styles/UniverseDatabase.css";

export default function UniverseDatabase() {

  const [selectedLocation, setSelectedLocation] =
    useState(universeMap[0]);

  const getDangerColor = (danger: string) => {

    if (danger.toLowerCase().includes("low"))
      return "#00ff66";

    if (danger.toLowerCase().includes("medium"))
      return "#ffd000";

    if (danger.toLowerCase().includes("high"))
      return "#ff8800";

    return "#ff4040";
  };

  return (

    <section
      id="universe"
      className="universe-database"
    >

      <h2 className="universe-title">
        UNIVERSE DATABASE
      </h2>

      <p className="universe-subtitle">
        Explore Important Worlds Across The Ben 10 Multiverse
      </p>

      <div className="universe-layout">

        {/* MAP */}

        <div className="universe-map">

          {universeMap.map((planet) => (

            <button
              key={planet.id}
              className={
                selectedLocation.id === planet.id
                  ? "universe-node active"
                  : "universe-node"
              }
              style={{
                left: planet.x,
                top: planet.y
              }}
              onClick={() =>
                setSelectedLocation(planet)
              }
            >

              <span></span>

              <p>{planet.name}</p>

            </button>

          ))}

        </div>

        {/* PANEL */}

        <motion.div
          key={selectedLocation.id}
          className="universe-panel"
          initial={{
            opacity:0,
            x:40
          }}
          animate={{
            opacity:1,
            x:0
          }}
        >

          <div className="universe-image">

            <img
              src={`/src/assets/images/universe/${selectedLocation.image}`}
              alt={selectedLocation.name}
            />

          </div>

          <h2>
            {selectedLocation.name}
          </h2>

          <div className="universe-info">

            <div>

              <h4>TYPE</h4>

              <span>
                {selectedLocation.type}
              </span>

            </div>

            <div>

              <h4>RULER</h4>

              <span>
                {selectedLocation.ruler}
              </span>

            </div>

            <div>

              <h4>POPULATION</h4>

              <span>
                {selectedLocation.population}
              </span>

            </div>

            <div>

              <h4>DANGER</h4>

              <span
                style={{
                  color:
                  getDangerColor(
                    selectedLocation.danger
                  )
                }}
              >
                {selectedLocation.danger}
              </span>

            </div>

          </div>

          <div className="universe-divider"></div>

          <p className="universe-description">
            {selectedLocation.description}
          </p>

        </motion.div>

      </div>

    </section>

  );
}