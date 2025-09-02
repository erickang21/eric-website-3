import React from 'react';
import '../css/DonatePage.css';

const DonatePage = () => {
    return (
        <div className="donate-page">
            <h1 className="donate-title">Donate</h1>
            <p className="donate-description">When I developed uwu bot, I made it a point to not monetize anything. I know the frustration of wanting to use something but seeing "pay to unlock" everywhere, and do not plan to bring the same experience to you, the user.</p>
            <p className="donate-description">That being said, this isn't all free to run. Not just the outright hosting costs, but all the dev hours I poured into ensuring each user-requested feature or bugfix is shipped <b>within days.</b> I don't do this to ask for money (some would say it's the "love of the game"), but if you wanted to buy me a coffee, I would be eternally grateful.</p>
            <p className="donate-description">Donations can be sent directly to my PayPal, so you know I get 100% of your money. Doesn't matter if it's $0.01, $1, $2, $5. I WILL thank you personally. Oh, and, you'll get an exclusive "Supporter" role in my <a className="server-link" href="https://discord.gg/RZ8SZxPrQQ" target="_blank">Discord server</a> forever!</p>
            <button 
                  className="navbar-button" 
                  onClick={() => window.open("https://paypal.me/bananaboy21", "_blank")}
                >
                  <span>Donate via PayPal</span>
            </button>
        </div>
    )
}

export default DonatePage;
