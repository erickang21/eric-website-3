import React from 'react';
import FeatureSection from '../components/FeatureSection';

const FeaturePages = () => {
    const featuresList = [
        {
            title: "Send your friends anime-themed GIFs!",
            description: "Pick from hugs, kisses, slaps, and more. Then tag someone to make their day!",
            imageURL: "https://jumpshare.com/embed/XC7nrjaUXerzWOMQq3hQ",
            gif: true
        },
        {
            title: "Generate memes on the spot!",
            description: "Choose from a variety of popular memes templates and generate your own meme in seconds!",
            imageURL: "https://i.ibb.co/Kj7w1Wxg/Image-2025-09-01-at-9-40-PM.jpg",
            gif: false,
            style: { width: "55vw", height: "35vh"}
        },
        {
            title: "Moderate your server with ease!",
            description: "Warn, mute, and ban users in a single command, while being able to keep track of actions.",
            imageURL: "https://i.ibb.co/S4LwydtR/Image-2025-09-01-at-9-39-PM.jpg",
            gif: false,
            style: { width: "65vw", height: "50vh"}
        }
    ]
    return (
        <>
        {featuresList.map((feature, index) => (
            <section className={index === featuresList.length - 1 ?  "last-section" : "section"} style={{ backgroundColor: "#FFF6F1" }}>
                <FeatureSection title={feature.title} description={feature.description} imageURL={feature.imageURL} gif={feature.gif} style={feature.style} last={index === featuresList.length - 1}/>
            </section>
        ))}
        </>
    )

};

export default FeaturePages;
