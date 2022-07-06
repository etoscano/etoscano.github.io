import "./styles/main.scss";

import React , {useState} from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import Home from './pages/Home/Home.jsx'
import Contact from './pages/Contact/Contact.jsx';
import Footer from './modules/Footer/Footer.jsx';
import MyWork from './pages/MyWork/MyWork.jsx';
import Header from "./modules/Header/Header";

function App() {
  
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

  function Layout() {

    const [page, setPage] = useState('home');

    function setSelected(name) {
      setPage(name);
    }

    return (
      <>
        <Header page={page} setSelected={setSelected}></Header>
    
        <Outlet />
    
        <Footer setSelected={setSelected}></Footer>
      </>
    );
  }
}

export default App;
