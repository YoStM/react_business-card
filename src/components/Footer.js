import React from 'react'

import instagram from '../Instagram-Outline_icon-icons.png';
import facebook from '../Facebook-Outline_icon-icons.png';
import github from '../Github-Outline_icon-icons.png';
import twitter from '../Twitter-Outline_icon-icons.png';


function Footer() {
  return (
    <footer className="footer-icons">
        <a href="https://twitter.com/YohanStMartin" target="_blank" rel="noopener noreferrer">
            <img src={twitter} alt="icone twitter" width="35px" height="35px" className="icon--style"/>
        </a>

        <img src={facebook} alt="icone facebook" width="35px" height="35px" className="icon--style" />

        <img src={instagram} alt="icone instagram" width="35px" height="35px" className="icon--style" />

        <a href="https://github.com/YoStM" target="_blank" rel="noopener noreferrer">
        <img src={github} alt="icone github" width="35px" height="35px" className="icon--style" />
        </a>
    </footer>
  )
}

export default Footer;