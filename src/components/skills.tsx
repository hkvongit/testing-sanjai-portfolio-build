import '../styles/skills.css'

export const Skills = () =>{

    return(
        <div className="skillsContainer">
      <div className='skills_glass_box'>
        <section className='reveal'>
        <div>
          <h1>Skills</h1>
        </div>
        <div className='skills_glass_box_cards'>
          <div className="progress-chart-container ">
            <div className="progress-chart-card html">
              <div className="progress-chart-box">
                <div className="progress-chart-percent">
                  <svg>
                    <circle cx="70" cy="70" r="70"></circle>
                    <circle cx="70" cy="70" r="70"></circle>
                  </svg>
                  <div className="progress-chart-num">
                    <h2>80<span>%</span></h2>
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
                  <svg>
                    <circle cx="70" cy="70" r="70"></circle>
                    <circle cx="70" cy="70" r="70"></circle>
                  </svg>
                  <div className="progress-chart-num">
                    <h2>70<span>%</span></h2>
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
                  <svg>
                    <circle cx="70" cy="70" r="70"></circle>
                    <circle cx="70" cy="70" r="70"></circle>
                  </svg>
                  <div className="progress-chart-num">
                    <h2>90<span>%</span></h2>
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
                  <svg>
                    <circle cx="70" cy="70" r="70"></circle>
                    <circle cx="70" cy="70" r="70"></circle>
                  </svg>
                  <div className="progress-chart-num">
                    <h2>80<span>%</span></h2>
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
                  <svg>
                    <circle cx="70" cy="70" r="70"></circle>
                    <circle cx="70" cy="70" r="70"></circle>
                  </svg>
                  <div className="progress-chart-num">
                    <h2>95<span>%</span></h2>
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
                  <svg>
                    <circle cx="70" cy="70" r="70"></circle>
                    <circle cx="70" cy="70" r="70"></circle>
                  </svg>
                  <div className="progress-chart-num">
                    <h2>85<span>%</span></h2>
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
                  <svg>
                    <circle cx="70" cy="70" r="70"></circle>
                    <circle cx="70" cy="70" r="70"></circle>
                  </svg>
                  <div className="progress-chart-num">
                    <h2>60<span>%</span></h2>
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
                  <svg>
                    <circle cx="70" cy="70" r="70"></circle>
                    <circle cx="70" cy="70" r="70"></circle>
                  </svg>
                  <div className="progress-chart-num">
                    <h2>70<span>%</span></h2>
                  </div>
                </div>
                <h2 className="progress-chart-text">Git</h2>
              </div>
            </div>
          </div>
      </div>
      </section>
      </div>
    </div>
    )
}