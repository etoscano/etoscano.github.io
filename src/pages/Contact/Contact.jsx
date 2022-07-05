import React , {useState} from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Row from '../../modules/Row/Row.jsx';
import Column from '../../modules/Column/Column.jsx';

function Contact({  }) {
  const [user, setUser] = React.useState();

  return (
    <>

     <main className='contact__main'>

        <Row extraClass="contact__row">
            <Column size={3}  ></Column>
            
            <Column size={6}  >
              <h1 className='contact__title'>Contact</h1>
              <p className='contact__paragraph'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper netus nam consequat 
              </p>

              <nav className="contact__outerNav">
                <ul className="contact__outerList">     
                    <li className={`contact__outerItem `}>
                      <a className={`contact__outerLink `}  href="https://github.com/etoscano/"  >
                      <img className="contact__socialIcon" src="./icon-github.svg" alt=""></img>                   
                        Github
                        </a>
                    </li>            
                    <li className={`contact__outerItem `}>
                      <a className={`contact__outerLink `} href="https://www.linkedin.com/in/eleonora-toscano/" >
                      <img className="contact__socialIcon" src="./icon-linkedin.svg" alt=""></img>                   
                        LinkedIn
                      </a>
                    </li>
                    <li className={`contact__outerItem `}>
                      <a className={`contact__outerLink  `} href="mailto:toscano.eleonora97@gmail.com" >
                      <img className="contact__socialIcon" src="./icon-email.svg" alt=""></img> 
                        Email
                      </a>
                    </li>               
                </ul>        
              </nav>

            </Column>

            <Column size={3}  ></Column>
          </Row>

     </main>

      </>
  );
};


export default Contact;