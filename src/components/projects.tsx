import '../styles/projects.css'
import Card from '../components/projectCard'
import {BrowserRouter as Router } from 'react-router-dom';
import { useEffect } from 'react';

export const Projects = () =>{

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

    const projectCardData = [
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: 'https://t4.ftcdn.net/jpg/04/19/26/97/360_F_419269782_9LsP3TQndMVnZ2j3ZhTPhMjaqQpFAth9.jpg',
        },
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: 'https://t4.ftcdn.net/jpg/04/19/26/97/360_F_419269782_9LsP3TQndMVnZ2j3ZhTPhMjaqQpFAth9.jpg',
        },
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: 'https://t4.ftcdn.net/jpg/04/19/26/97/360_F_419269782_9LsP3TQndMVnZ2j3ZhTPhMjaqQpFAth9.jpg',
        },
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: 'https://t4.ftcdn.net/jpg/04/19/26/97/360_F_419269782_9LsP3TQndMVnZ2j3ZhTPhMjaqQpFAth9.jpg',
        },
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: 'https://t4.ftcdn.net/jpg/04/19/26/97/360_F_419269782_9LsP3TQndMVnZ2j3ZhTPhMjaqQpFAth9.jpg',
        },
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: 'https://t4.ftcdn.net/jpg/04/19/26/97/360_F_419269782_9LsP3TQndMVnZ2j3ZhTPhMjaqQpFAth9.jpg',
        },
      ];

    return(
        <div className="projectsContainer">
            <div className="projects-card-glass-box">
                <div>
                    <h1>Projects</h1>
                </div>
                <div className='cards'>
                <div className="cardbody">
                    {projectCardData.map((card, index) => (
                    <div>
                    <Card 
                    key={index} title={card.title} imgUrl={card.imgUrl} description={card.description} />
                    </div>
                    ))}
                </div>
                </div>
          </div>
    </div>
    )
}