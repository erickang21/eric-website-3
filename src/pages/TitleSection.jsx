import React from 'react';
import Button from 'react-bootstrap/Button';
import Typewriter from "typewriter-effect";
import SocialEntry from "../components/SocialEntry";
import {FaGithub} from "react-icons/fa";
import {CiLinkedin} from "react-icons/ci";
import {AiOutlineSpotify} from "react-icons/ai";
import '../css/TitleSection.css';

const TitleSection = () => {
  return (
    <div className="title">
      <div className="name-section">
        <div className="name-text-section">
          <img src="https://i.ibb.co/twcG5zYR/71d90cffedce0b73a688078bab6b5cef.png" className="pfp" alt="uwu bot profile"></img>
          <h1 className="name-text">uwu bot</h1>
        </div>
        <p className="description-text">Anime ● Memes ● Fun</p>
        <p className="stats-text">An anime-themed Discord bot, trusted by 1.5M users.</p>
      </div>
      <button 
        className="invite-button" 
        href="https://discord.com/oauth2/authorize?client_id=520682706896683009&permissions=1073753094&scope=bot"
        onClick={() => window.open("https://discord.com/oauth2/authorize?client_id=520682706896683009&permissions=1073753094&scope=bot", "_blank")}
      >
        𐔌՞. .՞𐦯 Invite me!
      </button>
      <p className="server-text">or <a className="server-link" href="https://discord.gg/RZ8SZxPrQQ" target="_blank">join the Discord server</a> to try it out first!</p>
      <div className="scroll-formore">
        <span className="scroll-formore-text">↓ Scroll to see more! ↓</span>
      </div>
    </div>
  );
}

export default TitleSection;
