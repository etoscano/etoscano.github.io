import React , {useState} from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Routes, Route, Link, Outlet } from "react-router-dom";

import { Button } from '../Button/Button.jsx';
import Row from '../Row/Row.jsx';
import Column from '../Column/Column.jsx';

import Home from '../../pages/Home/Home.jsx';
import Contact from '../../pages/Contact/Contact.jsx';
import Footer from '../Footer/Footer.jsx';
import MyWork from '../../pages/MyWork/MyWork.jsx';

function Header({  }) {

  const [page, setPage] = useState('home');

  function setSelected(name) {
    setPage(name);
  }

  function Layout() {
    return (
      <>
      <header className="header">
        <Row extraClass={"header__row"}>
          <Column size={1}  ></Column>
          
          <Column size={1}  >
  
            <Link className={`header__logoLink `}  to="/" onClick={() => setSelected('home')} aria-label={"Go to homepage"}>
              <img className="header__logo" src="./ET.svg" alt="Eleonora Toscano logo"></img>
            </Link>
  
          </Column>
          
          <Column size={9}  >
          
            <nav className="header__nav">
              <ul className="header__list">     
                  <li className={`header__item `}>
                    <Link className={`header__link ${page === "home" ? "header__link--active" : ""} `}  to="/" onClick={() => setSelected('home')} >Home</Link>
                  </li>            
                  <li className={`header__item `}>
                    <Link className={`header__link ${ page === "my-work" ? "header__link--active" : ""} `} to="/my-work" onClick={() => setSelected('my-work')}> My Work </Link>
                  </li>
                  <li className={`header__item `}>
                    <Link className={`header__link ${page ===  "about" ? "header__link--active" : ""} `} to="/about" onClick={() => setSelected('about')}> About </Link>
                  </li>     
                  <li className={`header__item `}>
                    <Link className={`header__link ${page ===  "contact" ? "header__link--active" : ""} `} to="/contact" onClick={() => setSelected('contact')}> Contact </Link>
                  </li>           
              </ul>        
            </nav>
  
          </Column>
          <Column size={1}  ></Column>
        </Row>
      </header>
  
      <Outlet />
  
      <Footer></Footer>
      </>
    );
  }

return (
  <Router>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/my-work" element={<MyWork />} />
        <Route path="/about" />
        <Route path="/contact" element={<Contact />}/>
        {/* <Route path="*" element={<ErrorPage func={setSelected}/>} /> */}
      </Route>
    </Routes>
  </Router>
);
}



// Header.propTypes = {
//   page: PropTypes.func.isRequired,
// };

// Header.defaultProps = {
//   page: "home",
// };

export default Header;