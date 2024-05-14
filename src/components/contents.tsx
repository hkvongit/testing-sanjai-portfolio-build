import {useEffect, useRef} from 'react'
import { BrowserRouter as Router} from 'react-router-dom';
import '../styles/contents.css'
import { DownloadIcon, GithubIcon, LucideLinkedin, MailCheckIcon } from 'lucide-react';


function consoleText(words:any, id:any) {
  const target = document.getElementById(id);

  if (!target) return; 

  let letterCount = 0;
  let wordIndex = 0;

  const intervalId = setInterval(() => {
    const currentWord = words[wordIndex];

    if (letterCount <= currentWord.length) {
      target.innerHTML = currentWord.substring(0, letterCount);
      letterCount++;
    } else {
      wordIndex = (wordIndex + 1) % words.length;
      letterCount = 0; // Reset letter count for the new word
    }
  }, 220);

  return intervalId; // Return intervalId for cleanup
}

export const Content = () => {

  const consoleRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const words = ['Web Developer', 'Software Engineer'];

    const intervalId = consoleText(words, 'text'); // Call consoleText with parameters

    return () => {
      clearInterval(intervalId); // Cleanup interval on component unmount
    };
  }, []);
 
  return (
    <Router>
      <div className="contentContainer">
        <div className="animationWrapper">
          <div className="animationContainer">
            <div>Hi,</div>
            <div>
              <span>I am Sanjai Samson</span>
              </div>
          </div>
          <div className='console-container'>
            <span id='text' ref={consoleRef}></span>
            <div className='console-underscore' id='console'>&#95;</div>
          </div>
          <div className='content_glass_box'>
          <h2>Welcome to My Portfolio</h2>
          <p>Hello, I'm a web developer and a software Engineer specializing in creating modern and responsive websites and Applications.</p>
          <h3>If you are intrested Let's work together</h3>
          <div className='button_div'>
          <button>Resume <DownloadIcon height='20px'/></button>
          <button><LucideLinkedin/> <GithubIcon/> <MailCheckIcon/> </button>
          </div>
          </div>
        </div>
      </div>
    </Router>
  )
}
