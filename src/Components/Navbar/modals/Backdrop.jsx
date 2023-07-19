import React from "react";
import { motion } from "framer-motion"

import "./Backdrop.scss"

export default function Backdrop({closeAnimation, children, overflow}) {

    return(
        <motion.div className="navbar-backdrop"

            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            onClick={(e) => {
                e.stopPropagation();
                closeAnimation();
                overflow && document.body.setAttribute("overflow", "visible")
                }}>
                {children}
        </motion.div>
    );
}