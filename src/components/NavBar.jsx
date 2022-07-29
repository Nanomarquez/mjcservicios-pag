import React, { useState } from "react";
import "./navbar.css";
import { motion, AnimatePresence } from "framer-motion";
import {Link} from 'react-router-dom';

export default function NavBar() {
  const [navOpen, setNavOpen] = useState(false);

  const backdropVarients = {
    initial: {
      y: '-100vh'
    },
    animate: {
      y: '0vh' 
    },
    exit: {
      y: '-100vh',
      transition: {
        delay: 0.8
      }
    }
  };

  const linkVarientOne = {
    initial: {
      opacity: 0,
      x: 40,
      y: -40
    },
    animate: {
      opacity: 1,
      x: 0,
      y: 0,
      delay: '3000ms'
    },
    exit: {
      opacity: 0,
      x: -40
    }
  };

  const linkVarientTwo = {
    initial: {
      opacity: 0,
      x: -40,
      y: -40
    },
    animate: {
      opacity: 1,
      x: 0,
      y: 0
    },
    exit: {
      opacity: 0,
      x: 40
    }
  };

  const navContentVarient = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    },
    exit: {
      transition: {
        staggerChildren: 0.1,
      }
    }
  };

  return (
    <div className="navbar">
      <button
        onClick={() => setNavOpen((prev) => !prev)}
        className={`hamburger hamburger--vortex ${navOpen && "is-active"} z-[10000000000000000]`}
        type="button"
      >
        <span className="hamburger-box">
          <span className="hamburger-inner  "></span>
        </span>
      </button>

      <AnimatePresence>
        {navOpen && (
          <motion.div
            initial={"initial"}
            animate={"animate"}
            exit={"exit"}
            variants={backdropVarients}
            className="nav-backdrop z-[1000] bg-black/80"
          >
            <motion.div
              initial={"initial"}
              animate={"animate"}
              exit={"exit"}
              variants={navContentVarient}
              className="nav-content"
            >
            <Link to={'/'}>
              <motion.a onClick={()=> setNavOpen((prev) => !prev)} variants={linkVarientOne} >HOME</motion.a>
            </Link>
            <Link to={'/contacto'}>
              <motion.a onClick={()=> setNavOpen((prev) => !prev)} variants={linkVarientTwo}>CONTACTO</motion.a>
            </Link>
            <Link to={'/servicios'}>
              <motion.a onClick={()=> setNavOpen((prev) => !prev)} variants={linkVarientOne}>SERVICIOS</motion.a>
            </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}