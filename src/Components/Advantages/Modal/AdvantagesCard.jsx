import React from "react";
import { motion, useTransform, useSpring, useMotionValue } from "framer-motion"

export default function AdvantagesCard({text, children, cursorPos, animationId}) {

    let [boxPos, setBoxPos] = React.useState([0, 0, 0]);
    let [mousePos, setMousePos] = React.useState([0, 0]);
    let [textWidth, setTextWidth] = React.useState(0);
    
    let ref = React.useRef();
    let textRef = React.useRef();

    React.useEffect(() => {
        function boxPosCalc() {
            let rect = ref.current.getBoundingClientRect();
            setBoxPos([rect.left, rect.top + window.pageYOffset, ref.current.offsetWidth])
        }
        boxPosCalc()
        setTimeout(() => setTextWidth(textRef.current.offsetWidth), 100)
        window.addEventListener("resize", boxPosCalc);
        return () => window.removeEventListener("resize", boxPosCalc);
    }, [])

    function cursorCalc(e) {
        let posX = e.pageX - boxPos[0];
        let posY = e.pageY - boxPos[1];
        setMousePos([posX, posY]);
    }

    let cursorX = useMotionValue(0)
    cursorX.set(mousePos[0])

    let textTransform = useSpring(useTransform(cursorX, [0, boxPos[2]], text === "Customizable" ? [0, -(textWidth - boxPos[2])-48] : [-(textWidth - boxPos[2])-48, 0]),{
        stiffness: 500,
        damping: 100,
        mass: 1,
    })

    return(
        <motion.div className="advantages-card" 
            data-id={animationId} 
            onMouseMove={(e) => cursorCalc(e)} 
            onMouseOver={(e) => cursorCalc(e)} 
            onHoverEnd={() => {
                setTimeout(() => {
                    setMousePos([0,0])
                }, 500)
            }}  
            ref={ref}
        >

            <div className="circle" style={{transform: `translateX(${cursorPos[0]-boxPos[0]-400}px) translateY(${cursorPos[1]-boxPos[1]-400}px) translateZ(0px)`}}></div>
            <div className="advantages-card-inner">
                <div className="inner-circle" style={{transform: `translateX(${mousePos[0]-600}px) translateY(${mousePos[1]-600}px) translateZ(0px)`}}></div>
                <motion.div 
                    className="advantages-background-text"
                    ref={textRef}
                    transition={{duration: 0.5}}
                    style={{translateX: textTransform}}
                >{text}</motion.div>
                {children}
            </div>
        </motion.div>
    )
}