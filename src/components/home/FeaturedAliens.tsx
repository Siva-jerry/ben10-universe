import { useState } from "react";
import { aliens } from "../../data/aliens";
import "../../styles/FeaturedAliens.css";
import { motion } from "framer-motion";

import omnitrix1 from "../../assets/images/omnitrix1.png";
import omnitrix2 from "../../assets/images/omnitrix2.png";
import omnitrix3 from "../../assets/images/omnitrix3.png";

export default function FeaturedAliens() {

  const [selectedAlien, setSelectedAlien] =
    useState(aliens[0]);

  return (

   <motion.section
  id="aliens"
  className="featured-aliens"
  initial={{
    opacity:0,
    y:80
  }}
  whileInView={{
    opacity:1,
    y:0
  }}
  viewport={{
    once:true,
    amount:.2
  }}
  transition={{
    duration:.8
  }}
>
        <img
src={omnitrix1}
className="featured-omnitrix omnitrix-a"
alt=""
/>

<img
src={omnitrix2}
className="featured-omnitrix omnitrix-b"
alt=""
/>

<img
src={omnitrix3}
className="featured-omnitrix omnitrix-c"
alt=""
/>

      <div className="featured-header">

        <p className="featured-tag">
          OMNITRIX DNA DATABASE
        </p>

        <h2 className="featured-title">
          FEATURED ALIENS
        </h2>

      </div>

      <div className="alien-showcase">

        <motion.div
  className="alien-image-section"
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.5 }}
>

  <img
    src={`/src/assets/images/aliens/${selectedAlien.image}`}
    alt={selectedAlien.name}
    className={`showcase-image glow-image-${selectedAlien.id}`}
  />

</motion.div>

        <div
          className="alien-info"
        >

          <h2>
            {selectedAlien.name}
          </h2>

          <p className="species">
            Species: {selectedAlien.species}
          </p>

          <p className="planet">
            Planet: {selectedAlien.planet}
          </p>

          <h3>Abilities</h3>

          <ul>

            {selectedAlien.abilities.map(
              (ability, index) => (
                <li key={index}>
                  {ability}
                </li>
              )
            )}

          </ul>

        </div>

      </div>

     <div className="alien-selector">

  {aliens.map((alien) => (

 <div
  key={alien.id}
  className={
    selectedAlien.id === alien.id
      ? `alien-card active glow-${alien.id}`
      : "alien-card"
  }
  onClick={() =>
    setSelectedAlien(alien)
  }
>

      <img
        src={`/src/assets/images/aliens/${alien.image}`}
        alt={alien.name}
      />

      <h4>{alien.name}</h4>

    </div>

  ))}

</div>
    </motion.section>

  );
}