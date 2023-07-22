import React from "react";
import { motion, AnimatePresence, useTransform, useMotionValue, useSpring } from "framer-motion";

import "./MediaRust.scss";

import loader1 from "../../images/cheat_1.png";
import loader2 from "../../images/cheat_2.png";
import loader3 from "../../images/cheat_3.png";
import loader4 from "../../images/cheat_4.png";
import loader5 from "../../images/cheat_5.png";

export default function MediaRust() {

    let slider = React.useRef();
    let innerSlider = React.useRef();
    let [scroll, setScroll] = React.useState(0);

    let x = useMotionValue(0);
    
    React.useEffect(() => {
        let sliderWidth = slider.current.clientWidth;
        let innerSliderWidth = innerSlider.current.scrollWidth;
        setScroll(innerSliderWidth-sliderWidth)
    }, [])

    const progress = useSpring(useTransform(x, [0, -scroll], [0, 400]), {
        stiffness: 500,
        damping: 30,
        mass: 1.5,
    });

    return(
        <div className="media-rust box">
            <div className="container">

                <div className="box-gradient"></div>

                <div className="media-rust-title">
                    Screenshots
                </div>
                <motion.div className="media-rust-slider" ref={slider}>
                    <motion.div 
                        className="media-rust-inner-slider"
                        whileTap={{ cursor:"grabbing" }}
                        drag="x"
                        ref={innerSlider}
                        style={{ x }}
                        dragConstraints={{right: 0, left: -scroll}}
                    >
                        <div className="media-rust-image"><img draggable="false" src={loader1} alt="" /></div>
                        <div className="media-rust-image"><img draggable="false" src={loader2} alt="" /></div>
                        <div className="media-rust-image"><img draggable="false" src={loader3} alt="" /></div>
                        <div className="media-rust-image"><img draggable="false" src={loader4} alt="" /></div>
                        <div className="media-rust-image"><img draggable="false" src={loader5} alt="" /></div>
                    </motion.div>
                </motion.div>
                <div className="media-slider-indicator-container">
                    <div className="media-slider-indicator">
                        <motion.div className="media-slider-indicator-inner" style={{translateX: progress}}></motion.div>
                    </div>
                </div>

            </div>
        </div>
    )
}