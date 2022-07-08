import React , {useEffect, useRef} from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Row from '../../modules/Row/Row.jsx';
import Column from '../../modules/Column/Column.jsx';

import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

function MyWork({  }) {

//     const tl = useRef();

//   useEffect(() => {
//     // gsap.to(all(".mywork__wrapper"), { rotation: "+=360" });

//     tl.current = gsap.timeline()
//     .to(".mywork__wrapper", {
//       rotate: 360,
//       stagger:1.5
//     })
// ;

//   }, []);

  return (
    <>

     <main className='mywork__main'>

        <Row extraClass="mywork__row">
            <Column size={2}  ></Column>
            
            <Column size={8}  >

            <div className='container' >
                 <div className='cards'>
                    <Card ></Card>
                    <Card ></Card>
                    <Card ></Card>
                    <Card ></Card>
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


  function Card(){
    return(
        <div className='mywork__wrapper' >
        <h1 className='mywork__title'>My Work</h1>
        
        <div  className='mywork__project'>
            <div  className='mywork__container'>
                <div  className='mywork__innerContainer'>
                    <h2  className='mywork__projectTitle'>Project</h2>
                    <img  className='mywork__img' src="./project_1.png" alt=""></img>
                </div>
            </div>

            <div className='mywork__info'>
                <p  className='mywork__year'>2021</p>
                <div className='mywork__techs'>
                    <p  className='mywork__tech'>ThreeJS</p>
                    <p  className='mywork__tech'>HTML/CSS</p>
                </div>
            </div>
        </div>
    </div>
    );
  }
};


export default MyWork;