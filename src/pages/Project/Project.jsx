import React , {useEffect, useRef} from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Row from '../../modules/Row/Row.jsx';
import Column from '../../modules/Column/Column.jsx';
import { Splide, SplideSlide } from '@splidejs/react-splide';

import parse from 'html-react-parser';
import data from "../../Data";

function Parser(props){
    return parse(props.toParse);
}

function Project({id}){

    const project = data.projects.list.find(obj => obj.path === id);

    return(

        <main className='project__main'>

        <Row extraClass="project__row">
            <Column size={2}  ></Column>
            
            <Column size={8}  >

            <h1 className='project__title'>{project.title}</h1>

            <div className='project__desc'><Parser toParse={project.desc}/></div>
            

            {project.githubLink && 
            <a className={`project__githubLink  `} href={`${project.githubLink}`} >
            <img className="project__socialIcon" src="/icon-github.svg" alt=""></img> 
              <span className='project__linkText'><strong>{project.title}</strong> on Github</span>
            </a>
            }

            <Splide aria-label="My Favorite Images" className='project__slider'
            options={ {
                // type   : 'loop',
                drag   : 'free',
                snap   : true,
                // height   : '10rem',
                // focus    : 'center',
                // fixedWidth : '600px',
                // fixedHeight: '300px',
                // gap        : '1rem',
                // autoWidth: true,
              } }>
                
            {[...project.imgs].map((img, index) => (
                <SplideSlide key={index}>
                    <figure className='project__fig'>
                      <img className='project__img' src={`/${img.path}`} alt=""/>
                      <figcaption className='project__caption'>{img.caption}</figcaption>
                    </figure>
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