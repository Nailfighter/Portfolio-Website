import React from "react";
import "./scss/Header.scss";

const Header = () => {
  return (
    <header className="header">
      <a href="/" className="header-logo">
        SS
      </a>
      <div className="header-menu">
        <a href="#projects">PROJECTS</a>
        <a href="/Shreyansh_Sahu_Resume.pdf" download>
          RESUME
        </a>
        <a href="#about">ABOUT</a>
      </div>
      <section className="header-social">
        <a href="https://github.com/Nailfighter" target="_blank">
          <img src="/github-icon-1.svg" alt="github" />
        </a>
        <a href="https://www.linkedin.com/in/shreyanshsahu047/" target="_blank">
          <img src="/linkedin-icon-2.svg" alt="linkedin" />
        </a>
      </section>
    </header>
  );
};

export default Header;
