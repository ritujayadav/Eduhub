import React from "react";
import "./Nav.css";

import NavLink from "./../UI/NavLink/NavLinks";

export default function Nav(props) {
  return (
    <nav className="header__nav">
      <ul className="header__ul">
        <NavLink href="/section">Start</NavLink>
        <NavLink href="/about">About</NavLink>
        <NavLink href="/quiz">Quiz</NavLink>
        <NavLink href="/lecture">Videos</NavLink>
        <NavLink href="/blogs">Blog</NavLink>
        <NavLink href="/student">Student</NavLink>
        <NavLink href="/teacher">Teacher</NavLink>
        
        <a href="http://localhost:3000/" style={{ textDecoration: 'none', color: 'white', fontWeight: 'bold', fontSize: '1.4rem', marginRight: '10px' }}>Transcript</a>

        <a href="/translate" style={{ textDecoration: 'none', color: 'white', fontWeight: 'bold', fontSize: '1.4rem' }}>Translate</a>

        {/* <NavLink href="/guidance">Guidance</NavLink> 
         <NavLink href="/Feature_Teacher">Features</NavLink>
        */}
        
        <NavLink href="/faq">FAQ</NavLink>
      </ul>
    </nav>
  );
}
