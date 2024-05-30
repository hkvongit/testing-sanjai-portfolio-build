import '../styles/skills.css'
import { useEffect } from 'react';
import javascriptLogo from '../assets/images/javascript-logo-png.webp'
import HTML_Logo from '../assets/images/html-5-icon.png'
import CSS_logo from '../assets/images/CSS3_logo.svg.png'
import node_logo from '../assets/images/Node.js_logo.svg.png'
import react_logo from '../assets/images/React-icon.svg.png'
import react_native_logo from '../assets/images/react-native-logo.svg'
import typescript_logo from '../assets/images/typescript.svg'
import git_logo from '../assets/images/Git_icon.svg.png'

export const Skills = () =>{

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

    return(
        <div className="skillsContainer">
      <div className='skills_glass_box'>
        <div>
          <h1>Skills</h1>
        </div>
        <div className='skills_glass_box_cards'>
          <div className="progress-chart-container ">
            <div className="progress-chart-card html">
              <div className="progress-chart-box">
                <div className="progress-chart-percent">
                  {/* <svg>
                    <circle cx="70" cy="70" r="70"></circle>
                    <circle cx="70" cy="70" r="70"></circle>
                  </svg> */}
                  <div className="progress-chart-num">
                    <img src={HTML_Logo} style={{width:130}}></img>
                  </div>
                </div>
                <h2 className="progress-chart-text">Html</h2>
              </div>
            </div>
          </div>
          <div className="progress-chart-container">
            <div className="progress-chart-card css">
              <div className="progress-chart-box">
                <div className="progress-chart-percent">
                  {/* <svg>
                    <circle cx="70" cy="70" r="70"></circle>
                    <circle cx="70" cy="70" r="70"></circle>
                  </svg> */}
                  <div className="progress-chart-num">
                  <img src={CSS_logo} style={{width:130}}></img>
                  </div>
                </div>
                <h2 className="progress-chart-text">CSS</h2>
              </div>
            </div>
          </div>
          <div className="progress-chart-container ">
            <div className="progress-chart-card javascript">
              <div className="progress-chart-box">
                <div className="progress-chart-percent">
                  {/* <svg>
                    <circle cx="70" cy="70" r="70"></circle>
                    <circle cx="70" cy="70" r="70"></circle>
                  </svg> */}
                  <div className="progress-chart-num">
                  <img src={javascriptLogo} style={{width:130}}></img>
                  </div>
                </div>
                <h2 className="progress-chart-text">Javascript</h2>
              </div>
            </div>
          </div>
          <div className="progress-chart-container ">
            <div className="progress-chart-card react">
              <div className="progress-chart-box">
                <div className="progress-chart-percent">
                  {/* <svg>
                    <circle cx="70" cy="70" r="70"></circle>
                    <circle cx="70" cy="70" r="70"></circle>
                  </svg> */}
                  <div className="progress-chart-num">
                  <img src={react_logo} style={{width:130}}></img>
                  </div>
                </div>
                <h2 className="progress-chart-text">Reactjs</h2>
              </div>
            </div>
          </div>
          <div className="progress-chart-container ">
            <div className="progress-chart-card node">
              <div className="progress-chart-box">
                <div className="progress-chart-percent">
                  {/* <svg>
                    <circle cx="70" cy="70" r="70"></circle>
                    <circle cx="70" cy="70" r="70"></circle>
                  </svg> */}
                  <div className="progress-chart-num">
                  <img src={node_logo} style={{width:130}}></img>
                  </div>
                </div>
                <h2 className="progress-chart-text">Nodejs</h2>
              </div>
            </div>
          </div>
          <div className="progress-chart-container ">
            <div className="progress-chart-card reactnative">
              <div className="progress-chart-box">
                <div className="progress-chart-percent">
                  {/* <svg>
                    <circle cx="70" cy="70" r="70"></circle>
                    <circle cx="70" cy="70" r="70"></circle>
                  </svg> */}
                  <div className="progress-chart-num">
                  <img src={react_native_logo} style={{width:130}}></img>
                  </div>
                </div>
                <h2 className="progress-chart-text">React Native</h2>
              </div>
            </div>
          </div>
          <div className="progress-chart-container ">
            <div className="progress-chart-card typescript">
              <div className="progress-chart-box">
                <div className="progress-chart-percent">
                  {/* <svg>
                    <circle cx="70" cy="70" r="70"></circle>
                    <circle cx="70" cy="70" r="70"></circle>
                  </svg> */}
                  <div className="progress-chart-num">
                  <img src={typescript_logo} style={{width:130}}></img>
                  </div>
                </div>
                <h2 className="progress-chart-text">Typescript</h2>
              </div>
            </div>
          </div>
          <div className="progress-chart-container ">
            <div className="progress-chart-card git">
              <div className="progress-chart-box">
                <div className="progress-chart-percent">
                  {/* <svg>
                    <circle cx="70" cy="70" r="70"></circle>
                    <circle cx="70" cy="70" r="70"></circle>
                  </svg> */}
                  <div className="progress-chart-num">
                  <img src={git_logo} style={{width:130}}></img>
                  </div>
                </div>
                <h2 className="progress-chart-text">Git</h2>
              </div>
            </div>
          </div>
      </div>
      </div>
    </div>
    )
}