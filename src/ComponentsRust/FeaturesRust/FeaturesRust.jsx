import React from "react";
import { motion, AnimatePresence } from "framer-motion";

import "./FeaturesRust.scss";

export default function FeaturesRust({rerenderValue}) {

    let featureContentRef = React.useRef();
    let [height, setHeight] = React.useState(0);

    React.useEffect(() => {
        function getShowHeight(){
            let ref = featureContentRef.current;
            let currentHeight = ref.scrollHeight
            setHeight(currentHeight);
        }
        getShowHeight()
        window.addEventListener("resize", getShowHeight);
        return () => window.removeEventListener("resize", getShowHeight);
    }, [])

    let [showToggle, setShowToggle] = React.useState(true);


    return(
        <div className="features-rust box">
            <div className="container" style={{maxHeight: `${showToggle ? "320px" : height+"px"}`}}>
                <div className="features-title">
                    Functionalty
                </div>
                <div className="feature-content-container" ref={featureContentRef}>
                    <div className="feature-content-box">
                        <div className="feature-content-title">
                            Aim
                        </div>
                        <div className="feature-content-features">
                            {`- Toggle
                        - Targets (Player/NPC/Attack Heli/Wounded/Sleepers)
                        - Target Bone (Randomize/Randomize NoHead/Etc bones)
                        - Target Snapline (Customizable Color)
                        - Select Target (Bind Hotkey)
                        - Draw Fov (Customizable Color)
                        - Aim Fov (0-1000) 
                        - Prediction Dot  

                        - PSilent (Always/Bind Hotkey)
                            - PSilent Melee Throw
                            - PSilent Visible Only
                            - PSilent Radius Hitchance (0-100)
                            - PSilent Custom Spread (0.0-1.0)
                        
                        - Silent Melee (Always/Bind Hotkey)
                            - Targets (Resources/Player&NPC)
                        
                        - Desync (Bind Hotkey)
                            - Autostop
                            - Autoshot
                            - Powershot
                            - Min Bullet Queue
                            - Max Bullet Queue
                            - Instant Hit
                            - Extend On Mountable
                            - Customize Max Desync Time (0.0-1.0)
                            - SavePosition
                            - RapidFire

                        - Bullet TP
                            - Distance (Small/Medium/Large/Extreme)
                            - Desync Bullet TP Visible Check
                            - PSilent Bullet TP Visible Check
                            - Visible Check Angles (1-15)
                            - Extend For Mountable
                            - Extend For Heli
                            - Closest Bone (All/NoHead)

                        - Autoshoot (In Fov/All)
                            - Extended (Low Performance With Check Bullet TP)
                            - Check Bullet TP`.replaceAll("/", " / ").split("- ").map((e,i) => {
                                if(i === 0 ) return
                                return <span key={"feature-aim-"+i}>{"-" + e}</span>
                            })}
                        </div>    
                    </div>
                    <div className="feature-content-box">
                        <div className="feature-content-title">
                            Weapon
                        </div>
                        <div className="feature-content-features">
                            {`- Recoil X (0.0-1.0)
                                - Recoil Y (0.0-1.0)
                                - Spread (0.0-1.0)
                                - RandomizeRecoil
                                - RandomizeSpread
                                - Disable Aim Sway
                                - Automatic
                                - Bullet Speed Scale (0.6-1.45)
                                - Melee Distance Scale (0-1.5)
                                - Change Effect Scale Bullet (0-10)
                                - Silent Reload
                                - Bullet Pierce
                                - Shoot Through Friends
                                - Shoot Through Wounded
                                - Instant Eoka
                                - Instant Charge Compound Bow
                                - Attack On Mountable
                                - Show Rocket Hitpoint
                                - Show Grenade Trajectory
                                - Show Explosive Trajectory
                                - Fake Shots (Bind Hotkey)
                                - Always CanAttack
                                - Bullet Tracers
                                    - Time
                                    - Intensive
                                - NoAnimation
                                - RapidFire  

                                - Hand Chams
                                    - Arms 
                                    - Type (Filled/Wireframe/Wire Rainbow/Trippy/Golden/Candy)
                                    - Color
                                    - Transparent (0.0-1.0)
                                    - Weapon
                                    - Type (Filled/Wireframe/Wire Rainbow/Trippy/Golden/Candy)
                                    - Color
                                    - Transparent (0.0-1.0)`.replaceAll("/", " / ").split("- ").map((e,i) => {
                                if(i === 0 ) return
                                return <span key={"feature-weapon-"+i}>{"-" + e}</span>
                            })}
                        </div>    
                    </div>
                    <div className="feature-content-box">
                        <div className="feature-content-title">
                            Visuals
                        </div>
                        <div className="feature-content-features">
                            {`- Toggle
                                - Players (Customizable Color)
                                - NPC (Customizable Color/Max Distance)
                                - Sleepers (Customizable Color)
                                - Weapon (Customizable Color)
                                - Box (3D/2D/Corner) Customizable Color)
                                - Fill Box (Customizable Color)
                                - Enemies (Customizable Color)
                                - Friends (Customizable Color)
                                - Wounded (Customizable Color)
                                - Unvisible (Customizable Color)
                                - Mountable Color
                                - Skeleton (Customizable Color)
                                - Names
                                - Player Team (Customizable Color)
                                - Distance
                                - HealthBar (2D/3D)
                                - Directions
                                - Show Player Belt (Customizable Screen Position)
                                - Show Player Wear (Customizable Screen Position)
                                - Icons Belt/Wear Scale (0.1-10.0)
                                - Chams (Filled/XRay/Visible Only (Filled/Xray))
                                    - Chams Visible/Unvisible Color
                                    - Always Visible`.replaceAll("/", " / ").split("- ").map((e,i) => {
                                if(i === 0 ) return
                                return <span key={"feature-visuals-"+i}>{"-" + e}</span>
                            })}
                        </div>    
                    </div>
                    <div className="feature-content-box">
                        <div className="feature-content-title">
                            World Esp
                        </div>
                        <div className="feature-content-features">
                            {`- Radar
                                - Draw Directions
                                - Radius (10-400)
                                - Scale (0.1-10)
                                - Entity Size (1-10)
                            - Bright Night and Caves
                            - OutFov
                                - Fov Amount (0-700)
                                - Arrow Size (1-50)
                            - No Rain,Fog,Grass
                            - Change Sky Color (Customizable Color)
                            - Time Changer
                            
                            - World Items
                                - Other (Attack Heli/BradleyAPC/Corpse/Backpack/SupplyDrop/Animal/Drone)
                                - Collectibles (Resources/Hemp/Food/Diesel)
                                - Ores (StoneOre/SulfurOre/MetalOre)
                                - Berries
                                - Transport (Minicopter/ScrapHelicopter/Rhib/Rowboat...)
                                - Deployed (Sleeping Bag/Bed/Tc/Coffin/Large,Small Box/WindTurbine...)
                                - Traps (Snap/AutoTurret/Samsite...)
                                - Crates (Elite/Military/Hack Crate)
                                - Drop Items(All/Weapon/Constructions/Food...)
                                - DropItemsChams
                                - Raids (Customizable Color)
                                - Max Distance For Each Item
                                - Show Distance/Health/AuthList...`.replaceAll("/", " / ").split("- ").map((e,i) => {
                                if(i === 0 ) return
                                return <span key={"feature-esp-"+i}>{"-" + e}</span>
                            })}
                        </div>    
                    </div>
                    <div className="feature-content-box">
                        <div className="feature-content-title">
                            Settings
                        </div>
                        <div className="feature-content-features">
                            {`- PlayerList (SteamID/Name/Relation)
                                - Copy SteamID
                                - Set Relation Group(Neutral/Friend/Enemy)
                            - Insert From Clipboard (Adds a new Player in list if you have SteamID in clipboard)
                            - Clear Relations Groups On Reconnect
                            - Disable Game Input In Menu
                            - Esp Text Size (5-30)
                            - Esp Fonts (Pixel/Default)
                            - Block Server Commands
                            
                            - Configs
                                - Save/Load (Rage/Legit/Extra)`.replaceAll("/", " / ").split("- ").map((e,i) => {
                                if(i === 0 ) return
                                return <span key={"feature-settings-"+i}>{"-" + e}</span>
                            })}
                        </div>    
                    </div>
                </div>
                <div className="show-more-less">
                    <span onClick={() => {
                        setShowToggle(!showToggle);
                        rerenderValue();
                    }}>
                        <AnimatePresence mode="wait">
                            <motion.span
                                initial = {{opacity: 0}}
                                animate = {{opacity: 1}}
                                exit = {{opacity: 0}}
                                key={showToggle}
                                >
                                {showToggle ? "Show More" : "Show Less"}
                            </motion.span>
                        </AnimatePresence>

                    </span>
                </div>
            </div>
        </div>
    )
}