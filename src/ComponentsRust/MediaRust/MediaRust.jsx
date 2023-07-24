import React from "react";
import { motion, AnimatePresence, useTransform, useMotionValue, useSpring } from "framer-motion";

import Backdrop from "../../Components/Navbar/modals/Backdrop";
import "./MediaRust.scss";

import modalClose from "../../images/modal_close.svg";
import loader1 from "../../images/cheat_1.png";
import loader2 from "../../images/cheat_2.png";
import loader3 from "../../images/cheat_3.png";
import loader4 from "../../images/cheat_4.png";
import loader5 from "../../images/cheat_5.png";
import loader6 from "../../images/cheat_6.png";
import loader7 from "../../images/cheat_7.png";
import loader8 from "../../images/cheat_8.png";

export default function MediaRust() {

    let mediaRustRef = React.useRef();
    let slider = React.useRef();
    let innerSlider = React.useRef();
    let containerSliderRef = React.useRef();
    let [width, setWidth] = React.useState(0);
    let [imagePreview, setImagePreview] = React.useState(1);
    let [galleryOpen, setGalleryOpen] = React.useState(false);
    let [nonClickable, setNonClickable] = React.useState(false);

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
        
        observer.observe(mediaRustRef.current)
    }, [])
    
    function imageGalleryOpen() {
        if(nonClickable === false){
            setGalleryOpen(true)
            document.body.setAttribute("overflow", "hidden")
        }
    }

    function imageGalleryClose() {
        setGalleryOpen(false)
        document.body.setAttribute("overflow", "visible")
    }

    let x = useMotionValue(0);

    React.useEffect(() => {
        function scrollCalc() {
            let sliderWidth = slider.current.clientWidth;
            let innerSliderWidth = innerSlider.current.scrollWidth;
            setWidth(sliderWidth - innerSliderWidth);
        }
        window.addEventListener("resize", scrollCalc);
        scrollCalc()
        return () => window.removeEventListener("resize", scrollCalc);
    }, [])

    const progress = useSpring(useTransform(x, [0, width], [0, 400]), {
        stiffness: 1000,
        damping: 100,
        mass: 1,
    });

    function imageSet(){
        if(imagePreview === 1) {
            return <img src={loader1} draggable="false" alt="" />
        }else if(imagePreview === 2) {
            return <img src={loader2} draggable="false" alt="" />
        }else if(imagePreview === 3) {
            return <img src={loader3} draggable="false" alt="" />
        }else if(imagePreview === 4) {
            return <img src={loader4} draggable="false" alt="" />
        }else if(imagePreview === 5) {
            return <img src={loader5} draggable="false" alt="" />
        }else if(imagePreview === 6) {
            return <img src={loader6} draggable="false" alt="" />
        }else if(imagePreview === 7) {
            return <img src={loader7} draggable="false" alt="" />
        }else if(imagePreview === 8) {
            return <img src={loader8} draggable="false" alt="" />
        }
    }

    function galleryLeftButton(){
        let imageId = imagePreview;
        let newImageId = imageId - 1;
        if (newImageId === 0) newImageId = 8;
        setImagePreview(newImageId);
    }
    function galleryRightButton(){
        let imageId = imagePreview;
        let newImageId = imageId + 1;
        if (newImageId === 9) newImageId = 1;
        setImagePreview(newImageId);
    }

    return(
        <div className="media-rust box">
            <div className="container" ref={mediaRustRef}>

                <div className="box-gradient"></div>

                <div className="media-rust-title">
                    Screenshots
                </div>
                <motion.div className="media-rust-slider" ref={slider}>
                    <div className="media-inner-slider-container" ref={containerSliderRef}>
                    <motion.div 
                        className="media-rust-inner-slider"
                        whileTap={{ cursor:"grabbing" }}
                        dragConstraints={containerSliderRef}
                        drag="x"
                        onDragStart={() => setNonClickable(false)}
                        onDragEnd={() => setNonClickable(true)}
                        onMouseUp={() => setNonClickable(false)}
                        ref={innerSlider}
                        style={{ x }}
                        key={width}
                    >
                        <div className="media-rust-image" id-animation="1"><img draggable="false" src={loader1} 
                            onMouseUp={() => {
                                setImagePreview(1) 
                                imageGalleryOpen()
                            }}
                             alt="" /></div>
                        <div className="media-rust-image" id-animation="2"><img draggable="false" src={loader2} 
                            onMouseUp={() => {
                                setImagePreview(2) 
                                imageGalleryOpen()
                            }}
                             alt="" /></div>
                        <div className="media-rust-image" id-animation="3"><img draggable="false" src={loader3} 
                            onMouseUp={() => {
                                setImagePreview(3) 
                                imageGalleryOpen()
                            }}
                             alt="" /></div>
                        <div className="media-rust-image" id-animation="4"><img draggable="false" src={loader4} 
                            onMouseUp={() => {
                                setImagePreview(4) 
                                imageGalleryOpen()
                            }}
                             alt="" /></div>
                        <div className="media-rust-image" id-animation="5"><img draggable="false" src={loader5} 
                            onMouseUp={() => {
                                setImagePreview(5) 
                                imageGalleryOpen()
                            }}
                             alt="" /></div>
                        <div className="media-rust-image" id-animation="6"><img draggable="false" src={loader6} 
                            onMouseUp={() => {
                                setImagePreview(6) 
                                imageGalleryOpen()
                            }}
                             alt="" /></div>
                        <div className="media-rust-image" id-animation="7"><img draggable="false" src={loader7} 
                            onMouseUp={() => {
                                setImagePreview(7) 
                                imageGalleryOpen()
                            }}
                             alt="" /></div>
                        <div className="media-rust-image" id-animation="8"><img draggable="false" src={loader8} 
                            onMouseUp={() => {
                                setImagePreview(8) 
                                imageGalleryOpen()
                            }}
                             alt="" /></div>          
                    </motion.div>
                    </div>
                </motion.div>
                <div className="media-slider-indicator-container">
                    <div className="media-slider-indicator">
                        <motion.div className="media-slider-indicator-inner" style={{translateX: progress}}></motion.div>
                    </div>
                </div>

                <AnimatePresence initial={false}>
                    {
                        galleryOpen &&
                        <Backdrop closeAnimation={imageGalleryClose}>
                            <div className="image-gallery-container">
                                <span className="gallery-button gallery-button-left" draggable="false" onClick={(e) => {
                                    e.stopPropagation();
                                    galleryLeftButton();
                                }} style={{rotate: "180deg"}}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M23.91,16,10.21,29.71,8.79,28.29,21.09,16,8.79,3.71l1.42-1.42Z" fill="#fff"/></svg>
                                </span>
                                <AnimatePresence mode="wait">
                                    
                                        <motion.div 
                                            draggable="false"
                                            className="galley-image-box" 
                                            onClick={(e) => e.stopPropagation()}
                                            initial={{opacity: 0}} 
                                            animate={{opacity:1}} 
                                            exit={{opacity: 0}} 
                                            key={imagePreview}
                                        >
                                            {imageSet()}
                                        </motion.div>
                                    
                                </AnimatePresence>
                                    <span className="gallery-image-counter">
                                        <AnimatePresence mode="wait">
                                            <motion.span   
                                                initial={{opacity: 0}} 
                                                animate={{opacity:1}} 
                                                exit={{opacity: 0}} 
                                                key={imagePreview}
                                                >
                                                {imagePreview}
                                            </motion.span>
                                        </AnimatePresence>
                                        <span>/8</span>
                                    </span>

                                <span className="gallery-button gallery-button-right" draggable="false" onClick={(e) => {
                                    e.stopPropagation();
                                    galleryRightButton();
                                }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M23.91,16,10.21,29.71,8.79,28.29,21.09,16,8.79,3.71l1.42-1.42Z" fill="#fff"/></svg>
                                </span>
                                <span className="gallery-modal-close" draggable="false" onClick={(e) => {
                                    e.stopPropagation();
                                    imageGalleryClose();
                                }}>
                                    <img src={modalClose} alt="" />
                                </span>
                            </div>
                        </Backdrop>
                    }
                </AnimatePresence>

            </div>
        </div>
    )
}