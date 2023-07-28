import React from "react";
import { motion, useScroll, useSpring, useTransform, useMotionValue, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

import "./Hero.scss"

import heroGlow from "../../images/hero_glow.webp";
import cheatImg from "../../images/otkis.gif";
import dots from "../../images/3-dots.svg";
import logo from "../../images/logo.png";

export default function Hero() {

    const bgVideoRef = React.useRef();
    const inputRef = React.useRef();
    const draggableBox = React.useRef();

    let [bgVideoLoaded, setBgVideoLoaded] = React.useState(false);
    let [inputText, setInputText] = React.useState((localStorage.getItem("Guest") || "dadaya")+"!");
    let [draggable, setDraggable] = React.useState(false);
    let [subscription, setSubscription] = React.useState(1);
    let [toggleAdditions, setToggleAdditions] = React.useState(false);
    let [exeAnimationPlay, setExeAnimationPlay] = React.useState(false);
    let [hideAnimationPlay, setHideAnimationPlay] = React.useState(false);

    function videoFade() {
        bgVideoRef.current.className = bgVideoRef.current.className + "animation"
    }

    let { scrollY } = useScroll();

    let parallax = useTransform(scrollY, [0, 600], [0, 300]);
    let opacity = useTransform(scrollY, [0, 600], [0.99, 0]);

    function exeAnimation() {
        setExeAnimationPlay(true)
        setTimeout(() => {
            setExeAnimationPlay(false) 
        }, 500)
    }
    function hideAnimation() {
        setHideAnimationPlay(true)
        setTimeout(() => {
            setHideAnimationPlay(false) 
        }, 1600)
    }

    function indicatorCalc() {
        if(subscription === 0) return "4px";
        if(subscription === 1) return "calc(100% / 3)";
        if(subscription === 2) return "calc(100% / 3 * 2)";
    }

    return(

        <div className="hero box">
            <div className="container">

                <div className="hero-bg-img-box">
                    <img src={heroGlow} alt="" />
                </div>
                    <motion.div
                        initial={{opacity: 0.99}}
                        className="hero-bg-video-box"
                        style={{translateY: parallax, opacity: opacity}}
                    >
                        <div className={`hero-video ${bgVideoLoaded ? " opacity" : ""}`} onLoad={() => setBgVideoLoaded(true)} style={{padding:"0 0 0 0", position:"relative"}}>
                            <iframe src="https://player.vimeo.com/video/843429337?dnt=1&amp;loop=1&amp;background=1&amp;app_id=58479" 
                            frameBorder="0" allow="autoplay;"
                            style={{position:"relative",
                                        top:"0",
                                        left:"0",
                                        width:"100%",
                                        height:"100%"}} 
                            title="dadaya pidr xkudive"
                            ref={bgVideoRef}
                            onLoad={videoFade}
                            >
                            </iframe>
                        </div>
                    </motion.div>                   
                <div className="hero-container-content">

                <motion.div 
                    className="scrollAnimation"
                    initial={{opacity: 0.99}}
                    style={{opacity: opacity}}
                >
                    <div className="scrollAnimationBox">
                        <div className="scroll-container">
                            <div className="scroll-container-inner">
                                <div className="scroll-container-inner-circle"></div>
                            </div>
                        </div>
                        <span className="scroll-text">Scroll</span>
                    </div>
                </motion.div>

                <div className="hero-main-content">
                    <div className="hero-title">
                        <p>{"Radiance".split("").map((e,i) => <span style={{animationDelay: `${i*0.05+0.75}s`}} key={`hero-title-${i}`}>{e}</span>)}</p>
                        <p>{"Software".split("").map((e,i) => <span style={{animationDelay: `${i*0.05+0.4+0.75}s`}} key={`hero-title-${i+8}`}>{e}</span>)}</p>
                    </div>
                    <div className="hero-subtitle">
                        <div className="hero-subtitle-box">
                            <p>The best private cheat for Rust from cool developers.</p>
                            <p>Discord server with responsive and fast support.</p>
                            <p>Cheat features you've never seen before.</p>
                        </div>

                        <p>Welcome to Radiance!</p>
                    </div>
                </div>

                <div className="hero-exe"
                    style={hideAnimationPlay ? {animation: "hide 1.6s ease"} : {}}
                >  
                <div className="cheat-exe-container">

                    <div className="exe-play">
                        <span>Play with me!</span>
                    </div>

                    <motion.div 
                        className="cheat-exe"
                        drag={draggable}
                        dragSnapToOrigin="true"
                        ref={draggableBox}
                        style={exeAnimationPlay ? {animation: "denied 0.5s linear"} : {}}
                    >

                        <motion.div className="top-menu" onHoverStart={() => setDraggable(true)} onHoverEnd={() => setDraggable(false)}>
                            <div className="cheat-label">
                                <img src={cheatImg} alt="" />
                                <span className="cheat-label-title">
                                    Gandoy
                                </span>
                            </div>
                            <div className="window-buttons">
                                <span className="hide" onClick={hideAnimation}>
                                    <svg aria-hidden="true" role="img" width="12" height="12" viewBox="0 0 12 12">
                                        <rect fill="currentColor" width="10" height="1" x="1" y="6"></rect>
                                    </svg>
                                </span>
                                <span className="fullscreen">
                                    <svg aria-hidden="true" role="img" width="12" height="12" viewBox="0 0 12 12">
                                        <rect width="9" height="9" x="1.5" y="1.5" fill="none" stroke="currentColor"></rect>
                                    </svg>
                                </span>
                                <span className="close" style={exeAnimationPlay ? {pointerEvents: "none"} : {}} onClick={exeAnimation}>
                                    <svg aria-hidden="true" role="img" width="12" height="12" viewBox="0 0 12 12">
                                        <polygon fill="currentColor" fillRule="evenodd" points="11 1.576 6.583 6 11 10.424 10.424 11 6 6.583 1.576 11 1 10.424 5.417 6 1 1.576 1.576 1 6 5.417 10.424 1"></polygon>
                                    </svg>
                                </span>
                            </div>
                        </motion.div>
                        <div className="main-menu">
                            <div className="welcome">
                                <div className="welcome-main">
                                    <img src={logo} alt="" />
                                    <div className="welcome-text">
                                        <div className="welcome-title">
                                            <span>Hello, </span>
                                            <input 
                                            value={inputText.replaceAll(" ","")}

                                            onFocus={() => setInputText((inputText) => inputText.replaceAll("!",""))} 

                                            onChange={(e) => {
                                                setInputText(e.target.value);
                                                localStorage.setItem("Guest", e.target.value);
                                            }}

                                            onBlur={() => {
                                                if(inputText.length === 0 || inputText.replaceAll(" ", "").length === 0) setInputText("Guest");
                                                setInputText((inputText) => inputText+"!")
                                            }} 

                                            style={{width: `calc(${inputText.length}ch + 25px)`}}

                                            maxLength="16"
                                            type="text"
                                            ref={inputRef}/>
                                        </div>
                                        <div className="welcome-subtitle"><p>Welcome to Radiance!</p></div>
                                    </div>
                                </div>
                                <div className="welcome-main-additions" onClick={() => setToggleAdditions((toggleAdditions) => !toggleAdditions)}>
                                    <img src={dots}className={`main-additions-dots ${toggleAdditions ? "active" : ""}`} alt="" />
                                    <AnimatePresence initial={false}>
                                        {toggleAdditions &&
                                                <motion.div 
                                                    className="main-addition-menu"
                                                    initial={{opacity: 0}}
                                                    animate={{opacity: 1}}
                                                    exit={{opacity: 0}}
                                                    transition={{duration: 0.1}}
                                                    key={toggleAdditions}
                                                >
                                                    <a href="https://t.me/" target="_blank">
                                                        <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M7.98763 10.4497L7.67829 14.7493C8.12087 14.7493 8.31255 14.5615 8.54241 14.3359L10.6174 12.3762L14.9169 15.4878C15.7055 15.922 16.261 15.6934 16.4737 14.7709L19.2959 1.70252L19.2967 1.70175C19.5468 0.54984 18.8752 0.0993921 18.1069 0.381981L1.51805 6.65822C0.385897 7.0925 0.403039 7.71619 1.32559 7.99878L5.5667 9.30239L15.4179 3.21095C15.8816 2.90757 16.3031 3.07543 15.9564 3.37881L7.98763 10.4497Z" fill="#8a8f98"/>
                                                        </svg>
                                                        <span>Telegram</span>
                                                    </a>
                                                    <a href="https://discord.gg/radianceproject/" target="_blank">
                                                        <svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M18.3334 2.50008C18.3334 2.50008 16.2315 0.854665 13.7501 0.666748L13.5264 1.11454C15.7695 1.66408 16.7989 2.44966 17.8751 3.41675C16.0202 2.46983 14.1901 1.58341 11.0001 1.58341C7.81008 1.58341 5.97996 2.46983 4.12508 3.41675C5.20125 2.44966 6.42591 1.57608 8.47375 1.11454L8.25008 0.666748C5.64675 0.911956 3.66675 2.50008 3.66675 2.50008C3.66675 2.50008 1.31962 5.90366 0.916748 12.5834C3.28175 15.3119 6.87508 15.3334 6.87508 15.3334L7.62675 14.3324C6.35075 13.8887 4.91158 13.0972 3.66675 11.6667C5.15083 12.7897 7.3907 13.9584 11.0001 13.9584C14.6095 13.9584 16.8493 12.7897 18.3334 11.6667C17.089 13.0972 15.6499 13.8887 14.3734 14.3324L15.1251 15.3334C15.1251 15.3334 18.7184 15.3119 21.0834 12.5834C20.6805 5.90366 18.3334 2.50008 18.3334 2.50008ZM8.02091 10.7501C7.1345 10.7501 6.41675 9.92966 6.41675 8.91675C6.41675 7.90383 7.1345 7.08341 8.02091 7.08341C8.90733 7.08341 9.62508 7.90383 9.62508 8.91675C9.62508 9.92966 8.90733 10.7501 8.02091 10.7501ZM13.9792 10.7501C13.0928 10.7501 12.3751 9.92966 12.3751 8.91675C12.3751 7.90383 13.0928 7.08341 13.9792 7.08341C14.8657 7.08341 15.5834 7.90383 15.5834 8.91675C15.5834 9.92966 14.8657 10.7501 13.9792 10.7501Z" fill="#8a8f98"/>
                                                        </svg>
                                                        <span>Discord</span>
                                                    </a>
                                                    <a href="https://www.youtube.com/@radianceprojectxyz/" target="_blank">
                                                        <svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M21.065 1.895C20.4683 0.8335 19.8206 0.63825 18.502 0.564C17.1847 0.474625 13.8724 0.4375 11.0027 0.4375C8.12762 0.4375 4.81387 0.474625 3.498 0.562625C2.18212 0.63825 1.53312 0.832125 0.930875 1.895C0.31625 2.95512 0 4.78113 0 7.99588C0 7.99863 0 8 0 8C0 8.00275 0 8.00413 0 8.00413L0 8.00688C0 11.2079 0.31625 13.0476 0.930875 14.0968C1.53312 15.1582 2.18075 15.3507 3.49662 15.4401C4.81388 15.5171 8.12762 15.5625 11.0027 15.5625C13.8724 15.5625 17.1847 15.5171 18.5034 15.4415C19.822 15.3521 20.4696 15.1596 21.0664 14.0981C21.6865 13.049 22 11.2092 22 8.00825C22 8.00825 22 8.00413 22 8.00138C22 8.00138 22 7.99863 22 7.99725C22 4.78113 21.6865 2.95512 21.065 1.895ZM8.25 12.125L8.25 3.875L15.125 8L8.25 12.125Z" fill="#8a8f98"/>
                                                        </svg>
                                                        <span>Youtube</span>
                                                    </a>
                                                </motion.div>
                                        }
                                    </AnimatePresence>
                                </div>
                            </div>

                            <div className="main-menu-content subscription">
                                <span className="main-menu-title">Subscription</span>
                                <div className="content-options tariff">
                                    <span className={subscription === 0 ? "active" : ""} onClick={() => setSubscription(0)}>3 days</span>
                                    <span className={subscription === 1 ? "active" : ""} onClick={() => setSubscription(1)}>7 days</span>
                                    <span className={subscription === 2 ? "active" : ""} onClick={() => setSubscription(2)}>30 days</span>

                                    <div className="active-indicator" style={{left: `${indicatorCalc()}`}}></div>
                                </div>
                            </div>

                            <div className="main-menu-content">
                                <span className="main-menu-title">Status</span>
                                <div className="content-options status undetected">
                                    <span>Undetected</span>
                                    <span>Detected</span>

                                    <div className="active-indicator"></div>
                                </div>
                            </div>

                            <Link to="/rust" className="inject-button">View Product</Link>
                        </div>

                    </motion.div>
                </div>
                </div>
                </div>
            </div>
        </div>
    )
}