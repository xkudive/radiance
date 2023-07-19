import React from "react";

import AdvantagesCard from "./Modal/AdvantagesCard";
import "./Advantages.scss";

import quality from "../../images/premium_quality.svg"
import customizable from "../../images/highly_customizable.svg"
import updates from "../../images/frequent_updates.svg"
import trust from "../../images/trust.svg"
import support from "../../images/support.svg"

export default function Advantages(){

    let advantagesBox = React.useRef();

    React.useEffect(() => {
        let observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if(entry.isIntersecting === true) {
                    let classList = entry.target.className;
                    let newClassName = classList.replaceAll(" active", "");
                    entry.target.className = newClassName + " active";
                    observer.unobserve(entry.target);
                }
            })  
        }, {threshold: 0.3})
    
        observer.observe(advantagesBox.current);
    }, [])

    let [mousePos, setMousePos] = React.useState([0, 0]);
    function cursorCalc(e) {
        let posX = e.pageX;
        let posY = e.pageY;
        setMousePos([posX, posY])
    }

    return(
        <div className="advantages box">
            <div className="container">
                <div className="advantages-container" onMouseMove={(e) => cursorCalc(e)} ref={advantagesBox}>
                    <div className="box-gradient"></div>
                    <div className="advantages-title">
                        <h2>Distinct advantages.</h2>
                        <p>Here's a summary of what Radiance provides you with, and what we stand for.</p>
                    </div>
                    <AdvantagesCard cursorPos={mousePos} text="Quality" animationId="1">
                        <div className="advantages-content">
                            <img src={quality} alt="" />
                            <div className="advantages-content-text">
                                <h2>Premium quality</h2>
                                <p>The best of its class, Radiance is the standard at which all others are measured.</p>
                            </div>
                        </div>    
                    </AdvantagesCard>
                    <AdvantagesCard cursorPos={mousePos} text="Customizable" animationId="2">
                        <div className="advantages-content">
                            <img src={customizable} alt="" />
                            <div className="advantages-content-text">
                                <h2>Highly customizable</h2>
                                <p>Nearly every module is customizable to fit your exact needs and play style.</p>
                            </div>
                        </div>
                    </AdvantagesCard>
                    <AdvantagesCard cursorPos={mousePos} text="Updates" animationId="3">
                        <div className="advantages-content">
                            <img src={updates} alt="" />
                            <div className="advantages-content-text">
                                <h2>Frequent updates</h2>
                                <p>Ever since its conception Radiance has had constant updates providing you with the newest features and bug-fixes.</p>
                            </div>
                        </div>
                    </AdvantagesCard>
                    <AdvantagesCard cursorPos={mousePos} text="Support" animationId="4">
                    <div className="advantages-content">
                            <img src={support} alt="" />
                            <div className="advantages-content-text">
                                <h2>Godlike support</h2>
                                <p>What ever the issue may be, we’re here to help you solve the issue.</p>
                            </div>
                        </div>
                    </AdvantagesCard>
                    <AdvantagesCard cursorPos={mousePos} text="Trust" animationId="5">
                        <div className="advantages-content">
                            <img src={trust} alt="" />
                            <div className="advantages-content-text">
                                <h2>Trust</h2>
                                <p>We do our best to satisfy the needs of our customers.</p>
                            </div>
                        </div>
                    </AdvantagesCard>
                </div>
            </div>
        </div>
    )
}