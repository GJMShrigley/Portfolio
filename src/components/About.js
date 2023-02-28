import React from "react";
import IconHtml5 from "./IconHTML5";
import IconCss3 from "./IconCSS3";
import IconLogoJavascript from "./IconLogoJavascript";
import IconReact from "./IconReact";
import IconBootstrap from "./IconBootstrap";
import IconGithub from "./IconGithub";
import IconLanguagePhp from "./IconLanguagePhp";
import IconJquery from "./IconJquery";
import IconJson from "./IconJson";
import IconApi from "./IconApi";
import IconNodejs from "./IconNodejs";
import IconNetlify from "./IconNetlify";

export default function About() {
  const refBioElement = React.useRef(null);
  const refTechnologiesElement = React.useRef(null);

  function mouseHover(e) {
    if (refBioElement.current.contains(e.target)) {
      refBioElement.current.classList.add("active");
    } else if (refTechnologiesElement.current.contains(e.target)) {
      refTechnologiesElement.current.classList.add("active");
    }
  }

  function mouseLeave(e) {
    if (refBioElement.current.contains(e.target)) {
      refBioElement.current.classList.remove("active");
    } else if (refTechnologiesElement.current.contains(e.target)) {
      refTechnologiesElement.current.classList.remove("active");
    }
  }

  return (
    <div className="about-page">
      <h1 className="page-header">ABOUT</h1>
      <div className="profile">
        <div className="profile__skills">
          <div className="profile__contents">
            <div className="profile__item">
              <div className="profile__inner-box">
                <img
                  className="profile__icon"
                  alt="Copywriting icon"
                  src="./icons/writing-white.svg"
                ></img>
              </div>
              <h3 className="profile__item-heading">STRIKING COPYWRITING</h3>
              <p className="profile__text">
                Specialised at delivering professional, high-quality written
                content.
              </p>
            </div>
            <div className="profile__item">
              <div className="profile__inner-box">
                <img
                  className="profile__icon"
                  alt="Design icon"
                  src="./icons/design-white.svg"
                ></img>
              </div>
              <h3 className="profile__item-heading">DYNAMIC DESIGN</h3>
              <p className="profile__text">
                Strong User Interface design provides an effective User
                Experience with a focus on clarity and ease of use.
              </p>
            </div>
            <div className="profile__item">
              <div className="profile__inner-box">
                <img
                  className="profile__icon"
                  alt="Development icon"
                  src="./icons/development-white.svg"
                ></img>
              </div>
              <h3 className="profile__item-heading">
                HIGH-POWERED DEVELOPMENT
              </h3>
              <p className="profile__text">
                Efficient and effective problem-solving skills bring ideas to
                life in the browser.
              </p>
            </div>
            <div className="profile__item">
              <div className="profile__inner-box">
                <img
                  className="profile__icon"
                  alt="Communication icon"
                  src="./icons/communication-white.svg"
                ></img>
              </div>
              <h3 className="profile__item-heading">CLEAR COMMUNICATION</h3>
              <p className="profile__text">
                Client-driven approach and continuous feedback ensures results
                match expectations.
              </p>
            </div>
          </div>
          <div className="profile__info profile__info--large">
            <h1 className="profile__heading">SKILLS</h1>
          </div>
        </div>
        <div
          className="profile__bio"
          ref={refBioElement}
          onMouseOver={mouseHover}
          onMouseOut={mouseLeave}
        >
          <div className="profile__bio-contents">
            <img
              className="profile__img"
              alt="A photograph of me"
              src="./images/self.png"
            ></img>
            <div className="profile__bio-summary">
              <h2 className="profile__section-heading">Guy Shrigley</h2>
              <div className="profile__text-box">
                <p className="profile__text">
                  I'm a UK-based front-end developer and content creator.
                  <br></br>
                  <br></br>
                  My passion is integrating creativity with technology to create
                  impactful and intuitive web sites and apps.
                </p>
              </div>
            </div>
            <div className="profile__bio-info">
              <h3 className="profile__bio-label">Education:</h3>
              <p className="profile__text">BA (Hons) Journalism</p>
              <h3 className="profile__bio-label">Resume:</h3>
              <p className="profile__text">Click here to download</p>
            </div>
            <div className="profile__bio-about">
              <h3 className="profile__sub-heading">About Me</h3>
              <div className="profile__text-box">
                <p className="profile__text">
                  My web development journey began with curiosity. I built
                  simple websites at first. Pure HTML and CSS. Gradually over
                  time these simple pages became not so simple. Eventually HTML
                  and CSS weren't enough for what I wanted to make. I tried my
                  hand at basic games and then more elaborate applications using
                  basic Javascript.
                  <br></br>
                  <br></br>
                  What appealed to me the most about web development was how it
                  changed my perspective. Learning how to code taught me how to
                  approach problems as a series of puzzles and to solve those
                  problems methodically and logically, a skill that I could
                  apply to other parts of life as well.
                  <br></br>
                  <br></br>
                  It wasn't long before I came to the decision to turn my
                  newfound interest into something more. There was an
                  opportunity to be had. A chance to take the skills I'd learnt
                  for fun and apply them to a meaningful career. A chance to
                  turn passion into purpose.
                  <br></br>
                  <br></br>I spent the following year building my knowledge and
                  honing my skills. It was daunting at first. There was so much
                  to learn and so many uncertainties. But with stubborn
                  perseverance and plenty of discipline I was able to reach a
                  point where I felt confident I had something to offer and the
                  means to deliver it.
                </p>
              </div>
            </div>
          </div>
          <div className="profile__info">
            <h1 className="profile__heading">WHO AM I?</h1>
            <div className="profile__expand"></div>
          </div>
        </div>
        <div className="profile__links">
          <div className="profile__contents">
            <div className="profile__item">
              <a
                className="profile__inner-box"
                href="https://www.linkedin.com/in/gjmshrigley"
              >
                <img
                  className="profile__icon"
                  alt="Linkedin icon"
                  src="./icons/linkedin-white.svg"
                ></img>
              </a>
            </div>
            <div className="profile__item">
              <a
                className="profile__inner-box"
                href="https://github.com/GJMShrigley"
              >
                <img
                  className="profile__icon"
                  alt="Github icon"
                  src="./icons/github-white.svg"
                ></img>
              </a>
            </div>
            <div className="profile__item">
              <a
                className="profile__inner-box"
                href="mailto: gjmshrigley@gmail.com"
              >
                <img
                  className="profile__icon"
                  alt="Email icon"
                  src="./icons/mail-white.svg"
                ></img>
              </a>
            </div>
          </div>
          <div className="profile__info">
            <h1 className="profile__heading">LINKS</h1>
          </div>
        </div>
        <div
          className="profile__technologies"
          ref={refTechnologiesElement}
          onMouseOver={mouseHover}
          onMouseOut={mouseLeave}
        >
          <div className="profile__list">
            <h2 className="profile__tech">
              <IconHtml5 /> HTML
            </h2>
            <div className="profile__concept-list">
              <div className="profile__concept">
                Skilled in the use of Semantic markup in building web pages
              </div>
              <div className="profile__concept">
                Well-versed in BEM methodology conventions
              </div>
            </div>
            <h2 className="profile__tech">
              <IconCss3 /> CSS
            </h2>
            <div className="profile__concept-list">
              <div className="profile__concept">
                Experienced at Responsive and Mobile-first design to create
                dynamic web content across all device types
              </div>
            </div>
            <h2 className="profile__tech">
              <IconLogoJavascript /> JAVASCRIPT
            </h2>
            <div className="profile__concept-list">
              <div className="profile__concept">
                Experienced at DOM manipulation using Javascript
              </div>
              <div className="profile__concept">
                Thorough understanding of Scope, Prototypes and Inheritance,
                Bubbling and Capturing, Type coercion, Polymorphism,
                Encapsulation, and Hoisting
              </div>
              <div className="profile__concept">
                Adept at using Asynchronous methods and Callback functions, and
                Destructuring to create clean and efficient code{" "}
              </div>
            </div>
            <h2 className="profile__tech">
              <IconReact /> REACT
            </h2>
            <div className="profile__concept-list">
              <div className="profile__concept">
                Detailed knowledge of Hooks and State management
              </div>
              <div className="profile__concept">
                Hands-on experience with Styled-components, File-loader,
                React-router, and Drag-and-drop libraries
              </div>
            </div>
            <h2 className="profile__tech">
              <IconLanguagePhp /> PHP AND WORDPRESS
            </h2>
            <div className="profile__concept-list">
              <div className="profile__concept">
                Familiar with the use of PHP in Wordpress development and other
                applications
              </div>
            </div>
            <h2 className="profile__tech">
              <IconBootstrap /> BOOTSTRAP
            </h2>
            <div className="profile__concept-list">
              <div className="profile__concept">
                Familiar with the syntax and functionality of the Bootstrap CSS
                library
              </div>
            </div>
            <h2 className="profile__tech">
              <IconJquery /> JQUERY
            </h2>
            <div className="profile__concept-list">
              <div className="profile__concept">
                Familiar with the syntax and functionality of the JQuery library
              </div>
            </div>
            <h2 className="profile__tech">
              <IconNodejs /> NODE.JS
            </h2>
            <div className="profile__concept-list">
              <div className="profile__concept">
                Well-versed in the use of the Node.JS environment for building
                applications
              </div>
            </div>
            <h2 className="profile__tech">
              <IconJson /> JSON
            </h2>
            <div className="profile__concept-list">
              <div className="profile__concept">
                Thorough understanding of the JSON format and its uses in data
                storage, transmission and manipulation
              </div>
            </div>
            <h2 className="profile__tech">
              <IconApi /> RESTFUL APIS
            </h2>
            <div className="profile__concept-list">
              <div className="profile__concept">
                Experienced at dealing with RESTful APIs to request data and
                generate content from responses
              </div>
            </div>
            <h2 className="profile__tech">
              <IconGithub /> GIT VERSION CONTROL
            </h2>
            <div className="profile__concept-list">
              <div className="profile__concept">
                Experienced in the use of Git Version Control for managing
                project updates and revisions
              </div>
            </div>
            <h2 className="profile__tech">
              <IconNetlify /> HOSTING AND DEPLOYMENT
            </h2>
            <div className="profile__concept-list">
              <div className="profile__concept">
                Adept at hosting and deployment using the Netlify platform
              </div>
            </div>
          </div>
          <div className="profile__info">
            <h1 className="profile__heading">TECHNOLOGIES</h1>
            <div className="profile__expand"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
