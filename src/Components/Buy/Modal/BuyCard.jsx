import React from "react";
import { motion } from "framer-motion"

export default function BuyCard({ children, cursorPos, animationId, scrolledPos}) {

    let [boxPos, setBoxPos] = React.useState([0, 0, 0]);
    let [mousePos, setMousePos] = React.useState([0, 0]);
    
    let ref = React.useRef();

    React.useEffect(() => {
        function boxPosCalc() {
            if(!ref.current) return
            let rect = ref.current.getBoundingClientRect();
            setBoxPos([rect.left, rect.top + window.pageYOffset, ref.current.offsetWidth])
        }
        setTimeout(() => boxPosCalc(), 500)

        window.addEventListener("resize", boxPosCalc);
        return () => window.removeEventListener("resize", boxPosCalc);
    },[])

    function cursorCalc(e) {
        let posX = e.pageX - boxPos[0];
        let posY = e.pageY - boxPos[1];
        setMousePos([posX, posY]);
    }

    return(
        <motion.div className="buy-card" 
            data-id={animationId} 
            onMouseMove={(e) => cursorCalc(e)}
            onMouseOver={(e) => cursorCalc(e)}
            ref={ref}
        >
            <div className="circle" style={{transform: `translateX(${cursorPos[0]-boxPos[0]-600-scrolledPos}px) translateY(${cursorPos[1]-boxPos[1]-600}px) translateZ(0px)`}}></div>
            <div className="buy-card-inner">
                <div className="inner-circle" style={{transform: `translateX(${mousePos[0]-600-scrolledPos}px) translateY(${mousePos[1]-600}px) translateZ(0px)`}}></div>
                {children}
            </div>
        </motion.div>
    )
}