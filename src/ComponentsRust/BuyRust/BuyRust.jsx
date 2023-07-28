import React from "react";
import {motion, AnimatePresence} from "framer-motion"

import Backdrop from "../../Components/Navbar/modals/Backdrop";
import BuyCard from "./Modal/BuyCard";
import "../../Components/Buy/Buy.scss";

import diamond from "../../images/diamond.svg";
import support from "../../images/support.svg";
import quality from "../../images/premium_quality.svg";
import lightning from "../../images/lightning.svg";
import cube from "../../images/cube.svg";
import modalClose from "../../images/modal_close.svg";
import block from "../../images/block.svg";
import star from "../../images/star.svg";

export default function Buy({newRender}) {

    React.useEffect(() => {
        let imagesArray = [block]
        imagesArray.forEach((image) => {
            new Image().src = image
          });
    }, [])

    let buyRef = React.useRef();

    let [activeTabRegion, setActiveTabRegion] = React.useState(0);
    let [agreementActive, setAgreementActive] = React.useState(false);
    let [checkboxActive, setCheckboxActive] = React.useState(false);
    let [popupActive, setPopupActive] = React.useState(false);
    
    let closeAgreement = () => {
        setAgreementActive(false);
        document.body.setAttribute("overflow", "visible")
    }

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
        }, {threshold: 0.1})
    
        observer.observe(buyRef.current);
    }, [])

    return(
        <div className="buy box" id="rust-prices">
            <div className="container" ref={buyRef}>
                <div className="buy-top-content">
                    <h2>Subscription</h2>
                    <p>Select the desired subscription period</p>
                    <div className="modal-content region">
                        <div className="content-options">
                            <span className={activeTabRegion === 0 ? "active" : ""} onClick={() => setActiveTabRegion(0)}>Global Region</span>
                            <span className={activeTabRegion === 1 ? "active" : ""} onClick={() => setActiveTabRegion(1)}>CIS Region</span>

                            <div className="active-indicator" style={activeTabRegion === 0 ? {left : "4px", background: "#2c3d3c"} : {left: "50%", background: "#2c3d3c"}}></div>
                        </div>
                    </div>
                    <div className="subscription-agreement">
                        <div className="subscription-agreement-checkbox" onClick={() => setCheckboxActive((checkboxActive) => !checkboxActive)}>
                            <div className="agreement-checkbox" style={{background: `${checkboxActive ? "#6aafab" : ""}`}}></div>
                            Accept the <motion.span onClick={(e) => {
                                e.stopPropagation();
                                document.body.setAttribute("overflow", "hidden")
                                setAgreementActive(!agreementActive);
                            }}>offer agreement</motion.span>
                        </div>
                    </div>  
                </div>
                <div className="buy-cards-container" onMouseMove={(e) => cursorCalc(e)}>
                    <div className="box-gradient"></div>
                    <BuyCard cursorPos={mousePos} updateBoxValues={newRender}>
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
                        <a href="https://radianceproject.mysellix.io/en/" target="_blank" className="plan-buy-button" onClick={(e) => {
                            if(checkboxActive === true) return;
                            if(popupActive === true) {
                                e.preventDefault();
                                return;
                            }
                            if(checkboxActive === false) {
                                e.preventDefault();
                                setPopupActive(true)
                                setTimeout(() => {
                                    setPopupActive(false)
                                }, 3000)
                            }
                        }}>Buy Subscription</a>
                    </BuyCard>                   
                    <BuyCard cursorPos={mousePos} updateBoxValues={newRender}>
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
                        <a href="https://radianceproject.mysellix.io/en/" target="_blank" className="plan-buy-button" onClick={(e) => {
                            if(checkboxActive === true) return;
                            if(popupActive === true) {
                                e.preventDefault();
                                return;
                            }
                            if(checkboxActive === false) {
                                e.preventDefault();
                                setPopupActive(true)
                                setTimeout(() => {
                                    setPopupActive(false)
                                }, 3000)
                            }
                        }}>Buy Subscription</a>
                    </BuyCard>
                    <BuyCard cursorPos={mousePos} updateBoxValues={newRender}>
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
                        <a href="https://radianceproject.mysellix.io/en/" target="_blank" className="plan-buy-button" onClick={(e) => {
                            if(checkboxActive === true) return;
                            if(popupActive === true) {
                                e.preventDefault();
                                return;
                            }
                            if(checkboxActive === false) {
                                e.preventDefault();
                                setPopupActive(true)
                                setTimeout(() => {
                                    setPopupActive(false)
                                }, 3000)
                            }
                        }}>Buy Subscription</a>
                    </BuyCard>
                </div>
                <AnimatePresence initial={false}>
                    {
                        popupActive &&

                        <motion.div 
                            className="popup-warn"
                            initial={{translateX: 532, transition: {
                                                            duration: 0.1,
                                                            type: "spring",
                                                            damping: 100,
                                                            stiffness: 1000
                                                        }}}
                            animate={{translateX: 0, transition: {
                                                            duration: 0.1,
                                                            type: "spring",
                                                            damping: 100,
                                                            stiffness: 1000
                                                        }}}
                            exit={{translateX: 532, transition: {
                                                            duration: 0.1,
                                                            type: "spring",
                                                            damping: 100,
                                                            stiffness: 1000
                                                        }}}
                            key={popupActive}
                        >
                            <img src={block} alt="" />
                            <div className="popup-warn-text">
                                <span>You have not accepted the offer agreement</span>
                                <span>Read the offer agreement and please accept it.</span>
                            </div>
                        </motion.div>
                    }
                </AnimatePresence>
                <AnimatePresence initial={false}>

                    {agreementActive && 

                    <Backdrop closeAnimation={closeAgreement} overflow={true}>
                        <div className="agreement-container">


                            <motion.div 
                                className={`agreement-rules`}
                                onClick={(e) => e.stopPropagation()}
                                initial={{opacity: 0}}
                                animate={{opacity: 1}}
                                exit={{opacity: 0}}
                                key={agreementActive}
                            >
                                <div className="agreement-modal-top">
                                    <span className="agreement-top-title">Agreement rules</span>
                                    <button onClick={closeAgreement}><img src={modalClose} alt="" /></button>
                                </div>
                                <div className="rules-scroll">
                                    <p>1. We do not refund funds if your pc does not match the description of the software. (carefully read the description of the software you buy)</p>
                                    <p>2. If you bought the wrong product, we will not refund. (we make an exchange with an extra charge if the price is higher, in rare cases)</p>
                                    <p>3. We do not refund funds if, after the update, the cheat went into detection. (all software of the code will go into detection at some point, but after updating the software, you can claim compensation)</p>
                                    <p>4. We do not refund funds if some functions stop working after the update.</p>
                                    <p>5. We do not refund funds if you bought a key outside the region and were banned, if you are not from Russia or the CIS countries and bought a RU and CIS key</p>
                                    <p>6. It is forbidden to sell and donate your activated subscription or key.</p>
                                    <p>7. Changes Hwid system = Purchase a new key, or proof that you will have the activation.</p>
                                    <p>8. Unwillingness to fulfill the requirements for the software to work = refusal of support (money-back in this case is not done)</p>
                                </div>
                                <span href="#" className="subscription-agreement-accept" onClick={() => {
                                    setCheckboxActive(true);
                                    document.body.setAttribute("overflow", "visible")
                                    closeAgreement();
                                    }}>Accept</span>
                            </motion.div>
                        </div>
                    </Backdrop>}
                </AnimatePresence>
            </div>
        </div>
    )
}