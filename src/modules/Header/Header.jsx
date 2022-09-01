import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

import Row from '../Row/Row.jsx';
import Column from '../Column/Column.jsx';


function Header({page}) {

  return (
    <>
      <header className="header">
        <Row extraClass={"header__row"}>
          <Column size={1}  extraClass="header__side"></Column>
          
          <Column size={10} extraClass={"header__wrapper"} >
  
            <Link className={`header__logoLink `}  to="/" aria-label={"Go to homepage"}>
              <img className="header__logo" src="/ET.svg" alt="Eleonora Toscano logo"></img>
              <span className='header__logoText'>Eleonora Toscano</span>
            </Link>
          
            <nav className="header__nav">
              <ul className="header__list">     
                  <li className={`header__item `}>
                    <Link className={`header__link ${page === "/" ? "header__link--active" : ""} `}  to="/" >Home</Link>
                  </li>            
                  <li className={`header__item `}>
                    <Link className={`header__link ${ page === "/my-work" ? "header__link--active" : ""} `} to="/my-work" > My Work </Link>
                  </li>
                  {/* <li className={`header__item `}>
                    <Link className={`header__link ${page ===  "/about" ? "header__link--active" : ""} `} to="/about" > About </Link>
                  </li>      */}
                  <li className={`header__item `}>
                    <Link className={`header__link ${page ===  "/contact" ? "header__link--active" : ""} `} to="/contact" > Contact </Link>
                  </li>           
              </ul>        
            </nav>
  
          </Column>
          <Column size={1}  extraClass="header__side" ></Column>
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