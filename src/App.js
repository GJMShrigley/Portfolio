import React from 'react';
import Home from "./components/Home";
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

function App() {
  let page = <About />
  const [pageData, setPageData] = React.useState(page)
  
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
      {/* <div className="fogwrapper">
        <div id="foglayer_01" className="fog">
          <div className="image01"></div>
          <div className="image02"></div>
        </div>
        <div id="foglayer_02" className="fog">
          <div className="image01"></div>
          <div className="image02"></div>
        </div>
        <div id="foglayer_03" className="fog">
          <div className="image01"></div>
          <div className="image02"></div>
        </div>
        </div> */}
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
