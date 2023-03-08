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
  const refSkillsElement = React.useRef(null);

  function mouseHover(e) {
    if (refBioElement.current.contains(e.target)) {
      refBioElement.current.classList.add("active");
      console.log(e.target);
    } else if (refTechnologiesElement.current.contains(e.target)) {
      refTechnologiesElement.current.classList.add("active");
    } else if (refSkillsElement.current.contains(e.target)) {
      refSkillsElement.current.classList.add("active");
    }
  }

  function mouseLeave(e) {
    if (refBioElement.current.contains(e.target)) {
      refBioElement.current.classList.remove("active");
    } else if (refTechnologiesElement.current.contains(e.target)) {
      refTechnologiesElement.current.classList.remove("active");
    } else if (refSkillsElement.current.contains(e.target)) {
      refSkillsElement.current.classList.remove("active");
    }
  }

  return (
    <div className="about-page">
      <h1 className="page-header">ABOUT</h1>
      <div className="profile">
        <div className="profile__large">
          <div
            className="profile__skills"
            ref={refSkillsElement}
            onMouseOver={mouseHover}
            onMouseOut={mouseLeave}
          >
            <div className="profile__skills-contents">
              <div className="profile__skills-item">
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
              <div className="profile__skills-item">
                <div className="profile__inner-box">
                  <img
                    className="profile__icon"
                    alt="Design icon"
                    src="./icons/design-white.svg"
                  ></img>
                </div>
                <h3 className="profile__item-heading">DYNAMIC DESIGN</h3>
                <p className="profile__text">
                  Strong User Interface design with a focus on clarity and ease
                  of use.
                </p>
              </div>
              <div className="profile__skills-item">
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
                  Efficient and effective problem-solving skills makes concepts
                  into reality.
                </p>
              </div>
              <div className="profile__skills-item">
                <div className="profile__inner-box">
                  <img
                    className="profile__icon"
                    alt="Communication icon"
                    src="./icons/communication-white.svg"
                  ></img>
                </div>
                <h3 className="profile__item-heading">CLEAR COMMUNICATION</h3>
                <p className="profile__text">
                  Client-driven approach ensures results match expectations.
                </p>
              </div>
            </div>
            <div className="profile__info">
              <h1 className="profile__heading">SKILLS</h1>
            </div>
          </div>
        </div>
        <div className="profile__small">
          <div
            className="profile__bio"
            ref={refBioElement}
            onMouseOver={mouseHover}
            onMouseOut={mouseLeave}
          >
            <div className="profile__bio-contents">
              <div className="profile__bio-left">
                <img
                  className="profile__img"
                  alt="A photograph of me"
                  src="./images/self.png"
                ></img>
                <div className="profile__bio-info">
                  <h3 className="profile__bio-label">Education:</h3>
                  <div className="profile__text-box">
                    <p className="profile__text">BA (Hons) Journalism</p>
                  </div>
                  <h3 className="profile__bio-label">Resume:</h3>
                  <div className="profile__text-box">
                    <p className="profile__text">Click here to download</p>
                  </div>
                </div>
              </div>
              <div className="profile__bio-right">
                <div className="profile__bio-summary">
                  <h2 className="profile__section-heading">Guy Shrigley</h2>
                  <div className="profile__text-box">
                    <p className="profile__text">
                      I'm a UK-based front-end developer and content creator.
                      <br></br>
                      <br></br>
                      My passion is integrating creativity with technology to
                      create impactful and intuitive web sites and apps.
                    </p>
                  </div>
                </div>
                <div className="profile__bio-about">
                  <h3 className="profile__sub-heading">About Me</h3>
                  <div className="profile__text-box">
                    <p className="profile__text">
                      My web development journey began with curiosity. I built
                      simple websites at first. Pure HTML and CSS. Gradually
                      over time these simple pages became not so simple.
                      Eventually HTML and CSS weren't enough for what I wanted
                      to make. I tried my hand at basic games and then more
                      elaborate applications using basic Javascript.
                      <br></br>
                      <br></br>
                      What appealed to me the most about web development was how
                      it changed my perspective. Learning how to code taught me
                      how to approach problems as a series of puzzles and to
                      solve those problems methodically and logically, a skill
                      that I could apply to other parts of life as well.
                      <br></br>
                      <br></br>
                      It wasn't long before I came to the decision to turn my
                      newfound interest into something more. There was an
                      opportunity to be had. A chance to take the skills I'd
                      learnt for fun and apply them to a meaningful career. A
                      chance to turn passion into purpose.
                      <br></br>
                      <br></br>I spent the following year building my knowledge
                      and honing my skills. It was daunting at first. There was
                      so much to learn and so many uncertainties. But with
                      stubborn perseverance and plenty of discipline I was able
                      to reach a point where I felt confident I had something to
                      offer and the means to deliver it.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="profile__info">
              <h1 className="profile__heading">WHO AM I?</h1>
            </div>
          </div>
          <div className="profile__links">
            <div className="profile__links-contents">
              <div className="profile__links-item">
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
              <div className="profile__links-item">
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
              <div className="profile__links-item">
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
              <div className="profile__tech">
                <IconHtml5 />
                <h2>HTML</h2>
              </div>
              <ul className="profile__concept-list">
                <li className="profile__concept">
                  Skilled in the use of Semantic markup in building web pages
                </li>
                <li className="profile__concept">
                  Well-versed in BEM methodology conventions
                </li>
              </ul>
              <div className="profile__tech">
                <IconCss3 />
                <h2>CSS</h2>
              </div>
              <ul className="profile__concept-list">
                <li className="profile__concept">
                  Experienced at Responsive and Mobile-first design to create
                  dynamic web content across all device types
                </li>
              </ul>
              <div className="profile__tech">
                <IconLogoJavascript />
                <h2>JAVASCRIPT</h2>
              </div>
              <ul className="profile__concept-list">
                <li className="profile__concept">
                  Experienced at DOM manipulation using Javascript
                </li>
                <li className="profile__concept">
                  Thorough understanding of Scope, Prototypes and Inheritance,
                  Bubbling and Capturing, Type coercion, Polymorphism,
                  Encapsulation, and Hoisting
                </li>
                <li className="profile__concept">
                  Adept at using Asynchronous methods and Callback functions,
                  and Destructuring to create clean and efficient code{" "}
                </li>
              </ul>
              <div className="profile__tech">
                <IconReact />
                <h2>REACT</h2>
              </div>
              <ul className="profile__concept-list">
                <li className="profile__concept">
                  Detailed knowledge of Hooks and State management
                </li>
                <li className="profile__concept">
                  Hands-on experience with Styled-components, File-loader,
                  React-router, and Drag-and-drop libraries
                </li>
              </ul>
              <div className="profile__tech">
                <IconLanguagePhp />
                <h2>PHP AND WORDPRESS</h2>
              </div>
              <ul className="profile__concept-list">
                <li className="profile__concept">
                  Familiar with the use of PHP in Wordpress development and
                  other applications
                </li>
              </ul>
              <div className="profile__tech">
                <IconBootstrap />
                <h2>BOOTSTRAP</h2>
              </div>
              <ul className="profile__concept-list">
                <li className="profile__concept">
                  Familiar with the syntax and functionality of the Bootstrap
                  CSS library
                </li>
              </ul>
              <div className="profile__tech">
                <IconJquery />
                <h2>JQUERY</h2>
              </div>
              <ul className="profile__concept-list">
                <li className="profile__concept">
                  Familiar with the syntax and functionality of the JQuery
                  library
                </li>
              </ul>
              <div className="profile__tech">
                <IconNodejs />
                <h2>NODE.JS</h2>
              </div>
              <ul className="profile__concept-list">
                <li className="profile__concept">
                  Well-versed in the use of the Node.JS environment for building
                  applications
                </li>
              </ul>
              <div className="profile__tech">
                <IconJson />
                <h2>JSON</h2>
              </div>
              <ul className="profile__concept-list">
                <li className="profile__concept">
                  Thorough understanding of the JSON format and its uses in data
                  storage, transmission and manipulation
                </li>
              </ul>
              <div className="profile__tech">
                <IconApi />
                <h2>RESTFUL APIS</h2>
              </div>
              <ul className="profile__concept-list">
                <li className="profile__concept">
                  Experienced at dealing with RESTful APIs to request data and
                  generate content from responses
                </li>
              </ul>
              <div className="profile__tech">
                <IconGithub />
                <h2>GIT VERSION CONTROL</h2>
              </div>
              <ul className="profile__concept-list">
                <li className="profile__concept">
                  Experienced in the use of Git Version Control for managing
                  project updates and revisions
                </li>
              </ul>
              <div className="profile__tech">
                <IconNetlify />
                <h2>HOSTING AND DEPLOYMENT</h2>
              </div>
              <ul className="profile__concept-list">
                <li className="profile__concept">
                  Adept at hosting and deployment using the Netlify platform
                </li>
              </ul>
            </div>
            <div className="profile__info">
              <h1 className="profile__heading">TECH</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
