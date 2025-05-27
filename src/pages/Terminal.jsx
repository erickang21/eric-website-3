import React, { useState, useRef, useEffect } from 'react';
import '../css/Terminal.css';
import {motion} from "framer-motion";

const commands = {
  help: [
    'Available commands:',
    'whoami - Info about me',
    'skills - Show skill list',
    'github - My GitHub link',
    'songrec - Get a random song recommendation from my playlists',
    'clear - Clear the terminal',
    'help - Show this help message',
    'And try most Linux commands! Along with some Easter eggs :)'
  ],
  whoami: ['Eric Kang — Full Stack Developer with 8+ years of experience!'],
  skills: [
    'Programming Languages: Python, Java, C++, C, JavaScript, TypeScript',
    'Frameworks and Libraries: React.js, Node.js, Vue, Express.js, Next.js, Webpack, Tailwind CSS, OpenAI, Docker, Electron, Flask, TypeORM',
    'Cloud and DevOps: AWS (Lambda, S3, EC2, CloudWatch, API Gateway), Google Cloud, Oracle Cloud, Azure, Cloudflare, Nginx',
    'Databases: PostgreSQL, MySQL, MongoDB, Oracle, AWS DynamoDB'
  ],
  github: ['https://github.com/erickang21'],
  shutdown: ['Nice try :)']
};
//todo: linkedin, spotify, song rec,
// ls, pwd, su, cd
export default function Terminal() {
  const [history, setHistory] = useState([]);
  const [input, setInput] = useState('');
  const [focused, setFocused] = useState(false);
  const inputRef = useRef(null);
  const terminalRef = useRef(null);
  const scrollRef = useRef(null);
  const TERMINAL_START_CHARS = 'user@Eric-Website:~$';
  useEffect(() => {
    if (history.length) inputRef.current?.focus();
  }, [history]);

  const handleCommand = (e) => {
    e.preventDefault();
    const trimmed = { text: input.trim(), command: true };
    const command = trimmed.text;
    if (!trimmed.text) return;
    else if (trimmed.text === "clear") {
      setHistory(prev => []);
    } else {
      const response = commands[trimmed.text] || [`Command not found: ${trimmed.text}`];
      const responseFormatted = response.map((entry) => ({ text: entry, command: false }));
      setHistory(prev => [...prev, trimmed, ...responseFormatted]);
    }
    setInput('');
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (terminalRef.current.scrollHeight > terminalRef.current.clientHeight && el) {
      requestAnimationFrame(() => {
        el.scrollIntoView({ behavior: 'smooth', block: 'end' });
      });
    }
  }, [input, history]);

  return (
    <div className="terminal-page">
      <motion.h2
        initial={{opacity: 0, y: 20}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 1}}
        className="section-title"
      >
        Terminal
      </motion.h2>
      <motion.p
        initial={{opacity: 0, y: 20}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 1}}
        className="section-subtext"
      >
        It's your chance to find out more about me. Type 'help' for more info, that's all you will get :).
      </motion.p>
      <div className={`terminal-window `} tabIndex={0} onClick={() => inputRef.current?.focus()} ref={terminalRef}>
        {!focused && (
          <div className="terminal-overlay">
            <div className="overlay-text">Click to focus</div>
          </div>
        )}
        <div className={`terminal-output ${!focused ? 'blurred' : ''}`}>
          {history.map((line, idx) => (
            <div key={idx} className="terminal-line">
              {line.command && <span className="typed-indent">{`${TERMINAL_START_CHARS}`}</span>}
              <span className="typed-text">{line.text}</span>
            </div>
          ))}
          <form onSubmit={handleCommand}>
            <div className="terminal-line">
              <span className="typed-indent">{`${TERMINAL_START_CHARS}`}</span>
              <span className="typed-text">{input}</span>
              <input
                ref={inputRef}
                className="terminal-input"
                value={input}
                onChange={e => setInput(e.target.value)}
                autoComplete="off"
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
              />
              <span className="cursor"/>
            </div>
          </form>
          <div className="scroll" ref={scrollRef}/>
        </div>
      </div>
    </div>
  );
}