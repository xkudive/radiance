import React from "react";
import {motion, AnimatePresence} from "framer-motion";
import { Link } from "react-router-dom";
import BuyCard from "./Modal/BuyCard";
import "./Buy.scss";

import diamond from "../../images/diamond.svg";
import support from "../../images/support.svg";
import quality from "../../images/premium_quality.svg";
import lightning from "../../images/lightning.svg";
import cube from "../../images/cube.svg";
import star from "../../images/star.svg";

export default function Buy() {

    let buyRef = React.useRef();

    let [activeTabRegion, setActiveTabRegion] = React.useState(0);

    let [mousePos, setMousePos] = React.useState([0, 0]);
    function cursorCalc(e) {
        let posX = e.pageX;
        let posY = e.pageY;
        setMousePos([posX, posY])
    }

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
    
        observer.observe(buyRef.current);
    }, [])

    return(
        <div className="buy box" id="rust-prices">
            <div className="container" ref={buyRef}>
                <div className="buy-top-content" style={{marginBottom: "56px"}}>
                    <h2>Subscription</h2>
                    <p>Select the desired subscription period</p>
                    <div className="modal-content region">
                        <div className="content-options" style={{width: "400px"}}>
                            <span className={activeTabRegion === 0 ? "active" : ""} onClick={() => setActiveTabRegion(0)}>Global Region</span>
                            <span className={activeTabRegion === 1 ? "active" : ""} onClick={() => setActiveTabRegion(1)}>CIS Region</span>

                            <div className="active-indicator" style={activeTabRegion === 0 ? {left : "4px", background: "#2c3d3c"} : {left: "50%", background: "#2c3d3c"}}></div>
                        </div>
                    </div>  
                </div>
                <div className="buy-cards-container" onMouseMove={(e) => cursorCalc(e)}>
                    <div className="box-gradient"></div>
                    <BuyCard cursorPos={mousePos}>
                        <div className="plan-image">
                            <span><img src={star} alt="" /></span>
                        </div>
                        <div className="plan-title">
                            <h2>Lite</h2>
                            <p>A short-time subscription. Perfect for getting familiar with the features.</p>
                            <div className="cost">
                                <AnimatePresence initial={false}>
                                    <motion.span className="subscription-total-cost" transition={{duration: 0.4}} 
                                    initial={{opacity: 0}}
                                    animate={{opacity: 1, transition: {duration: 0.2, delay: 0.2}}}
                                    exit={{opacity: 0, transition:{duration: 0.2}}}
                                    key={[activeTabRegion]}>
                                        {
                                            activeTabRegion === 0 ?  <div><span>25$</span><span>/3 days</span></div> : <div><span>2200₽</span><span>/3 days</span></div>
                                        }
                                    </motion.span>
                                </AnimatePresence>
                            </div>
                        </div>
                        <div className="plan-advantages">
                            <div className="plan-advantages-item">
                                <span><img src={cube} alt="" /></span>
                                <div className="plan-advantages-item-text">
                                    <p className="plan-advantages-item-text-top">Extensive functionality</p>
                                    <p>Access to all features</p>
                                </div>
                            </div>
                            <div className="plan-advantages-item">
                                <span><img src={support} alt="" /></span>
                                <div className="plan-advantages-item-text">
                                    <p className="plan-advantages-item-text-top">Brilliant support</p>
                                    <p>Quick support assistance</p>
                                </div>
                            </div>
                            <div className="plan-advantages-item">
                                <span><img src={quality} alt="" /></span>
                                <div className="plan-advantages-item-text">
                                    <p className="plan-advantages-item-text-top">Exclusive features</p>
                                    <p>Undeniable advantages in the game</p>
                                </div>
                            </div>
                        </div>
                        <Link to="/rust" className="plan-buy-button">View Product</Link>
                    </BuyCard>                   
                    <BuyCard cursorPos={mousePos}>
                        <div className="plan-image">
                            <span><img src={lightning} alt="" /></span>
                            <div className="most-popular">Most popular</div>
                        </div>
                        <div className="plan-title">
                            <h2>Basic</h2>
                            <p>A medium-time subscription. The right decision to experience the best.</p>
                            <div className="cost">
                                <AnimatePresence initial={false}>
                                    <motion.span className="subscription-total-cost" transition={{duration: 0.4}} 
                                    initial={{opacity: 0}}
                                    animate={{opacity: 1, transition: {duration: 0.2, delay: 0.2}}}
                                    exit={{opacity: 0, transition:{duration: 0.2}}}
                                    key={[activeTabRegion]}>
                                        {
                                            activeTabRegion === 0 ? <div><span>50$</span><span>/week</span></div> : <div><span>4100₽</span><span>/week</span></div>
                                        }
                                    </motion.span>
                                </AnimatePresence>
                            </div>
                        </div>
                        <div className="plan-advantages">
                            <div className="plan-advantages-item">
                                <span><img src={cube} alt="" /></span>
                                <div className="plan-advantages-item-text">
                                    <p className="plan-advantages-item-text-top">Extensive functionality</p>
                                    <p>Access to all features</p>
                                </div>
                            </div>
                            <div className="plan-advantages-item">
                                <span><img src={support} alt="" /></span>
                                <div className="plan-advantages-item-text">
                                    <p className="plan-advantages-item-text-top">Brilliant support</p>
                                    <p>Quick support assistance</p>
                                </div>
                            </div>
                            <div className="plan-advantages-item">
                                <span><img src={quality} alt="" /></span>
                                <div className="plan-advantages-item-text">
                                    <p className="plan-advantages-item-text-top">Exclusive features</p>
                                    <p>Undeniable advantages in the game</p>
                                </div>
                            </div>
                        </div>
                        <Link to="/rust" className="plan-buy-button">View Product</Link>
                    </BuyCard>
                    <BuyCard cursorPos={mousePos}>
                        <div className="plan-image">
                            <span><img src={diamond} alt="" /></span>
                        </div>
                        <div className="plan-title">
                            <h2>Advanced</h2>
                            <p>A long-time subscription. Destroy everyone, become a real god of the game.</p>
                            <div className="cost">
                                <AnimatePresence initial={false}>
                                    <motion.span className="subscription-total-cost" transition={{duration: 0.4}} 
                                    initial={{opacity: 0}}
                                    animate={{opacity: 1, transition: {duration: 0.2, delay: 0.2}}}
                                    exit={{opacity: 0, transition:{duration: 0.2}}}
                                    key={[activeTabRegion]}>
                                        {
                                            activeTabRegion === 0 ?  <div><span>105$</span><span>/month</span></div> : <div><span>9100₽</span><span>/month</span></div>
                                        }
                                    </motion.span>
                                </AnimatePresence>
                            </div>
                        </div>
                        <div className="plan-advantages">
                            <div className="plan-advantages-item">
                                <span><img src={cube} alt="" /></span>
                                <div className="plan-advantages-item-text">
                                    <p className="plan-advantages-item-text-top">Extensive functionality</p>
                                    <p>Access to all features</p>
                                </div>
                            </div>
                            <div className="plan-advantages-item">
                                <span><img src={support} alt="" /></span>
                                <div className="plan-advantages-item-text">
                                    <p className="plan-advantages-item-text-top">Brilliant support</p>
                                    <p>Quick support assistance</p>
                                </div>
                            </div>
                            <div className="plan-advantages-item">
                                <span><img src={quality} alt="" /></span>
                                <div className="plan-advantages-item-text">
                                    <p className="plan-advantages-item-text-top">Exclusive features</p>
                                    <p>Undeniable advantages in the game</p>
                                </div>
                            </div>
                        </div>
                        <Link to="/rust" className="plan-buy-button">View Product</Link>
                    </BuyCard>
                </div>
            </div>
        </div>
    )
}