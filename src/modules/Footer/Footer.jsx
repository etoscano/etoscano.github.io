import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

import Row from '../Row/Row.jsx';
import Column from '../Column/Column.jsx';
import Car2D from "../Car2D/Car2D";

function Footer({setPage}) {


return (
  // <Router>
    <footer className="footer">

      <div className='footer__quoteContainer'>
        <img className="footer__arrow" src="./arrow.svg" alt=""></img>
        <p className='footer__quote'>It’s not the destination. It's the journey.</p>
        <img className="footer__arrow" src="./arrow.svg" alt=""></img>
      </div>

      <Row extraClass={"footer__row"}>
        <Column size={1}  ></Column>
        
        <Column size={7}  >

           <div className='footer__wrapper'>
                <Link className={`footer__logoLink `}  to="/" onClick={() => setPage('home')} aria-label={"Go to homepage"}>
                    <img className="footer__logo" src="./ET.svg" alt="Eleonora Toscano logo"></img>
                </Link>

                <div className='footer__textWrapper'>
                    <h2 className='footer__title'>Eleonora Toscano</h2>
                    <p className='footer__paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac pla cerat rhoncus enim faucibus dui habitasse.</p>
                </div>
          </div>

          <nav className="footer__outerNav">
            <ul className="footer__outerList">     
                <li className={`footer__outerItem `}>
                  <a className={`footer__outerLink `}  href="https://github.com/etoscano/"  >
                  <img className="footer__socialIcon" src="./icon-github.svg" alt=""></img>                   
                    <span className='footer__linkText'>Github</span>
                    </a>
                </li>            
                <li className={`footer__outerItem `}>
                  <a className={`footer__outerLink `} href="https://www.linkedin.com/in/eleonora-toscano/" >
                  <img className="footer__socialIcon" src="./icon-linkedin.svg" alt=""></img>                   
                    <span className='footer__linkText'>LinkedIn</span>
                  </a>
                </li>
                <li className={`footer__outerItem `}>
                  <a className={`footer__outerLink  `} href="mailto:toscano.eleonora97@gmail.com" >
                  <img className="footer__socialIcon" src="./icon-email.svg" alt=""></img> 
                    <span className='footer__linkText'>Email</span>
                  </a>
                </li>               
            </ul>        
          </nav>

        </Column>
        
        <Column size={3}  >
        
        <h2 className='footer__innerNavTitle'>Browse</h2>
        <nav className="footer__nav">
            <ul className="footer__list">     
                <li className={`footer__item `}>
                <Link className={`footer__link `}  to="/" onClick={() => setPage('home')} >Home</Link>
                </li>            
                <li className={`footer__item `}>
                <Link className={`footer__link `} to="/my-work" onClick={() => setPage('my-work')}> My Work </Link>
                </li>
                <li className={`footer__item `}>
                <Link className={`footer__link `} to="/about" onClick={() => setPage('about')}> About </Link>
                </li>     
                <li className={`footer__item `}>
                <Link className={`footer__link `} to="/contact" onClick={() => setPage('contact')}> Contact </Link>
                </li>           
            </ul>        
        </nav>

        </Column>
        <Column size={1}  ></Column>
      </Row>

      {/* <Car2D></Car2D> */}

      <p className='footer__bottomParagraph'>Eleonora Toscano © 2022</p>
    </footer>
);
}

// Footer.propTypes = {
//   page: PropTypes.func.isRequired,
// };

// Footer.defaultProps = {
//   page: "home",
// };

export default Footer;