import React from "react";
import githubIcon from "../../assets/images/github-logo.png";
import linkedinIcon from "../../assets/images/linkedinlogo.png";

const socialLinks = () => {
    return (
        <footer className="container">
            <p className="copy col">
                &copy; 2022 Madison Mulligan
            </p>
            <div className="git-cont">
                <a href="https://github.com/maddyrae9">
                    <img className="git" src={githubIcon} alt="github icon"/>
                </a>
            </div>
            <div className="linkedin-cont">
                <a href="https://www.linkedin.com/in/madison-mulligan-a7b1651b5/">
                <img className="linkedin" src={linkedinIcon} alt="linkedin icon" />
                </a>
            </div>
        </footer>
    );
};
export default socialLinks;