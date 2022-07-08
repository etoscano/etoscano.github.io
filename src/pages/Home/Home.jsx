import React from 'react';
import { Link } from "react-router-dom";

import Row from '../../modules/Row/Row.jsx';
import Column from '../../modules/Column/Column.jsx';
import Experience from '../../modules/Experience/Experience.jsx';


function Home() {

  return (
    <>

     <main className='home__main'>

      <Experience></Experience>

        <Row extraClass="home__row">
            <Column size={1}  ></Column>
            
            <Column size={5}  >
              <h1 className='home__title'>I build amazing websites focused on experience</h1>
              <p className='home__paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac placerat rhoncus enim faucibus dui hesf fesffabi.</p>

              <Link className='home__link' to="/contact"> Contact me
              <img className="home__icon" src="./send.svg" alt=""></img>
              </Link>
                
            </Column>

            <Column size={5}  ></Column>
            <Column size={1}  ></Column>
          </Row>

     </main>

      </>
  );
};


export default Home;