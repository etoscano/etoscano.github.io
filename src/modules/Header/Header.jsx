import React , {useState} from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import { Button } from '../Button/Button.jsx';
import Row from '../Row/Row.jsx';
import Column from '../Column/Column.jsx';

function Header({  }) {

const [page, setPage] = useState('home');

function setSelected(name) {
  setPage(name);
}

return (
  <Router>
    <header className="header">
      <Row extraClass={"header__row"}>
        <Column size={1}  ></Column>
        <Column size={1}  >
          <img className="header__logo" src="./ET.svg" alt="Eleonora Toscano logo"></img>
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

    <Routes>
      {/* <Route path="/" element={<Home />} /> */}
      <Route path="/" />
      <Route path="/my-work"  />
      <Route path="/about" />
      <Route path="/contact" />
      {/* <Route path="*" element={<ErrorPage func={setSelected}/>} /> */}
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