import React from "react";
import { motion } from "framer-motion"

import Backdrop from "./Backdrop";
import "./Modal.scss"

export default function Modal({handleClick, children}) {

    const dropIn = {
        hidden: {
            translateY: "-256px",
            transition: {
                duration: 0.1,
                type: "spring",
                damping: 100,
                stiffness: 1000
            }
        },

        visible: {
            translateY: "0px",
            transition: {
                duration: 0.1,
                type: "spring",
                damping: 100,
                stiffness: 1000
            }
        },  
    }

    return(
        <Backdrop
            closeAnimation={handleClick}>

                <motion.div onClick={(e) => e.stopPropagation()}
                    variants={dropIn}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    className="navbar-modal"
                >
                    {children}
                </motion.div>
        </Backdrop>
    );
}