export default function Portfolio() {
  return (
    <div className="portfolio-page">
      <h1 className="page-header">PORTFOLIO</h1>
      <div className="container">
      <div className="box project project-1">
          <a className="box-contents" href="https://gs-javasynth.netlify.app/"></a>
          <div className="box-label">
            <div className="box-heading">JAVASYNTH</div>
            <div className="project-text">A Javascript-based electronic synth</div>
          </div>
        </div>
        <div className="box project project-2">
          <a className="box-contents" href="https://gs-memorygame.netlify.app/"></a>
          <div className="box-label">
            <div className="box-heading">MEMORY GAME</div>
            <div className="project-text">A Javascript-based memory game</div>
          </div>
        </div>
        <div className="box project project-3">
          <a className="box-contents" href="https://gs-todo.netlify.app/"></a>
          <div className="box-label">
            <div className="box-heading">TO-DO APP</div>
            <div className="project-text">A React-based drag and drop list</div>
          </div>
        </div>
        <div className="box project project-4">
          <a className="box-contents" href="https://gs-spotifyplayer.netlify.app/"></a>
          <div className="box-label">
            <div className="box-heading">SPOTIFY PLAYER</div>
            <div className="project-text"> A React-based Spotify player with built-in search</div>
          </div>
        </div>
        <div className="box project project-5">
          <a className="box-contents" href="https://gs-landingpage.netlify.app/"></a>
          <div className="box-label">
            <div className="box-heading">LANDING PAGE</div>
            <div className="project-text">An HTML, CSS, and Javascript-based landing page</div>
          </div>
        </div>
        <div className="box project project-6">
          <a className="box-contents" href="https://gs-randomuser.netlify.app/"></a>
          <div className="box-label">
            <div className="box-heading">USER LIST</div>
            <div className="project-text">A React-based profile viewer using the Random User API</div>
          </div>
        </div>
      </div>
    </div>
  );
}
