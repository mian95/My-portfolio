import React, { useRef, useState } from "react";
import "./Navbar.css";
import underline from "../../assets/nav_underline.svg";
import AnchorLink from 'react-anchor-link-smooth-scroll';


function Navbar() {
    // state
    const [manu, setManu] = useState("about ");
    // ref
    const menuRef = useRef();

    const openManu = () => {
        menuRef.current.style.right = '0';
    }

    const closeManu = () => {
        menuRef.current.style.right = '-320px';
    }

    return (
        <div id="navbar" className="navbar">
            <h1>Umair</h1>
            <button onClick={openManu} className="nav-open-icon  material-symbols-outlined">
                        menu
            </button>
            <ul ref={menuRef} className="nav-manu">
                <button onClick={closeManu} className="nav-close-icon  material-symbols-outlined">
                        close
                </button>
                <li>
                    <AnchorLink href="#home" className="anchor-link"  >
                        <p onClick={() => setManu("home")}>Home</p></AnchorLink>
                    {manu === "home" ? <img src={underline} alt="" /> : <> </>}
                </li>
                <li> <AnchorLink href="#about" className="anchor-link" offset={50} >
                    <p onClick={() => setManu("about")}>About</p></AnchorLink>
                    {manu === "about" ? <img src={underline} alt="" /> : <> </>}
                </li>
                <li><AnchorLink href="#services" className="anchor-link" offset={50} >
                    <p onClick={() => setManu("services")}>Services</p></AnchorLink>
                    {manu === "services" ? <img src={underline} alt="" /> : <> </>}
                </li>
                <li> <AnchorLink href="#work" className="anchor-link" offset={50} >
                    <p onClick={() => setManu("work")}>Portfolio</p></AnchorLink>
                    {manu === "work" ? <img src={underline} alt="" /> : <> </>}
                </li>
                <li><AnchorLink href="#contact" className="anchor-link" offset={50} >
                    <p onClick={() => setManu("contact")}>Contact</p></AnchorLink>
                    {manu === "contact" ? <img src={underline} alt="" /> : <> </>}
                </li>
            </ul>
            <div className="nav-connect"><AnchorLink href="#contact" className="anchor-link" offset={50} >
                <p onClick={() => setManu("contact")}>Connect</p></AnchorLink></div>
        </div>
    );
}

export default Navbar;
