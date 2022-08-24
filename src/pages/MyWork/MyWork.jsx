import React , {useEffect, useRef} from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Row from '../../modules/Row/Row.jsx';
import Column from '../../modules/Column/Column.jsx';

import data from "../../Data";

function Card({title, date, tech, imgs, path}){

  const projectsPath = '/my-work'

    return(

      <Link className={`mywork__project`} to={`${projectsPath}/${path}`} >
        {/* <a href="#link" className='mywork__project'> */}
            <div  className='mywork__container'>
                <div  className='mywork__innerContainer'>
                    <h2  className='mywork__projectTitle'>{title}</h2>
                    <img  className='mywork__img' src={`${imgs[0]}`} alt=""></img>
                </div>
            </div>

            <div className='mywork__info'>
                <p  className='mywork__year'>{date}</p>
                <div className='mywork__techs'>
                    <p  className='mywork__tech'>{tech}</p>
                    <p  className='mywork__tech'>{imgs}</p>
                </div>
            </div>
        {/* </a> */}
        </Link>

    );
  }

function ProjectsList({ source }) {
  return (
    <>
      {source ? (
        <ul className="projects__list">
          {[...source].reverse().map((listitem,index) => (
            <li className="projects__section" key={index}>
                <Card
                title={listitem.title}
                date={listitem.date} 
                tech={listitem.tech}
                imgs={listitem.imgs}
                path={listitem.path}
                ></Card>
                {listitem.path}
            </li>
          ))}
        </ul>
      ) : null}
    </>
  );
}

function MyWork({  }) {


  return (
    <>

     <main className='mywork__main'>

        <Row extraClass="mywork__row">
            <Column size={2}  ></Column>
            
            <Column size={8}  >

            <div className='container' >
                 <div className='cards'>

                    <div className='mywork__wrapper' >
                        <h1 className='mywork__title'>My Work</h1>
                        <ProjectsList source={data.projects.list} />
                    </div>
                </div>
            </div>
           
            <div className='container2'>
            </div>

            </Column>

            <Column size={2}  ></Column>
          </Row>

     </main>

      </>
  );


  }


export default MyWork;