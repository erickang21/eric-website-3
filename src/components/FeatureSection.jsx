import React from 'react';
import '../css/components/FeatureSection.css';

const FeatureSection = ({ title, description, imageURL, gif, style, last }) => {
    return (
        <div className="feature-section">
            <h2 className="feature-title">{title}</h2>
            <p className="feature-description">{description}</p>
            {gif ? 
                <iframe className="feature-image" id="js_video_iframe" src={imageURL} style={style}></iframe> :
                <img className="feature-image" src={imageURL} style={style}></img> 
            }
            {
            !last && (
                <div className="scroll-formore">
                    <span className="scroll-formore-text">↓ Scroll for more features! ↓</span>
                </div>
            )
            }
        </div>
    )
};

export default FeatureSection;
