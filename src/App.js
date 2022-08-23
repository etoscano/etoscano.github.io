import "./styles/main.scss";

import React , {useEffect, useState} from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet, useLocation } from "react-router-dom";
import Home from './pages/Home/Home.jsx'
import Contact from './pages/Contact/Contact.jsx';
import Footer from './modules/Footer/Footer.jsx';
import MyWork from './pages/MyWork/MyWork.jsx';
import Header from "./modules/Header/Header";
import { AnimatePresence, motion } from "framer-motion";

function App() {
  
  return (
    <Router>
      <AnimatedRoutes />
    </Router>
  );

  function AnimatedRoutes() {
    const location = useLocation();
  
    return (
      <AnimatePresence exitBeforeEnter>
        <Routes key={location.pathname} location={location}>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/my-work" element={<MyWork />} />
            <Route path="/about" />
            <Route path="/contact" element={<Contact />}/>
            {/* <Route path="*" element={<ErrorPage func={setSelected}/>} /> */}
          </Route>
        </Routes>
      </AnimatePresence>
    );
  }


  function Layout() {
    const location = useLocation()
    // ...
    useEffect(() => {
    }, [location])

    return (
      <>
        {/* <motion.div
          className="framerMotion__header"
          initial={{ opacity: 0, y: "-100px" }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        > */}
        <Header page={location.pathname} ></Header>
        {/* </motion.div> */}
        <motion.div
          className="framerMotion__content"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Outlet />
        </motion.div>

        <Footer></Footer>
      </>
    );
  }
}

export default App;
