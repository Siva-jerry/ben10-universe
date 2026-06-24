import { useState } from "react";
import { motion } from "framer-motion";

import { ben10Villains } from "../../data/villains";
import "../../styles/VillainsDatabase.css";

export default function VillainsDatabase() {

  const [selectedVillain, setSelectedVillain] =
    useState(ben10Villains[0]);

  return (

    <section
      id="villains"
      className="villains-database"
    >

      <h2 className="villains-title">
        GALACTIC THREAT DATABASE
      </h2>

      <div className="villain-screen">

        <motion.div
          key={selectedVillain.id}
          className="villain-image"
          initial={{ opacity:0, scale:.8 }}
          animate={{ opacity:1, scale:1 }}
        >

          <img
  src={`${import.meta.env.BASE_URL}images/villains/${selectedVillain.image}`}
  alt={selectedVillain.name}
  style={{
    filter: `drop-shadow(0 0 30px ${selectedVillain.glow})`
  }}
/>

        </motion.div>

        <motion.div
          key={selectedVillain.name}
          className="villain-content"
          initial={{ opacity:0, x:40 }}
          animate={{ opacity:1, x:0 }}
        >

          <p className="danger-alert">
            LEVEL OMEGA THREAT
          </p>

          <h2>
            {selectedVillain.name}
          </h2>

          <p>
            Species:
            {" "}
            {selectedVillain.species}
          </p>

          <div className="villain-divider"></div>

          <p className="villain-description">
            {selectedVillain.description}
          </p>

        </motion.div>

        <div className="threat-panel">

          <h3>
            THREAT ANALYSIS
          </h3>

          {[
            {
              label:"THREAT",
              value:selectedVillain.threat
            },
            {
              label:"DESTRUCTION",
              value:selectedVillain.destruction
            },
            {
              label:"STRATEGY",
              value:selectedVillain.strategy
            },
            {
              label:"INFLUENCE",
              value:selectedVillain.influence
            }
          ].map((stat,index)=>(

            <div
              className="villain-stat"
              key={index}
            >

              <div className="villain-stat-head">

                <span>
                  {stat.label}
                </span>

                <span>
                  {stat.value}%
                </span>

              </div>

              <div className="villain-bar">

                <motion.div
                  className="villain-fill"
                  style={{
                    background:
                    selectedVillain.glow
                  }}
                  initial={{
                    width:0
                  }}
                  animate={{
                    width:
                    `${stat.value}%`
                  }}
                  transition={{
                    duration:1
                  }}
                />

              </div>

            </div>

          ))}

        </div>

      </div>

      <div className="villain-selector">

        {ben10Villains.map((villain)=>(

          <button
            key={villain.id}
            className={
              selectedVillain.id === villain.id
              ? "villain-btn active"
              : "villain-btn"
            }
            style={
              selectedVillain.id === villain.id
              ? {
                  background:villain.glow,
                  color:"#000",
                  boxShadow:
                  `0 0 15px ${villain.glow}`
                
                }
              : {}
            }
            onClick={() =>
              setSelectedVillain(villain)
            }
          >

            {villain.name}

          </button>

        ))}

      </div>

    </section>

  );

}