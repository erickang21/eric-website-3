import {motion} from 'framer-motion';
import React, { useState, useEffect } from 'react';
import '../css/ProjectSection.css';
import Card from 'react-bootstrap/Card';
import ProjectEntry from "../components/ProjectEntry";

const ProjectSection = () => {
  const [users, setUsers] = useState(0);
  const [servers, setServers] = useState(0);
  
  useEffect(() => {
    fetch("/api/stats")
      .then(res => res.json())
      .then((data) => {
        setUsers(data.users);
        setServers(data.servers);
      })
  })
  // These are just defaulting to estimates, if for some reason the API fails...
  const statsList = [
    {
      title: "active users",
      value: users ? users.toLocaleString() : "1,400,000",
    },
    {
      title: "servers",
      value: servers ? servers.toLocaleString() : "26,000",
    },
  ];
  const testimoniesList = [
    {
      text: "uwu bot is the best bot. Senor Banana the creator keeps the bot upkept and is always adding cool new features!",
      author: "Райан>.<",
    },
    {
      text: "very good bot; I even added it as the first bot in my server and it's great!",
      author: "QuandooglePhilliasThe3rd",
    },
    {
      text: "This bot is amazing and I would def recommend!!",
      author: "jollyfunnybone"
    }
  ]
  const devsList = [
    {
      name: "Eric Kang",
      nickname: "(A.K.A. \"banana\")",
      role: "Founder, Lead Developer, Community Manager",
      image: "https://i.ibb.co/XrPy2YsD/a50fffb7af16446c94df8afd6b3db64c.png",
    },
    {
      name: "Ravener",
      nickname: "(A.K.A. \"?\")",
      role: "Developer, Community Moderator",
      image: "https://i.ibb.co/JWCQb13h/31079629.jpg",
    }
  ];
  return (
    <div className="showcase">
      <div className="uwu-bot-stats-section">
        <div className="uwu-bot-community-title">
          <span>uwu bot has...</span>
        </div>
        <div className="uwu-bot-stats">
          {statsList.map((stat) => (
            <div className="uwu-bot-stats-item">
              <span className="uwu-bot-stats-item-value">{stat.value}</span>
              <span className="uwu-bot-stats-item-title">{stat.title}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="uwu-bot-testimonies">
          <div className="uwu-bot-testimonies-list">
            {testimoniesList.map((entry) => (
              <div className="uwu-bot-testimonies-item">
                <span className="uwu-bot-testimonies-item-text">"{entry.text}"</span>
                <p className="uwu-bot-testimonies-item-author">{` - ${entry.author}`}</p>
              </div>
            ))}
          </div>
      </div>
      <div className="uwu-bot-devs">
        <div className="uwu-bot-devs-title">
          <span>meet the uwu bot team!</span>
        </div>
        <div className="uwu-bot-devs-list">
          {devsList.map((dev) => (
          <div className="uwu-bot-devs-item">
            <img className="uwu-bot-devs-item-image" src={dev.image} alt={dev.name} />
            <span className="uwu-bot-devs-item-name">{dev.name}</span>
            <span className="uwu-bot-devs-item-nickname">{dev.nickname}</span>
            <span className="uwu-bot-devs-item-role">{dev.role}</span>
          </div>
          ))}
          
        </div>
        
      </div>
    </div>
  );
}

export default ProjectSection;