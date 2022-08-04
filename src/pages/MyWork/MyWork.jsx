import React , {useEffect, useRef} from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Row from '../../modules/Row/Row.jsx';
import Column from '../../modules/Column/Column.jsx';

import data from "../../Data";

function Card({title, date, tech1, tech2}){
    return(

        <div  className='mywork__project'>
            <div  className='mywork__container'>
                <div  className='mywork__innerContainer'>
                    <h2  className='mywork__projectTitle'>{title}</h2>
                    <img  className='mywork__img' src="./project_1.png" alt=""></img>
                </div>
            </div>

            <div className='mywork__info'>
                <p  className='mywork__year'>{date}</p>
                <div className='mywork__techs'>
                    <p  className='mywork__tech'>{tech1}</p>
                    <p  className='mywork__tech'>{tech2}</p>
                </div>
            </div>
        </div>

    );
  }

function ProjectsList({ source }) {
  return (
    <>
      {source ? (
        <ul className="projects__list">
          {[...source].reverse().map((listitem) => (
            <li className="projects__section" key={listitem.index}>
                <Card title={listitem.title} date={listitem.date} tech1={listitem.tech1} tech2={listitem.tech2}></Card>
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