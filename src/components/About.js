import React from "react";
import {
  IconApi,
  IconBootstrap,
  IconCss3,
  IconGithub,
  IconHtml5,
  IconJquery,
  IconJson,
  IconLanguagePhp,
  IconLogoJavascript,
  IconNetlify,
  IconNodejs,
  IconReact,
} from "./Icons";

export default function About() {
  const refBioElement = React.useRef(null);
  const refTechnologiesElement = React.useRef(null);
  const refSkillsElement = React.useRef(null);

  function mouseHover(e) {
    if (refBioElement.current.contains(e.target)) {
      refBioElement.current.classList.add("active");
      console.log("bio");
    } else if (refTechnologiesElement.current.contains(e.target)) {
      refTechnologiesElement.current.classList.add("active");
      console.log("tech", refTechnologiesElement, e, e.target);
    } else if (refSkillsElement.current.contains(e.target)) {
      refSkillsElement.current.classList.add("active");
      console.log("skills");
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
      <div className="container">
        <div className="element-single">
          <div
            className="box skills"
            ref={refSkillsElement}
            onMouseOver={mouseHover}
            onMouseOut={mouseLeave}
          >
            <div className="box-contents element-grid">
              <div className="grid-item">
                <div className="icon-box">
                  <img
                    className="icon"
                    alt="Copywriting icon"
                    src="./icons/writing-white.svg"
                  ></img>
                </div>
                <div className="grid-heading">STRIKING COPYWRITING</div>
                <div className="grid-text">
                  Specialised at delivering professional, high-quality written
                  content.
                </div>
              </div>
              <div className="grid-item">
                <div className="icon-box">
                  <img
                    className="icon"
                    alt="Design icon"
                    src="./icons/design-white.svg"
                  ></img>
                </div>
                <div className="grid-heading">DYNAMIC DESIGN</div>
                <div className="grid-text">
                  Strong User Interface design with a focus on clarity and ease
                  of use.
                </div>
              </div>
              <div className="grid-item">
                <div className="icon-box">
                  <img
                    className="icon"
                    alt="Development icon"
                    src="./icons/development-white.svg"
                  ></img>
                </div>
                <div className="grid-heading">HIGH-POWERED DEVELOPMENT</div>
                <div className="grid-text">
                  Efficient and effective problem-solving skills makes concepts
                  into reality.
                </div>
              </div>
              <div className="grid-item">
                <div className="icon-box">
                  <img
                    className="icon"
                    alt="Communication icon"
                    src="./icons/communication-white.svg"
                  ></img>
                </div>
                <div className="grid-heading">CLEAR COMMUNICATION</div>
                <div className="grid-text">
                  Client-driven approach ensures results match expectations.
                </div>
              </div>
            </div>
            <div className="box-label">
              <div className="box-heading">SKILLS</div>
            </div>
          </div>
        </div>
        <div className="element-group">
          <div
            className="box bio"
            ref={refBioElement}
            onMouseOver={mouseHover}
            onMouseOut={mouseLeave}
          >
            <div className="box-contents--flex">
              <div className="box-contents__top">
                <img
                  className="image"
                  alt="A photograph of me"
                  src="./images/self.png"
                ></img>
                <div className="text-wrapper">
                  <div className="contents-heading">Guy Shrigley</div>
                  <div className="contents-text">
                    I'm a UK-based front-end developer and content creator.
                  </div>
                </div>
              </div>
              <div className="box-contents__bottom">
                <div className="text-wrapper">
                  <div className="contents-heading">About Me</div>
                  <div className="contents-text">
                    From curiosity to career, programming changed my outlook. I
                    can change yours, too.
                    <br></br>
                    <br></br>
                    I'm a passionate freelancer with experience in responsive
                    web design. 
                    <br></br>
                    <br></br>
                    From creatives showcasing their talents to small
                    businesses seeking to hook their next customer, I work with
                    clients from the ground up to develop web pages and content
                    suited for their needs.
                  </div>
                </div>
              </div>
            </div>
            <div className="box-label">
              <div className="box-heading">PROFILE</div>
            </div>
          </div>
          <div
            className="box tech"
            ref={refTechnologiesElement}
            onMouseOver={mouseHover}
            onMouseOut={mouseLeave}
          >
            <div className="box-contents">
              <div className="box-list">
                <ul className="list-item">
                  <div className="list-item__label">
                    <div className="list-item__icon">
                      <IconHtml5 />
                    </div>
                    <div className="list-item__heading">HTML</div>
                  </div>
                  <li className="list-item__text">
                    Skilled in the use of Semantic markup in building web pages
                  </li>
                  <li className="list-item__text">
                    Well-versed in BEM methodology conventions
                  </li>
                </ul>
                <ul className="list-item">
                  <div className="list-item__label">
                    <div className="list-item__icon">
                      <IconCss3 />
                    </div>
                    <div className="list-item__heading">CSS</div>
                  </div>
                  <li className="list-item__text">
                    Experienced at Responsive and Mobile-first design to create
                    dynamic web content across all device types
                  </li>
                </ul>
                <ul className="list-item">
                  <div className="list-item__label">
                    <div className="list-item__icon">
                      <IconLogoJavascript />
                    </div>
                    <div className="list-item__heading">JAVASCRIPT</div>
                  </div>
                  <li className="list-item__text">
                    Experienced at DOM manipulation using Javascript
                  </li>
                  <li className="list-item__text">
                    Thorough understanding of Scope, Prototypes and Inheritance,
                    Bubbling and Capturing, Type coercion, Polymorphism,
                    Encapsulation, and Hoisting
                  </li>
                  <li className="list-item__text">
                    Adept at using Asynchronous methods and Callback functions,
                    and Destructuring to create clean and efficient code
                  </li>
                </ul>
                <ul className="list-item">
                  <div className="list-item__label">
                    <div className="list-item__icon">
                      <IconReact />
                    </div>
                    <div className="list-item__heading">REACT</div>
                  </div>
                  <li className="list-item__text">
                    Detailed knowledge of Hooks and State management
                  </li>
                  <li className="list-item__text">
                    Hands-on experience with Styled-components, File-loader,
                    React-router, and Drag-and-drop libraries
                  </li>
                </ul>
                <ul className="list-item">
                  <div className="list-item__label">
                    <div className="list-item__icon">
                      <IconLanguagePhp />
                    </div>
                    <div className="list-item__heading">PHP AND WORDPRESS</div>
                  </div>
                  <li className="list-item__text">
                    Familiar with the use of PHP in Wordpress development and
                    other applications
                  </li>
                </ul>
                <ul className="list-item">
                  <div className="list-item__label">
                    <div className="list-item__icon">
                      <IconBootstrap />
                    </div>
                    <div className="list-item__heading">BOOTSTRAP</div>
                  </div>
                  <li className="list-item__text">
                    Familiar with the syntax and functionality of the Bootstrap
                    CSS library
                  </li>
                </ul>
                <ul className="list-item">
                  <div className="list-item__label">
                    <div className="list-item__icon">
                      <IconJquery />
                    </div>
                    <div className="list-item__heading">JQUERY</div>
                  </div>
                  <li className="list-item__text">
                    Familiar with the syntax and functionality of the JQuery
                    library
                  </li>
                </ul>
                <ul className="list-item">
                  <div className="list-item__label">
                    <div className="list-item__icon">
                      <IconNodejs />
                    </div>
                    <div className="list-item__heading">NODE.JS</div>
                  </div>
                  <li className="list-item__text">
                    Well-versed in the use of the Node.JS environment for
                    building applications
                  </li>
                </ul>
                <ul className="list-item">
                  <div className="list-item__label">
                    <div className="list-item__icon">
                      <IconJson />
                    </div>
                    <div className="list-item__heading">JSON</div>
                  </div>
                  <li className="list-item__text">
                    Thorough understanding of the JSON format and its uses in
                    data storage, transmission and manipulation
                  </li>
                </ul>
                <ul className="list-item">
                  <div className="list-item__label">
                    <div className="list-item__icon">
                      <IconApi />
                    </div>
                    <div className="list-item__heading">RESTFUL APIS</div>
                  </div>
                  <li className="list-item__text">
                    Experienced at dealing with RESTful APIs to request data and
                    generate content from responses
                  </li>
                </ul>
                <ul className="list-item">
                  <div className="list-item__label">
                    <div className="list-item__icon">
                      <IconGithub />
                    </div>
                    <div className="list-item__heading">
                      GIT VERSION CONTROL
                    </div>
                  </div>
                  <li className="list-item__text">
                    Experienced in the use of Git Version Control for managing
                    project updates and revisions
                  </li>
                </ul>
                <ul className="list-item">
                  <div className="list-item__label">
                    <div className="list-item__icon">
                      <IconNetlify />
                    </div>
                    <div className="list-item__heading">
                      HOSTING AND DEPLOYMENT
                    </div>
                  </div>
                  <li className="list-item__text">
                    Adept at hosting and deployment using the Netlify platform
                  </li>
                </ul>
              </div>
            </div>
            <div className="box-label">
              <div className="box-heading">TECH</div>
            </div>
          </div>
          <div className="box links">
            <div className="box-contents element-grid">
              <div className="grid-item">
                <a className="icon-box" href="https://github.com/GJMShrigley">
                  <img
                    className="icon"
                    alt="Github icon"
                    src="./icons/github-white.svg"
                  ></img>
                </a>
              </div>
              <div className="grid-item">
                <a
                  className="icon-box"
                  href="https://www.linkedin.com/in/gjmshrigley"
                >
                  <img
                    className="icon"
                    alt="Linkedin icon"
                    src="./icons/linkedin-white.svg"
                  ></img>
                </a>
              </div>
              <div className="grid-item">
                <a className="icon-box" href="mailto: gjmshrigley@gmail.com">
                  <img
                    className="icon"
                    alt="Email icon"
                    src="./icons/mail-white.svg"
                  ></img>
                </a>
              </div>
            </div>
            <div className="box-label">
              <div className="box-heading">LINKS</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
