import React from "react";

import "./HeroRust.scss";

import logo from "../../images/otkis.gif";
import heroGlow from "../../images/hero_glow.webp";

export default function HeroRust(){

    let [link, setLink] = React.useState("");

    let apiKey = "AIzaSyCtVAy2Cck4Us9apXs06pisz2doKUf_IIE";
    let channelId = "UCdUvCzypuYbsAaJEMyOLPyQ";

    React.useEffect(() => {
        async function getVideoLink(){
            try{
                let json = await fetch(`https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=1`);
                let parsed = await json.json();
                setLink(await (parsed?.items[0]?.id?.videoId))
            }
            catch(e){
                console.error("Quota Exceeded")
                setLink("7n6-WWYnqTI");
            }
        }
        getVideoLink()
    }, [])


    return(
        <div className="hero-rust box">
            <div className="container">
                <div className="hero-bg-img-box">
                    <img src={heroGlow} alt="" />
                </div>
                <div className="hero-rust-left">
                    <div className="hero-rust-left-title">
                        <div className="hero-rust-left-top">
                            <img src={logo} alt="" />
                            <div className="hero-rust-left-title-text">
                                <h2>Radiance Software</h2>
                                <div className="hero-rust-left-title-text-game">
                                    <span>Game:</span><span>Rust</span>
                                </div>
                            </div>
                        </div>
                        <p className="hero-rust-left-subtitle">
                            Dominance over the enemy is always very exciting, and we give you the opportunity to be Allah in this game.
                        </p>
                    </div>
                    <div className="hero-rust-requirements">
                        <span className="requirements-title">System Requirements</span>
                        <div className="requirements-box">
                            <div className="requirement">
                                <span className="requirement-title">Status</span>
                                <span className="requirement-text requirement-status">Undetected</span>
                            </div>
                            <div className="requirement">
                                <span className="requirement-title">CPU</span>
                                <span className="requirement-text">Intel, AMD</span>
                            </div>
                            <div className="requirement">
                                <span className="requirement-title">System</span>
                                <span className="requirement-text">Windows 10</span>
                            </div>
                            <div className="requirement">
                                <span className="requirement-title">Spoofer</span>
                                <span className="requirement-text">Yes</span>
                            </div>
                            <div className="requirement">
                                <span className="requirement-title">Game Client</span>
                                <span className="requirement-text">Steam</span>
                            </div>
                            <div className="requirement">
                                <span className="requirement-title">Game Mode</span>
                                <span className="requirement-text">All</span>
                            </div>
                        </div>
                    </div>
                    <a href="#rust-prices" className="hero-rust-prices-btn">Go To Prices</a>
                </div>
                <div className="hero-rust-right">
                    <div className="hero-rust-right-title">
                        Latest Video
                    </div>
                    <div className="hero-rust-video-box" style={{paddingBottom: "56.25%", position:"relative"}}>
                        <iframe width="100%" height="100%" 
                            style={{position:"absolute",
                                top:"0",
                                left:"0",
                                width:"100%",
                                height:"100%"}}
                            src={`https://www.youtube.com/embed/${link}?showinfo=0&rel=0&cc_load_policy=3&fs=0&iv_load_policy=3&modestbranding=1&autohide=1`} title="xkudive gay" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share">
                        </iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}