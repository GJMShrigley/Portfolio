import React, { useCallback } from 'react';
import Home from "./components/Home";
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Particles from "react-particles";
import { loadFull } from "tsparticles";

function App() {
  let page = <Home />
  const [pageData, setPageData] = React.useState(page)

  const particlesInit = useCallback(async engine => {
    console.log(engine);
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async container => {
    await console.log(container);
  }, []);

  function clickHandler(e) {
    e.preventDefault()
    switch (e.target.text) {
      case "HOME":
        page = <Home />
        break;
      case "ABOUT":
        page = <About />
        break;
      case "PROJECTS":
        page = <Portfolio />
        break;
      case "CONTACT":
        page = <Contact />
        break;
      default:
        page = <Home />
        break;
    }
    setPageData(page)
  }

  return (
    <div className="App">
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: "#ddd",
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: false,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "grab",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "edge",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
      />
        <div>
          {pageData}
        </div>
        <nav className="menu">
          <a className="menu__home menu__link" href="/" onClick={clickHandler}>HOME</a>
          <a className="menu__about menu__link" href="/" onClick={clickHandler}>ABOUT</a>
          <a className="menu__portfolio menu__link" href="/" onClick={clickHandler}>PROJECTS</a>
          <a className="menu__contact menu__link" href="/" onClick={clickHandler}>CONTACT</a>
        </nav>
    </div>

  );
}

export default App;
