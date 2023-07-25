import React from "react";
import { motion } from "framer-motion";

import BuyRust from "../ComponentsRust/BuyRust/BuyRust"
import HeroRust from "../ComponentsRust/HeroRust/HeroRust";
import MediaRust from "../ComponentsRust/MediaRust/MediaRust";
import FeaturesRust from "../ComponentsRust/FeaturesRust/FeaturesRust";


import logo from "../images/mama.png";

export default function Rust() {

    let [rerenderBuy, setRerenderBuy] = React.useState(0);

    return (
        <div className="rustPage">
            <HeroRust />
            <MediaRust />
            <FeaturesRust rerenderValue={() => setRerenderBuy((rerenderBuy) => rerenderBuy + 1)} />
            <BuyRust newRender={rerenderBuy}/>
            
            <motion.div 
                className="slideIn"
                initial={{top: "100%"}}
                animate={{top: "100%"}}
                exit={{top: "0%"}}
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
                initial={{top: "0%"}}
                animate={{top: "-100%"}}
                exit={{top: "-100%"}}
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
        </div>
    )
}