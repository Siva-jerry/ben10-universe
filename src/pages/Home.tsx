import Navbar from "../components/common/Navbar";
import FeaturedAliens from "../components/home/FeaturedAliens";
import AlienForceDatabase
from "../components/aliens/AlienForceDatabase";
import UltimateAlienDatabase
from "../components/home/UltimateAlienDatabase";
import OmniverseDatabase
from "../components/home/OmniverseDatabase";
import AlliesDatabase from "../components/home/AlliesDatabase";
import VillainsDatabase
from "../components/home/VillainsDatabase";
import Transformations from "../components/home/Transformations";
import Encyclopedia
from "../components/encyclopedia/Encyclopedia";
import UniverseDatabase from "../components/universe/UniverseDatabase";
import WatchCenter from "../components/watch/WatchCenter";
import Footer from "../components/common/Footer";


import "../styles/Home.css";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { useState } from "react";

import heroVideo from "../assets/videos/hero.mp4";
import benImage from "../assets/images/ben10-main.webp";

import omnitrix1 from "../assets/images/omnitrix1.png";
import omnitrix2 from "../assets/images/omnitrix2.png";
import omnitrix3 from "../assets/images/omnitrix3.png";
import OriginalAliens from "../components/aliens/OriginalAliens";

export default function Home() {

const [startTyping, setStartTyping] = useState(false);


    return (
<>
<Navbar />

  <section
  id="home"
  className="hero"
>
    <video
      autoPlay
      muted
      loop
      playsInline
      className="hero-video"
    >
      <source src={heroVideo} type="video/mp4" />
    </video>

    <div className="hero-overlay"></div>

    <div className="hero-content">

      <p className="hero-tag">
  ● GALACTIC NETWORK ONLINE
</p>

      <h1 className="hero-title">
  <span className="ben-text">BEN 10</span>

  <span className="universe-text">
    UNIVERSE
  </span>
</h1>

      <p className="hero-description">
        Discover every alien, ally, villain,
        transformation and planet from the
        Ben 10 multiverse.
      </p>

     <div className="hero-buttons">

  <button
    className="primary-btn"
    onClick={() =>
      document
        .getElementById("universe")
        ?.scrollIntoView({
          behavior: "smooth"
        })
    }
  >
    Explore Universe
  </button>

  <button
    className="secondary-btn"
    onClick={() =>
      document
        .getElementById("aliens")
        ?.scrollIntoView({
          behavior: "smooth"
        })
    }
  >
    View Aliens
  </button>

</div>

    </div>
  </section>
  <section className="about-ben-section">

  <img
    src={omnitrix1}
    className="omnitrix-bg omnitrix-1"
    alt=""
  />

  <img
    src={omnitrix2}
    className="omnitrix-bg omnitrix-2"
    alt=""
  />

  <img
    src={omnitrix3}
    className="omnitrix-bg omnitrix-3"
    alt=""
  />

  {/* IMAGE */}

  <motion.div
    className="about-ben-frame"

    initial={{
      opacity: 0,
      x: -100
    }}

    whileInView={{
      opacity: 1,
      x: 0
    }}

    transition={{
      duration: 1
    }}

    viewport={{
      once: true,
      amount:0.4
    }}
  >

    <span className="frame-corner top-left"></span>
    <span className="frame-corner top-right"></span>
    <span className="frame-corner bottom-left"></span>
    <span className="frame-corner bottom-right"></span>

    <div className="about-ben-image">

      <img
        src={benImage}
        alt="Ben Tennyson"
        className="ben-main-image"
      />

    </div>

  </motion.div>

  {/* CONTENT */}

 <motion.div
className="about-ben-content"

initial={{
  opacity:0,
  x:100
}}

whileInView={{
  opacity:1,
  x:0
}}

onViewportEnter={()=>{
  setStartTyping(true);
}}

transition={{
  duration:1
}}

viewport={{
  once:true,
  amount:0.4
}}
>

    <motion.p
      className="about-tag"

      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
      viewport={{ once: true }}
    >
      HERO OF THE MULTIVERSE
    </motion.p>

    <motion.h2
      className="about-title"

      initial={{
        opacity: 0,
        y: 50
      }}

      whileInView={{
        opacity: 1,
        y: 0
      }}

      transition={{
        delay: 0.4,
        duration: 0.8
      }}

      viewport={{
        once: true
      }}
    >
      BEN TENNYSON
    </motion.h2>

    {
startTyping && (

<TypeAnimation
sequence={[
"It's Hero Time!",
1000
]}
wrapper="h3"
speed={60}
repeat={0}
className="typewriter"
/>

)
}

  {
startTyping && (

<TypeAnimation

sequence={[
`Ben Tennyson is a boy who discovers the Omnitrix during a summer vacation with his cousin Gwen and grandfather Max.

The Omnitrix allows him to transform into powerful alien heroes like Heatblast, Four Arms, XLR8 and many more.

As Ben faces dangerous enemies such as Vilgax, Kevin 11 and countless intergalactic threats, he slowly grows from a mischievous kid into one of the greatest heroes in the universe.

Across multiple series, Ben unlocks new alien forms, stronger Omnitrix versions and learns the true responsibility that comes with incredible power.

His journey is not only about saving Earth but protecting the entire galaxy while staying true to himself.`,
1000
]}

wrapper="p"

speed={85}

repeat={0}

cursor={false}

className="about-description"

/>

)
}

  </motion.div>
  </section>
  <FeaturedAliens />
  <OriginalAliens/>
  <AlienForceDatabase />
  <UltimateAlienDatabase />
  <OmniverseDatabase/>
  <AlliesDatabase/>
  <VillainsDatabase/>
  <Transformations/>
  <Encyclopedia/>
  <UniverseDatabase/>
  <WatchCenter/>
  <Footer/>
</>

);
}