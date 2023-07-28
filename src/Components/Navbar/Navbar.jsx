import React from "react";
import {motion, AnimatePresence, delay} from "framer-motion"
import { Link } from "react-router-dom";

import Backdrop from "./modals/Backdrop";
import Modal from "./modals/Modal";
import ModalCard from "./modals/ModalCard";

import "./Navbar.scss";
import logo from "../../images/logo.png";
import rust from "../../images/rust.webp";
import unturned from "../../images/unturned.webp";
import modalClose from "../../images/modal_close.svg";
import block from "../../images/block.svg";


export default function Navbar() {
    
    React.useEffect(() => {
        let imagesArray = [rust, unturned, block]
        imagesArray.forEach((image) => {
            new Image().src = image
          });
    }, [])

    let [modalOpen, setModalOpen] = React.useState(false)
    let [SubscriptionModalOpen, setSubscriptionModalOpen] = React.useState(false)
    let [burgerOpen, setBurgerOpen] = React.useState(false);
    let [buttonBlock, setButtonBlock] = React.useState(false);
    let [productsMenu, setProductsMenu] = React.useState(false);

    function buttonBlockFunction() {
        setButtonBlock(true);
        setTimeout(() => {
            setButtonBlock(false)
        },1300)
    }

    let open = () => {
        setModalOpen(true);
        setSubscriptionModalOpen(false);
        document.body.setAttribute("overflow", "hidden")
    }
    let close = () => {
        setModalOpen(false);
        document.body.setAttribute("overflow", "visible")
    }

    let openSubscription = () => {
        setSubscriptionModalOpen(true);
        setModalOpen(false);
        document.body.setAttribute("overflow", "hidden")
    }
    let closeSubscription = () => {
        setSubscriptionModalOpen(false);
        document.body.setAttribute("overflow", "visible")
    }
    let openNavbar = () => {
        setBurgerOpen(true);
        document.body.setAttribute("overflow", "hidden")
    }
    let closeNavbar = () => {
        setBurgerOpen(false);
        document.body.setAttribute("overflow", "visible")
    }

    let [cursorX, setCursorX] = React.useState(0);
    let [cursorY, setCursorY] = React.useState(0);

    function handleMouseMove(e) { 
        setCursorX(e.pageX - 400)
        setCursorY(e.pageY - 400)
    }

    let [activeTabCheat, setActiveTabCheat] = React.useState(0)
    let [activeTabRegion, setActiveTabRegion] = React.useState(0)
    let [activeTabTariff, setActiveTabTariff] = React.useState(0)
    let [agreementActive, setAgreementActive] = React.useState(false);
    let [checkboxActive, setCheckboxActive] = React.useState(false);
    let [popupActive, setPopupActive] = React.useState(false);
    let closeAgreement = () => {
        setAgreementActive(false);
    }

    function indicatorCalc() {
        if(activeTabTariff === 0) return "4px";
        if(activeTabTariff === 1) return "calc(100% / 3)";
        if(activeTabTariff === 2) return "calc(100% / 3 * 2)";
    }

    function engTariff() {
        if(activeTabTariff === 0) return <div><span>25$</span><span>/3 days</span></div>
        if(activeTabTariff === 1) return <div><span>50$</span><span>/week</span></div>
        if(activeTabTariff === 2) return <div><span>105$</span><span>/month</span></div>
    }

    function rusTariff() {
        if(activeTabTariff === 0) return <div><span>2200₽</span><span>/3 days</span></div>
        if(activeTabTariff === 1) return <div><span>4100₽</span><span>/week</span></div>
        if(activeTabTariff === 2) return <div><span>9100₽</span><span>/month</span></div>
    }
    
    const linkStagger = {
        initial: {
            opacity: 0,
            y: 64,
            transition: {
                duration: 0.5,
                ease: [0.65,0.05,0.36,1]
            }
        },
        open: {
            opacity: 1,
            y: 0,
            transition: {
                duration:  0.5,
                ease: [0.65,0.05,0.36,1]
            }
        },
    }
    const parentStagger = {
        initial: {
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0,
                staggerDirection: -1
            }
        },
        open: {
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.8,
                staggerDirection: 1
            }
        },
    }

    return(
        <div className="navbar box">
            <div className="container">
                <AnimatePresence initial={false}>
                    {modalOpen && 
                        <Modal handleClick={close}>
                            <div className="container">
                                <div className="navbar-modals-box" onMouseMove={(e) => handleMouseMove(e)}>
                                    <ModalCard cursorPos={[cursorX, cursorY]}>
                                        <div className="navbar-card-image rust">
                                            <img src={rust} alt="" />
                                        </div>
                                        <div className="navbar-card-content">
                                            <div className="navbar-card-title">
                                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M24 0H0V24H24V0ZM3.20486 9.86761L3.22953 14.7622L3.28755 14.7993C5.5837 13.965 7.73266 13.9657 7.73266 13.9657L7.7031 10.8288C5.87728 10.798 3.20486 9.86761 3.20486 9.86761ZM8.64526 10.7999L10.1172 10.7712L10.1466 13.9656H8.70413L8.64526 10.7999ZM11.5508 12.4097L12.5012 11.4186L13.4989 12.3749L12.5624 13.4123L11.5508 12.4097ZM11.0588 8.4528L14.2202 8.43843L14.2496 9.93307H11.1029L11.0588 8.4528ZM12.9265 15.0206L15.1762 12.8361L16.1467 13.9657L14.0293 16.0697L12.9265 15.0206ZM10.1448 3.0573L15.1526 3.03319C15.1526 3.03319 14.1566 5.7745 14.1251 7.55901L11.0773 7.57353C11.0773 7.57353 10.9604 5.35821 10.1068 3.11401L10.1448 3.0573ZM17.3642 20.567L20.8783 17.0797L20.864 17.0134C18.634 16.0223 16.9445 14.541 16.9445 14.541L14.8058 16.6633C16.0781 17.9435 17.3642 20.567 17.3642 20.567Z" fill="#f7f8f8"/>
                                                </svg>
                                                <span>Rust Radiance</span>
                                            </div>
                                            <p className="navbar-card-subtitle">
                                            A private cheat for rust will let you win on the battlefield and get the taste of victory!
                                            </p>

                                            <Link to="/rust" onClick={close}>View Product</Link>
                                        </div>
                                    </ModalCard>
                                    <ModalCard cursorPos={[cursorX, cursorY]}>
                                        <div className="navbar-card-image unturned">
                                            <img src={unturned} alt="" />
                                        </div>
                                        <span className="unturned-title">Coming soon...</span>
                                    </ModalCard>
                                </div>
                            </div>
                        </Modal>
                    }
                </AnimatePresence>
                <AnimatePresence initial={false}>
                    {SubscriptionModalOpen && 
                        <Backdrop closeAnimation={closeSubscription}>
                             <div className="subscription-container">
                                <div className="subscription-modal" onClick={(e) => e.stopPropagation()}>
                                    <div className="subscription-modal-top">
                                        <span className="modal-top-title">Buy subscription</span>
                                        <button onClick={closeSubscription}><img src={modalClose} alt="" /></button>
                                    </div>
                                    <div className="subscription-modal-content">
                                        <div className="modal-content game">
                                            <span className="modal-content-title">Cheat</span>
                                            <div className="content-options">
                                                <span className={activeTabCheat === 0 ? "active" : ""} onClick={() => setActiveTabCheat(0)}>Radiance</span>
                                                <span className={activeTabCheat === 1 ? "active" : ""} onClick={() => setActiveTabCheat(1)}>Coming soon</span>
                                                 
                                                <div className="active-indicator" style={activeTabCheat === 0 ? {left : "4px"} : {left: "50%"}}></div>
                                            </div>
                                        </div>
                                        <div className="modal-content region">
                                            <span className="modal-content-title">Region</span>
                                            <div className="content-options">
                                                <span className={activeTabRegion === 0 ? "active" : ""} onClick={() => setActiveTabRegion(0)}>Global</span>
                                                <span className={activeTabRegion === 1 ? "active" : ""} onClick={() => setActiveTabRegion(1)}>CIS</span>

                                                <div className="active-indicator" style={activeTabRegion === 0 ? {left : "4px"} : {left: "50%"}}></div>
                                            </div>
                                        </div>
                                        <div className="modal-content tariff">
                                            <span className="modal-content-title">Tariff</span>
                                            <div className="content-options">
                                                <span className={activeTabTariff === 0 ? "active" : ""} onClick={() => setActiveTabTariff(0)}>3 days</span>
                                                <span className={activeTabTariff === 1 ? "active" : ""} onClick={() => setActiveTabTariff(1)}>7 days</span>
                                                <span className={activeTabTariff === 2 ? "active" : ""} onClick={() => setActiveTabTariff(2)}>30 days</span>

                                                <div className="active-indicator" style={{left: `${indicatorCalc()}`}}></div>
                                            </div>
                                        </div>
                                    
                                        <div className="subscription-agreement">
                                            <div className="subscription-agreement-checkbox" onClick={() => setCheckboxActive((checkboxActive) => !checkboxActive)}>
                                                <div className="agreement-checkbox" style={{background: `${checkboxActive ? "#4560b8" : ""}`}}></div>
                                                Accept the <motion.span onClick={(e) => {
                                                    e.stopPropagation();
                                                    setAgreementActive(!agreementActive);
                                                }}>offer agreement</motion.span>
                                                <AnimatePresence initial={false}>

                                                    {agreementActive && 

                                                    <Backdrop closeAnimation={closeAgreement}>
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
                                                                    closeAgreement()
                                                                    }}>Accept</span>
                                                            </motion.div>
                                                        </div>
                                                    </Backdrop>}
                                                </AnimatePresence>
                                            </div>
                                        </div>                                        
                                    
                                    </div>
                                    <div className="subscription-modal-cost">
                                        <AnimatePresence initial={false}>
                                            <motion.span className="subscription-total-cost" transition={{duration: 0.4}} 
                                            initial={{opacity: 0}}
                                            animate={{opacity: 1, transition: {duration: 0.2, delay: 0.2}}}
                                            exit={{opacity: 0, transition:{duration: 0.2}}}
                                            key={[activeTabRegion, activeTabTariff]}>
                                                {
                                                    activeTabRegion === 0 ? (engTariff()) : (rusTariff())
                                                }
                                            </motion.span>
                                        </AnimatePresence>
                                        <a href="https://radianceproject.mysellix.io/en/" target="_blank" className="buy-subscription" onClick={(e) => {
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
                                    </div>
                                </div>
                            </div>
                        </Backdrop>
                    }
                </AnimatePresence>
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
                                <span>You have not accepted the offer agreement.</span>
                                <span>Read the offer agreement and please accept it.</span>
                            </div>
                        </motion.div>
                    }
                </AnimatePresence>

                <AnimatePresence initial={false}>
                    {burgerOpen &&
                        <motion.div 
                            className="navbar-burger-menu"
                            initial={{clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)", transition: {duration: 0.8, ease: [0.27,0.94,0.48,1.00]} }}
                            animate={{clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)", transition: {duration: 0.8, ease: [0.27,0.94,0.48,1.00]} }}
                            exit={{clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)", transition: {duration: 0.8, delay: 0.5, ease: [0.27,0.94,0.48,1.00]} }}
                        >
                            <div className="container">
                                <motion.div 
                                    className="navbar-burger-menu-top"
                                    initial={{y: "-30px", opacity: 0}}
                                    animate={{y: 0, opacity: 1, transition: {duration: 0.8, delay: 0.3, ease: [0.65,0.05,0.36,1]} }}
                                    exit={{y: "-30px",opacity: 0, transition: {duration: 0.5, delay: 0.3, ease: [0.65,0.05,0.36,1]} }}
                                >
                                    <Link 
                                        to="/" 
                                        onClick={() => {
                                            setProductsMenu(false)
                                            setTimeout(() => {
                                                close();
                                                closeSubscription();
                                                closeNavbar();
                                            },100)
                                        }}
                                    >
                                        <div className="navbar-logo">
                                            <img src={logo} alt="" />
                                        </div>
                                    </Link>
                                    <div 
                                        className={`burger-btn active ${buttonBlock ? "non-clickable" : ""}`} 
                                        onClick={() => {
                                            setProductsMenu(false)
                                            setTimeout(() => {
                                                closeNavbar();
                                                buttonBlockFunction();
                                            },100)
                                        }}
                                    >
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                </motion.div>
                                <div className="navbar-burger-menu-content">

                                    <motion.ul 
                                        variants={parentStagger}
                                        initial="initial"
                                        animate="open"
                                        exit="initial"
                                    >
                                        <div style={{overflow: "hidden"}}>
                                            <Link 
                                                to="/" 
                                                onClick={() => {
                                                    setProductsMenu(false)
                                                    setTimeout(() => {
                                                        close();
                                                        closeSubscription();
                                                        closeNavbar();
                                                    },100)
                                                }}
                                            >
                                                <motion.a 
                                                    className="navbar-ul-a"
                                                    variants={linkStagger}
                                                >
                                                    <li>Home</li>
                                                </motion.a>
                                            </Link>
                                        </div>
                                        <div style={{overflow: "hidden"}}>
                                            <motion.a 
                                                className={`navbar-ul-a modal ${productsMenu ? " clicked" : ""}`} 
                                                onClick={() => setProductsMenu(!productsMenu)}
                                                variants={linkStagger}
                                            >
                                                <li>Our Products</li>
                                                <svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M7 1L4 4L1 0.999999" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                </svg>
                                            </motion.a>
                                        </div>
                                        <AnimatePresence initial={false}>
                                            {productsMenu &&
                                                <motion.div className="burger-products" 
                                                initial={{height: 0, transition: {duration: 0.5, ease: [0.27,0.94,0.48,1]}}}
                                                animate={{height: "128px", transition: {duration: 0.5, ease: [0.27,0.94,0.48,1]}}}
                                                exit={{height: 0, transition: {duration: 0.5, ease: [0.27,0.94,0.48,1]}}}
                                                key={productsMenu}>
                                                    <div className="burger-products-inner">
                                                        <Link 
                                                            to="/rust"
                                                            onClick={() => {
                                                                setProductsMenu(false)
                                                                setTimeout(() => {
                                                                    close();
                                                                    closeSubscription();
                                                                    closeNavbar();
                                                                },100)
                                                            }}
                                                            >
                                                            <motion.span
                                                                initial={{opacity: 0, transition: {duration: 0.6, ease: [0.27,0.94,0.48,1]}}}
                                                                animate={{opacity: 1, transition: {duration: 0.6, delay: 0.3, ease: [0.27,0.94,0.48,1]}}}
                                                                exit={{opacity: 0, transition: {duration: 0.6, ease: [0.27,0.94,0.48,1]}}}
                                                                key={productsMenu}
                                                            >Rust Radiance</motion.span>
                                                        </Link>
                                                        <motion.span
                                                            initial={{opacity: 0, transition: {duration: 0.6, ease: [0.27,0.94,0.48,1]}}}
                                                            animate={{opacity: 1, transition: {duration: 0.6, delay: 0.4, ease: [0.27,0.94,0.48,1]}}}
                                                            exit={{opacity: 0, transition: {duration: 0.6, ease: [0.27,0.94,0.48,1]}}}
                                                            key={productsMenu}
                                                        >Coming Soon...</motion.span>
                                                    </div>
                                                </motion.div>    
                                            }
                                        </AnimatePresence>
                                        <div style={{overflow: "hidden"}}>
                                            <motion.a 
                                                className="navbar-ul-a" 
                                                target="_blank" 
                                                href="https://discord.com/invite/radianceproject/"
                                                variants={linkStagger}
                                            >
                                                <li>Support</li>
                                            </motion.a>
                                        </div>

                                        <div style={{overflow: "hidden"}}>
                                            <Link 
                                                to="/rust" 
                                                onClick={() => {
                                                    setProductsMenu(false)
                                                    setTimeout(() => {
                                                        close();
                                                        closeSubscription();
                                                        closeNavbar();
                                                    },100)
                                                }}
                                            >
                                                <motion.a 
                                                    className="navbar-ul-a"
                                                    variants={linkStagger}
                                                >
                                                    <li>Buy Subscription</li>
                                                </motion.a>
                                            </Link>
                                        </div>
                                    </motion.ul>
                                </div>
                            </div>
                        </motion.div>
                    }
                </AnimatePresence>

                <Link to="/" className="navbar-logo" onClick={() => {
                    close();
                    closeSubscription();
                }}><img src={logo} alt="" /></Link>
                <div className={`burger-btn ${buttonBlock ? "non-clickable" : ""}`} onClick={() => {
                        openNavbar();
                        buttonBlockFunction()
                    }}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <ul className="navbar-ul">
                    <a className={`navbar-ul-a modal${modalOpen ? " clicked" : ""}`} onClick={() => modalOpen ? close() : open()}>
                        <li>Our Products</li>
                        <svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 1L4 4L1 0.999999" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </a>
                    <a className="navbar-ul-a" target="_blank" href="https://discord.com/invite/radianceproject/"><li>Support</li></a>
                    <a className={`navbar-ul-a ${SubscriptionModalOpen ? " clicked" : ""}`} href="#" onClick={() => SubscriptionModalOpen ? closeSubscription() : openSubscription()}>
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.5249 14.235H5.47491C5.15991 14.235 4.80741 13.9875 4.70241 13.6875L1.59741 5.00252C1.15491 3.75752 1.67241 3.37502 2.73741 4.14002L5.66241 6.23252C6.14991 6.57002 6.70491 6.39752 6.91491 5.85002L8.23491 2.33252C8.65491 1.20752 9.35241 1.20752 9.77241 2.33252L11.0924 5.85002C11.3024 6.39752 11.8574 6.57002 12.3374 6.23252L15.0824 4.27502C16.2524 3.43502 16.8149 3.86252 16.3349 5.22002L13.3049 13.7025C13.1924 13.9875 12.8399 14.235 12.5249 14.235Z" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M4.875 16.5H13.125" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M7.125 10.5H10.875" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <li>Buy Subscription</li>
                    </a>
                </ul>
            </div>
        </div>
    )
}