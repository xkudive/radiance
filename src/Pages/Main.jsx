import React from "react";
import { motion } from "framer-motion";

import Hero from "../Components/Hero/Hero"
import Advantages from "../Components/Advantages/Advantages"
import Buy from "../Components/Buy/Buy"

import logo from "../images/mama.png";

export default function Main() {

    return (
        <>

          <Hero />
          <Advantages />
          <Buy />

          <motion.div 
                className="slideIn"
                initial={{top: "110vh"}}
                animate={{top: "110vh"}}
                exit={{top: "0%"}}
                transition={{duration: 0.8, ease: [0.27,0.94,0.48,1.0]}}
            >
                <motion.img 
                    initial={{opacity: 0}}
                    animate={{opacity: 0}}
                    exit={{opacity: 1}}
                    transition={{duration: 0.5, delay: 0.8, ease: [0.27,0.94,0.48,1.0]}}
                    src={logo} alt="" 
                ></motion.img>
            </motion.div>
            <motion.div 
                className="slideOut"
                initial={{top: "0%"}}
                animate={{top: "-100%"}}
                exit={{top: "-100%"}}
                transition={{duration: 0.8, delay: 0.5, ease: [0.27,0.94,0.48,1.0]}}
            >
                <motion.img 
                    initial={{opacity: 1}}
                    animate={{opacity: 0}}
                    exit={{opacity: 0}}
                    transition={{duration: 0.5, ease: [0.27,0.94,0.48,1.0]}}
                    src={logo} alt="" 
                ></motion.img>
          </motion.div>
    
        </> 
      );
}