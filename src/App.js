import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";

import "./body.css";

import Main from "./Pages/Main"
import Rust from "./Pages/Rust";

const App = () => {

  let location = useLocation();

  let [device, setDevice] = React.useState(true);
  // let [cursorPos, setCursorPos] = React.useState([500,500]);

  // React.useEffect(() => {
  //   function cursorPosCalc(e) {
  //     setCursorPos([e.clientX, e.clientY])
  //   }

  //   document.body.addEventListener("mousemove", cursorPosCalc)
  //   return () => document.body.removeEventListener("mousemove",cursorPosCalc)
  // }, []);

    React.useEffect(() => { 
        function deviceWidth() {
            let width = document.body.clientWidth;
            width > 860 ? setDevice(true) : setDevice(false)
        }
        deviceWidth()
        window.addEventListener("resize", deviceWidth)
        return () => document.body.removeEventListener("mousemove", deviceWidth)
    })

  return (
    device ? 
      <div>
        <Navbar />
          {/* <div class="background-radial-blur"></div>
          <div className="screen-box">
              <motion.div className="blob-box" animate={{x: cursorPos[0]-250, y: cursorPos[1]-250}}>
                <div className="blob"></div>
              </motion.div>
          </div> */}

        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route index element={<Main />} />
            <Route path="/rust" element={<Rust />} />
            <Route path="*" element={<Main />} />
          </Routes>
        </AnimatePresence>
        <Footer />
      </div>

    :

    <div className="mobile-device">
        <div className="mobile-text">
          <p>WHOOPS! IT LOOKS LIKE YOU'RE ON A MOBILE DEVICE. THE SITE IS DESIGNED TO WORK ITS MAGIC ONLY ON DESKTOP DEVICE, AT THIS POINT.</p>
          <p>NO HARD FEELINGS, JUST SWITCH OVER FOR BETTER EXPERIENCE.</p>
        </div>
    </div>
  )
}

export default App