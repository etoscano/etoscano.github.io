import React , {useState} from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Header from '../../modules/Header/Header.jsx';
import Footer from '../../modules/Footer/Footer.jsx';
import Row from '../../modules/Row/Row.jsx';
import Column from '../../modules/Column/Column.jsx';

function Home({  }) {
  const [user, setUser] = React.useState();

  return (
    <>
      <Header
        user={user}
        onLogin={() => setUser({ name: 'Jane Doe' })}
        onLogout={() => setUser(undefined)}
        onCreateAccount={() => setUser({ name: 'Jane Doe' })}
      />

     <main className='home__main'>

     <Row extraClass="home__row">
        <Column size={1}  ></Column>
        
        <Column size={5}  >
          <h1 className='home__title'>I build amazing websites focused on experience</h1>
          <p className='home__paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac placerat rhoncus enim faucibus dui hesf fesffabi.</p>
          <Router>
          <Link className='home__link' to="/contact"> Contact me
           <img className="home__icon" src="./chat.svg" alt=""></img>
          </Link>
             
          </Router>
        </Column>

        <Column size={5}  ></Column>
        <Column size={1}  ></Column>
        </Row>

     </main>

      <Footer></Footer>
      </>
  );
};


export default Home;