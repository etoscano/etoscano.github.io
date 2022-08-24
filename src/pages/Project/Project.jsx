import React , {useEffect, useRef} from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Row from '../../modules/Row/Row.jsx';
import Column from '../../modules/Column/Column.jsx';
import { Splide, SplideSlide } from '@splidejs/react-splide';

import data from "../../Data";

function Project({id}){

    const project = data.projects.list.find(obj => obj.path === id);


    return(

        <main className='project__main'>

        <Row extraClass="project__row">
            <Column size={2}  ></Column>
            
            <Column size={8}  >

            <h1 className='project__title'>{project.title}</h1>

            <p className='project__desc'>{project.desc}</p>

            {project.githubLink && 
            <a className={`project__githubLink  `} href={`${project.githubLink}`} >
            <img className="project__socialIcon" src="/icon-github.svg" alt=""></img> 
              <span className='project__linkText'><strong>{project.title}</strong> on Github</span>
            </a>
            }

            <Splide aria-label="My Favorite Images" className='project__slider'
            options={ {
                type   : 'loop',
                drag   : 'free',
                snap   : true,
                perPage: 1,
              } }>
                
            {[...project.imgs].map((img, index) => (
                <SplideSlide key={index}>
                    <img  className='project__img' src={`/${img}`} alt=""/>
                </SplideSlide>
            ))}

            </Splide>
            

            </Column>

            <Column size={2}  ></Column>
          </Row>

     </main>

        

    );
  }

  export default Project;