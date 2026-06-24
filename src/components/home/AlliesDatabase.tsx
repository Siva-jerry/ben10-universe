import { useState } from "react";
import { motion } from "framer-motion";

import { allies } from "../../data/allies";
import "../../styles/AlliesDatabase.css";

export default function AlliesDatabase() {

  const [selectedAlly, setSelectedAlly] =
    useState(allies[0]);

  return (

    <section
      id="allies"
      className="allies-database"
    >

      <h2 className="allies-title">
        HERO ALLIES DATABASE
      </h2>

      <div className="allies-screen">

        <motion.div
          key={selectedAlly.id}
          className="ally-image"
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
  src={`${import.meta.env.BASE_URL}images/allies/${selectedAlly.image}`}
  alt={selectedAlly.name}
  style={{
    filter: `drop-shadow(0 0 30px ${selectedAlly.glow})`
  }}
/>

        </motion.div>

        <motion.div
          key={selectedAlly.name}
          className="ally-content"
          initial={{
            opacity:0,
            x:40
          }}
          animate={{
            opacity:1,
            x:0
          }}
        >

          <p className="ally-alert">
            ALLY PROFILE ACTIVE
          </p>

          <h2>
            {selectedAlly.name}
          </h2>

          <p className="ally-role">
            Role: {selectedAlly.role}
          </p>

          <p className="ally-species">
            Species: {selectedAlly.species}
          </p>

          <div className="ally-divider"></div>

          <p className="ally-description">
            {selectedAlly.description}
          </p>

        </motion.div>

        <div className="ally-stats">

          <h3>
            HERO ANALYSIS
          </h3>

          {[
            {
              label:"INTELLIGENCE",
              value:selectedAlly.intelligence
            },
            {
              label:"COMBAT",
              value:selectedAlly.combat
            },
            {
              label:"MAGIC",
              value:selectedAlly.magic
            },
            {
              label:"LEADERSHIP",
              value:selectedAlly.leadership
            }
          ].map((stat,index)=>(

            <div
              className="ally-stat"
              key={index}
            >

              <div className="ally-stat-top">

                <span>
                  {stat.label}
                </span>

                <span>
                  {stat.value}%
                </span>

              </div>

              <div className="ally-bar">

                <motion.div
                  className="ally-fill"
                  style={{
                    background:selectedAlly.glow
                  }}
                  initial={{
                    width:0
                  }}
                  animate={{
                    width:`${stat.value}%`
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

      <div className="allies-selector">

        {allies.map((ally)=>(

          <button
            key={ally.id}
            className={
              selectedAlly.id === ally.id
              ? "ally-btn active"
              : "ally-btn"
            }
            style={
              selectedAlly.id === ally.id
              ? {
                  background:ally.glow,
                  boxShadow:
                  `0 0 12px ${ally.glow}`
                }
              : {}
            }
            onClick={()=>
              setSelectedAlly(ally)
            }
          >

            {ally.name}

          </button>

        ))}

      </div>

    </section>

  );

}