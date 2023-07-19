import React from "react";
import { motion, useTransform, useSpring, useMotionValue } from "framer-motion"

export default function BuyCard({ children, cursorPos, animationId}) {

    let [boxPos, setBoxPos] = React.useState([0, 0, 0]);
    let [mousePos, setMousePos] = React.useState([0, 0]);
    
    let ref = React.useRef();

    React.useEffect(() => {
        function boxPosCalc() {
            let rect = ref.current.getBoundingClientRect();
            setBoxPos([rect.left, rect.top + window.pageYOffset, ref.current.offsetWidth])
        }
        boxPosCalc()

        window.addEventListener("resize", boxPosCalc);
        return () => window.removeEventListener("resize", boxPosCalc);
    })

    function cursorCalc(e) {
        let posX = e.pageX - boxPos[0];
        let posY = e.pageY - boxPos[1];
        setMousePos([posX, posY]);
    }

    return(
        <motion.div className="buy-card" data-id={animationId} onMouseMove={(e) => cursorCalc(e)} ref={ref}>
            <div className="circle" style={{transform: `translate(${cursorPos[0]-boxPos[0]-400}px , ${cursorPos[1]-boxPos[1]-400}px)`}}></div>
            <div className="buy-card-inner">
                <div className="inner-circle" style={{transform: `translate(${mousePos[0]-600}px , ${mousePos[1]-600}px)`}}></div>
                {children}
            </div>
        </motion.div>
    )
}