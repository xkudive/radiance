import React from "react";
import { motion, AnimatePresence, useTransform, useMotionValue, useSpring } from "framer-motion";

import Backdrop from "../../Components/Navbar/modals/Backdrop";
import "./MediaRust.scss";

import modalClose from "../../images/modal_close.svg";
import arrowGallery from "../../images/arrow.svg";
import loader1 from "../../images/cheat_1.jpg";
import loader2 from "../../images/cheat_2.jpg";
import loader3 from "../../images/cheat_3.jpg";
import loader4 from "../../images/cheat_4.jpg";
import loader5 from "../../images/cheat_5.jpg";
import loader6 from "../../images/cheat_6.jpg";
import loader7 from "../../images/cheat_7.jpg";
import loader8 from "../../images/cheat_8.jpg";

export default function MediaRust() {

    let mediaRustRef = React.useRef();
    let slider = React.useRef();
    let innerSlider = React.useRef();
    let containerSliderRef = React.useRef();
    let indicatorRef = React.useRef();
    let indicatorInnerRef = React.useRef();
    let [width, setWidth] = React.useState(0);
    let [imagePreview, setImagePreview] = React.useState(1);
    let [galleryOpen, setGalleryOpen] = React.useState(false);
    let [nonClickable, setNonClickable] = React.useState(false);
    let [indicatorWidth, setIndicatorWidth] = React.useState(0);
    let [indicatorScroll, setIndicatorScroll] = React.useState(0);

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

    React.useEffect(() => {
        function getSliderWidth(){
            let width = indicatorRef.current.clientWidth / 2.3
            let scroll = indicatorRef.current.clientWidth - width
            setIndicatorWidth(width)
            setIndicatorScroll(scroll)
        }
        getSliderWidth()
        window.addEventListener("resize", getSliderWidth);
        return () => window.removeEventListener("resize", getSliderWidth);
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

    const progress = useSpring(useTransform(x, [0, width], [0, indicatorScroll]), {
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
                    <div className="media-slider-indicator" ref={indicatorRef}>
                        <motion.div className="media-slider-indicator-inner" ref={indicatorInnerRef} style={{translateX: progress, width: indicatorWidth+"px"}}></motion.div>
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
                                    <img src={arrowGallery} alt="" />
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
                                    <img src={arrowGallery} alt="" />
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