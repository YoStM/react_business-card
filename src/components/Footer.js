import React from 'react'

import instagram from '../Instagram-Outline_icon-icons.png';
import facebook from '../Facebook-Outline_icon-icons.png';
import github from '../Github-Outline_icon-icons.png';
import twitter from '../Twitter-Outline_icon-icons.png';


function Footer() {
  return (
    <footer className="footer-icons">
        <img src={twitter} alt="icone twitter" width="30px" height="30" className="icon--style"/>
        <img src={facebook} alt="icone facebook" width="30px" height="30" className="icon--style" />
        <img src={instagram} alt="icone instagram" width="30px" height="30" className="icon--style" />
        <img src={github} alt="icone github" width="30px" height="30" className="icon--style" />
    </footer>
  )
}

export default Footer;