import "../../styles/Navbar.css";
import logo from "../../assets/images/logo.png";
import { useRef, useState } from "react";

import {
  FaPlay,
  FaPause
} from "react-icons/fa";

import themeMusic
from "../../assets/audio/ben10-theme.mp3";


export default function Navbar() {
  const audioRef =
useRef<HTMLAudioElement>(null);

const [playing,setPlaying] =
useState(false);

const toggleMusic = () => {

  if(!audioRef.current) return;

  if(playing){

    audioRef.current.pause();

    setPlaying(false);

  }else{

    audioRef.current.play();

    setPlaying(true);

  }

};

  const scrollToSection = (id: string) => {
    document
      .getElementById(id)
      ?.scrollIntoView({
        behavior: "smooth"
      });
  };

 return (

  <>

    <nav className="navbar">

      <div className="logo">
        <img
          src={logo}
          alt="Ben 10 Logo"
          className="logo-image"
        />
      </div>

      <div className="nav-links">

        <button
          onClick={() => scrollToSection("home")}
        >
          Home
        </button>

        <button
          onClick={() => scrollToSection("aliens")}
        >
          Aliens
        </button>

        <button
          onClick={() => scrollToSection("allies")}
        >
          Allies
        </button>

        <button
          onClick={() => scrollToSection("villains")}
        >
          Villains
        </button>

        <button
          onClick={() => scrollToSection("transformations")}
        >
          Transformations
        </button>

        <button
          onClick={() => scrollToSection("encyclopedia")}
        >
          Encyclopedia
        </button>

        <button
          onClick={() => scrollToSection("universe")}
        >
          Universe Database
        </button>

        <button
          className="music-btn"
          onClick={toggleMusic}
        >
          {playing
            ? <FaPause />
            : <FaPlay />
          }
        </button>

      </div>

    </nav>

    <audio
      ref={audioRef}
      loop
    >
      <source
        src={themeMusic}
        type="audio/mpeg"
      />
    </audio>

  </>

);
}