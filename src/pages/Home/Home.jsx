import React from 'react';
import { Link } from "react-router-dom";

import Row from '../../modules/Row/Row.jsx';
import Column from '../../modules/Column/Column.jsx';
// import Experience from '../../modules/Experience/Experience.jsx';
import Featured from '../../modules/Featured/Featured.jsx';
import Phone from '../../modules/Phone/Phone.jsx';


function Home() {

  return (
    <>

     <main className='home__main'>

      {/* <Experience></Experience> */}

        <Row extraClass="home__row">
            <Column size={1}  ></Column>
            
            <Column size={10}  >
              <div className='home__section1'>
                <div className='home__textWrapper'>

                  <h1 className='home__title'>Hello! <br></br>I'm Eleonora Toscano.</h1>
                  <p className='home__paragraph'>I'm a <b>developer</b> and <b>interaction designer</b> specialized in user experience.</p>

                  <Link className='home__link' to="/contact"> Contact me
                    <img className="home__icon" src="/send.svg" alt=""></img>
                  </Link>
                </div>

                <div className='home__phoneWrapper'>
                  <Phone></Phone>
                </div>
              </div>

              
              {/* <div className='home__section2'>
               <h2 className='home__title2'>Featured Projects</h2>
               <Featured></Featured>
              </div> */}
                
            </Column>

            <Column size={1}  ></Column>
          </Row>

     </main>

      </>
  );
};


export default Home;