import React from "react";

import "./body.css"

import Navbar from "./Components/Navbar/Navbar"
import Hero from "./Components/Hero/Hero"
import Advantages from "./Components/Advantages/Advantages";
import Buy from "./Components/Buy/Buy";
import Footer from "./Components/Footer/Footer";


function App() {

  let [cursorPos, setCursorPos] = React.useState([500,500]);
  let [device, setDevice] = React.useState(0);

  React.useEffect(() => {
    function deviceWidth() {
      setDevice(document.body.clientWidth)
    }
    deviceWidth()
    window.addEventListener("resize", deviceWidth)
    return () => document.body.removeEventListener("mousemove", deviceWidth)
  })

  React.useEffect(() => {
    function cursorPosCalc(e) {
      setCursorPos([e.clientX, e.clientY])
    }

    document.body.addEventListener("mousemove", cursorPosCalc)
    return () => document.body.removeEventListener("mousemove",cursorPosCalc)
  }, [])


  return (
    device > 860 
    ? 
    <>
      <div className="background-radial-blur"></div>
      
      <div className="screen-box">
        <div className="blob-box" style={{transform: `translate(${cursorPos[0]-250}px, ${cursorPos[1]-250}px)`}}>
          <div className="blob"></div>
        </div>
      </div>

      <Navbar />
      <Hero />
      <Advantages />
      <Buy />
      <Footer />

    </> 
    : 
    <div className="mobile-device">
      <div className="mobile-text">
        <p>WHOOPS! IT LOOKS LIKE YOU'RE ON A MOBILE DEVICE. THE SITE IS DESIGNED TO WORK ITS MAGIC ONLY ON DESKTOP DEVICE, AT THIS POINT.</p>
        <p>NO HARD FEELINGS, JUST SWITCH OVER FOR BETTER EXPERIENCE.</p>
      </div>
    </div>
  );
}

export default App;
