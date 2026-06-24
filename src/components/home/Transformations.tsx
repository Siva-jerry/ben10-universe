import { useState } from "react";
import { motion } from "framer-motion";

import { allTransformations } from "../../data/allTransformations";
import "../../styles/Transformations.css";

export default function Transformations() {

  const [search, setSearch] =
    useState("");

  const [filter, setFilter] =
    useState("All");

  const [selectedAlien, setSelectedAlien] =
    useState<any>(null);

  const filteredAliens =
    allTransformations.filter((alien) => {

      const matchesSearch =
        alien.name
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesFilter =
        filter === "All"
          ? true
          : alien.era === filter;

      return (
        matchesSearch &&
        matchesFilter
      );
    });

  return (

    <section
      id="transformations"
      className="transformations-section"
    >

      <h2 className="transformations-title">
        OMNITRIX TRANSFORMATIONS
      </h2>

      <div className="search-area">

        <input
          type="text"
          placeholder="Search Alien..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
        />

      </div>

      <div className="filter-buttons">

        {[
          "All",
          "Classic",
          "Alien Force",
          "Ultimate",
          "Omniverse"
        ].map((era) => (

          <button
            key={era}
            className={
              filter === era
                ? "filter-btn active"
                : "filter-btn"
            }
            onClick={() =>
              setFilter(era)
            }
          >

            {era}

          </button>

        ))}

      </div>

      <div className="transform-grid">

        {filteredAliens.map((alien) => (

          <motion.div
            key={
              alien.id +
              alien.name
            }
            className="transform-card"
            whileHover={{
              scale:1.04
            }}
            onClick={() =>
              setSelectedAlien(alien)
            }
          >

            <img
              src={
                alien.era === "Classic"
                ? `/src/assets/images/original/${alien.image}`
                : alien.era === "Alien Force"
                ? `/src/assets/images/alien-force/${alien.image}`
                : alien.era === "Ultimate"
                ? `/src/assets/images/ultimate/${alien.image}`
                : `/src/assets/images/omniverse/${alien.image}`
              }
              alt={alien.name}
            />

            <h3>
              {alien.name}
            </h3>

            <span>
              {alien.era}
            </span>

          </motion.div>

        ))}

      </div>

      {selectedAlien && (

        <div
          className="transform-modal"
          onClick={() =>
            setSelectedAlien(null)
          }
        >

          <motion.div
            className="transform-popup"
            initial={{
              opacity:0,
              scale:.8
            }}
            animate={{
              opacity:1,
              scale:1
            }}
            onClick={(e) =>
              e.stopPropagation()
            }
          >

            <button
              className="transform-close-btn"
              onClick={() =>
                setSelectedAlien(null)
              }
            >
              ✕
            </button>

            <img
              src={
                selectedAlien.era === "Classic"
                ? `/src/assets/images/original/${selectedAlien.image}`
                : selectedAlien.era === "Alien Force"
                ? `/src/assets/images/alien-force/${selectedAlien.image}`
                : selectedAlien.era === "Ultimate"
                ? `/src/assets/images/ultimate/${selectedAlien.image}`
                : `/src/assets/images/omniverse/${selectedAlien.image}`
              }
              alt={
                selectedAlien.name
              }
            />

            <h2>
              {selectedAlien.name}
            </h2>

            <p>
              <strong>
                Species:
              </strong>{" "}
              {selectedAlien.species}
            </p>

            <p>
              <strong>
                Planet:
              </strong>{" "}
              {selectedAlien.planet}
            </p>

            <p>
              <strong>
                Era:
              </strong>{" "}
              {selectedAlien.era}
            </p>

            <div className="transform-popup-stats">

              <div>
                POWER:
                {selectedAlien.power}%
              </div>

              <div>
                SPEED:
                {selectedAlien.speed}%
              </div>

              <div>
                INT:
                {selectedAlien.intelligence}%
              </div>

              <div>
                DUR:
                {selectedAlien.durability}%
              </div>

            </div>

    <p className="transform-popup-description">
  {selectedAlien.description}
</p>

          </motion.div>

        </div>

      )}

    </section>

  );
}