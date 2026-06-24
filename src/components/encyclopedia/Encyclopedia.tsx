import { useState } from "react";
import { motion } from "framer-motion";

import { encyclopediaData } from "../../data/encyclopedia";
import "../../styles/Encyclopedia.css";

export default function Encyclopedia() {

  const [selectedEntry, setSelectedEntry] =
    useState(encyclopediaData[0]);

  return (

    <section
      className="encyclopedia-section"
      id="encyclopedia"
    >

      <h2 className="encyclopedia-title">
        GALVAN PRIME ARCHIVE
      </h2>

      <div className="archive-terminal">

        {/* LEFT DATABASE */}

        <div className="database-sidebar">

          <div className="database-header">
            DATABASE
          </div>

          {encyclopediaData.map((entry) => (

            <button
              key={entry.id}
              className={
                selectedEntry.id === entry.id
                  ? "database-btn active"
                  : "database-btn"
              }
              onClick={() =>
                setSelectedEntry(entry)
              }
            >

              {entry.title}

            </button>

          ))}

        </div>

        {/* RIGHT CONTENT */}

        <motion.div
          key={selectedEntry.id}
          className="database-content"
          initial={{
            opacity:0,
            y:20
          }}
          animate={{
            opacity:1,
            y:0
          }}
        >

          <div className="database-image">

          <img
  src={`${import.meta.env.BASE_URL}images/encyclopedia/${selectedEntry.image}`}
  alt={selectedEntry.title}
/>
          </div>

          <span className="database-category">

            {selectedEntry.category}

          </span>

          <h2>

            {selectedEntry.title}

          </h2>

          <div className="database-divider"></div>

          <p>

            {selectedEntry.description}

          </p>

        </motion.div>

      </div>

    </section>
  );
}