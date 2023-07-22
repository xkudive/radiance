import React from "react";
import { motion } from "framer-motion";

import Buy from "../Components/Buy/Buy"
import HeroRust from "../ComponentsRust/HeroRust/HeroRust";
import FeaturesRust from "../ComponentsRust/FeaturesRust/FeaturesRust";

import logo from "../images/mama.png";

export default function Rust() {  
    let [cursorPos, setCursorPos] = React.useState([500,500]);
    let [rerenderBuy, setRerenderBuy] = React.useState(0);

    React.useEffect(() => {
        function cursorPosCalc(e) {
        setCursorPos([e.clientX, e.clientY])
        }

        document.body.addEventListener("mousemove", cursorPosCalc)
        return () => document.body.removeEventListener("mousemove",cursorPosCalc)
    });

    return (
        <>


            <div className="background-radial-blur"></div>
          
            <div className="screen-box">
                <div className="blob-box" style={{transform: `translate(${cursorPos[0]-250}px, ${cursorPos[1]-250}px)`}}>
                <div className="blob"></div>
                </div>
            </div>

            <HeroRust />
            <FeaturesRust rerenderValue={() => setRerenderBuy((rerenderBuy) => rerenderBuy + 1)} />
            <Buy newRender={rerenderBuy}/>
            
            <motion.div 
                className="slideIn"
                initial={{top: "100vh"}}
                animate={{top: "100vh"}}
                exit={{top: "0vh"}}
                transition={{duration: 0.8, ease: [0.27,0.94,0.48,1.01]}}
            >
                <motion.img 
                    initial={{opacity: 0}}
                    animate={{opacity: 0}}
                    exit={{opacity: 1}}
                    transition={{duration: 0.5, delay: 0.5, ease: [0.27,0.94,0.48,1.01]}}
                    src={logo} alt="" 
                ></motion.img>
            </motion.div>
            <motion.div 
                className="slideOut"
                initial={{top: "0vh"}}
                animate={{top: "-100vh"}}
                exit={{top: "-100vh"}}
                transition={{duration: 0.8, delay: 0.5, ease: [0.27,0.94,0.48,1.01]}}
            >
                <motion.img 
                    initial={{opacity: 1}}
                    animate={{opacity: 0}}
                    exit={{opacity: 0}}
                    transition={{duration: 0.5, ease: [0.27,0.94,0.48,1.01]}}
                    src={logo} alt="" 
                ></motion.img>
          </motion.div>
        </>
    )
}