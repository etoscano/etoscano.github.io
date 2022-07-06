import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

import Row from '../Row/Row.jsx';
import Column from '../Column/Column.jsx';


function Header({setPage, page}) {

  return (
    <>
      <header className="header">
        <Row extraClass={"header__row"}>
          <Column size={1}  ></Column>
          
          <Column size={3}  >
  
            <Link className={`header__logoLink `}  to="/" onClick={() => setPage('home')} aria-label={"Go to homepage"}>
              <img className="header__logo" src="./ET.svg" alt="Eleonora Toscano logo"></img>
              <span className='header__logoText'>Eleonora Toscano</span>
            </Link>
  
          </Column>
          
          <Column size={7}  >
          
            <nav className="header__nav">
              <ul className="header__list">     
                  <li className={`header__item `}>
                    <Link className={`header__link ${page === "home" ? "header__link--active" : ""} `}  to="/" onClick={() => setPage('home')} >Home</Link>
                  </li>            
                  <li className={`header__item `}>
                    <Link className={`header__link ${ page === "my-work" ? "header__link--active" : ""} `} to="/my-work" onClick={() => setPage('my-work')}> My Work </Link>
                  </li>
                  <li className={`header__item `}>
                    <Link className={`header__link ${page ===  "about" ? "header__link--active" : ""} `} to="/about" onClick={() => setPage('about')}> About </Link>
                  </li>     
                  <li className={`header__item `}>
                    <Link className={`header__link ${page ===  "contact" ? "header__link--active" : ""} `} to="/contact" onClick={() => setPage('contact')}> Contact </Link>
                  </li>           
              </ul>        
            </nav>
  
          </Column>
          <Column size={1}  ></Column>
        </Row>
      </header>
    </>
  );

}



// Header.propTypes = {
//   page: PropTypes.func.isRequired,
// };

// Header.defaultProps = {
//   page: "home",
// };

export default Header;