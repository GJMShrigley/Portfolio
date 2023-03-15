import React from 'react';
import Home from "./components/Home";
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

function App() {
  let page = <Home />
  const [pageData, setPageData] = React.useState(page)
  
  function clickHandler(e) {
    switch (e.target.text) {
      case "HOME":
        page = <Home />
        break;
      case "ABOUT":
        page = <About />
        break;
      case "PORTFOLIO":
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
      <div className="fogwrapper">
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
        </div>
      <div>
        {pageData}
      </div>
      <nav className="menu">
        <div className="menu__home menu__link" onClick={clickHandler}>HOME</div>
        <div className="menu__about menu__link" onClick={clickHandler}>ABOUT</div>
        <div className="menu__portfolio menu__link" onClick={clickHandler}>PORTFOLIO</div>
        <div className="menu__contact menu__link" onClick={clickHandler}>CONTACT</div>
      </nav>
    </div>
  );
}

export default App;
