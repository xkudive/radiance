import React from "react";
import {motion, AnimatePresence, useTransform, useSpring, MotionConfig, delay } from "framer-motion"

import Backdrop from "../Navbar/modals/Backdrop";
import "./Footer.scss";

import logo from "../../images/logo.png";
import modalClose from "../../images/modal_close.svg";

export default function Footer(){

    let footerRef= React.useRef();
    let footerContainerRef= React.useRef();
    let [agreementActive, setAgreementActive] = React.useState(false);

    let closeAgreement = () => {
        setAgreementActive(false);
        document.body.setAttribute("overflow", "visible")
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
    
        observer.observe(footerContainerRef.current);
        observer.observe(footerRef.current);
    }, [])

    return(
        <div className="footer box" ref={footerRef}>
            <div className="container" ref={footerContainerRef}>
                <div className="box-gradient"></div>
                <div className="footer-top">
                    <div className="footer-left">
                        <div className="footer-title"><img src={logo} alt="" />Radiance</div>
                        <p>In any game with any cheat, it is possible to get your account blocked. Play as carefully as possible.</p>
                    </div>
                    <div className="footer-right">
                        <ul className="footer-right-ul">
                            <li className="footer-ul-title">Navigation</li>
                            <a href="#"><li>Home</li></a>
                            <a href="https://discord.com/invite/radianceproject/" target="_blank"><li>Support</li></a>
                            <motion.a onClick={(e) => {
                                e.preventDefault();
                                document.body.setAttribute("overflow", "hidden")
                                setAgreementActive(!agreementActive);
                            }}>Privacy Policy</motion.a>
                        </ul>
                        <ul className="footer-right-ul">
                            <li className="footer-ul-title">Our Products</li>
                            <a href=""><li>Rust Radiance</li></a>
                            <a href="#"><li>Coming Soon...</li></a>
                        </ul>
                        <ul className="footer-right-ul">
                            <li className="footer-ul-title">Media</li>
                            <div className="footer-links">
                                <a href="https://t.me/" target="_blank">
                                    <span>Telegram</span>
                                </a>
                                <a href="https://discord.gg/radianceproject/" target="_blank">
                                    <span>Discord</span>
                                </a>
                                <a href="https://www.youtube.com/@radianceprojectxyz/" target="_blank">
                                    <span>Youtube</span>
                                </a>
                            </div>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom">
                    <span>2023 © Radiance - Copying and distribution of materials is prohibited.</span>
                    <span>Created by @xkudive</span>
                </div>

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
                            </motion.div>
                        </div>
                    </Backdrop>}
                </AnimatePresence>
            </div>
        </div>
    )
}