export default function Portfolio() {
    return (
      <div className="portfolio-page">
        <h1 className="page-header">PORTFOLIO</h1>
        <div className="portfolio">
                <a className="portfolio__project portfolio__image-1" href="">
                    <div className="portfolio__info">
                        <h2 className="portfolio__heading">JavaSynth</h2>
                        <p className="portfolio__text">A Javascript-based electronic synth</p>
                    </div>
                </a>
                <a className="portfolio__project portfolio__image-2" href="">
                    <div className="portfolio__info">
                        <h2 className="portfolio__heading">Memory Game</h2>
                        <p className="portfolio__text">A Javascript-based memory game</p>
                    </div>
                </a>
                <a className="portfolio__project portfolio__image-3" href="">
                    <div className="portfolio__info">
                        <h2 className="portfolio__heading">To-Do List</h2>
                        <p className="portfolio__text">A React-based drag and drop list</p>
                    </div>
                </a>
                <a className="portfolio__project portfolio__image-4" href="">
                    <div className="portfolio__info">
                        <h2 className="portfolio__heading">Spotify Player</h2>
                        <p className="portfolio__text">A React-based Spotify player with built-in
                            search</p>
                    </div>
                </a>
                <a className="portfolio__project portfolio__image-5" href="">
                    <div className="portfolio__info">
                        <h2 className="portfolio__heading">Sample Landing Page</h2>
                        <p className="portfolio__text">An HTML, CSS, and Javascript-based landing page</p>
                    </div>
                </a>
                <a className="portfolio__project portfolio__image-6" href="">
                    <div className="portfolio__info">
                        <h2 className="portfolio__heading">User List</h2>
                        <p className="portfolio__text">A React-based profile viewer using the Random User API for sample profiles</p>
                    </div>
                </a>
            </div>
      </div>
    );
  }