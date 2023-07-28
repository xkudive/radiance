import React from "react";
import {motion, useTransform, useMotionValue} from "framer-motion";

import "./ModalCard.scss"

export default function ModalCard({children, cursorPos}) {
    
    let ref = React.useRef();

    let [boxPos, setBoxPos] = React.useState([0, 0]);
    let [circleX, setCircleX] = React.useState(0);
    let [circleY, setCircleY] = React.useState(0);

    React.useEffect(() => {
        let boxPosCalc = () => {
            let rect = ref.current.getBoundingClientRect();
            setBoxPos([rect.left, rect.top]);
        }
        setTimeout(boxPosCalc, 400)

        window.addEventListener("resize", boxPosCalc);

        return () => window.removeEventListener("resize", boxPosCalc);
    }, [])

    function handleMouseMove(e) {
        setCircleX(e.pageX - boxPos[0] - 300);
        setCircleY(e.pageY - boxPos[1] - 300);
    }

    return(
        <div className="navbar-modal-card" onMouseMove={(e) => handleMouseMove(e)} ref={ref}>
            <div className="circle" style={{transform: `translate(${cursorPos[0] - boxPos[0]}px, ${cursorPos[1] - boxPos[1] }px)`}}></div>
            <div className="navbar-modal-inner-card">
                <div className="inner-circle" style={{transform: `translate(${circleX}px, ${circleY}px)`}}></div>
                {children}
            </div>
        </div>
    )
}