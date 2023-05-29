export default function Portfolio() {
  return (
    <div className="portfolio-page">
      <h1 className="page-header">PROJECTS</h1>
      <div className="container">
      <div className="box project project-1">
          <a className="box-contents" href="https://gs-javasynth.netlify.app/">Link to the JavaSynth project</a>
          <div className="box-label">
            <div className="box-heading">JAVASYNTH</div>
            <div className="project-text">A Javascript-based electronic synth</div>
          </div>
        </div>
        <div className="box project project-2">
          <a className="box-contents" href="https://gs-memorygame.netlify.app/">Link to the Memory Game project</a>
          <div className="box-label">
            <div className="box-heading">MEMORY GAME</div>
            <div className="project-text">A Javascript-based memory game</div>
          </div>
        </div>
        <div className="box project project-3">
          <a className="box-contents" href="https://gs-todo.netlify.app/">Link to the To-Do App project</a>
          <div className="box-label">
            <div className="box-heading">TO-DO APP</div>
            <div className="project-text">A React-based drag and drop list</div>
          </div>
        </div>
        <div className="box project project-4">
          <a className="box-contents" href="https://gs-spotifyplayer.netlify.app/">Link to the Spotify Player project</a>
          <div className="box-label">
            <div className="box-heading">SPOTIFY PLAYER</div>
            <div className="project-text"> A React-based Spotify player with built-in search</div>
          </div>
        </div>
        <div className="box project project-5">
          <a className="box-contents" href="https://gs-landingpage.netlify.app/">Link to the Landing Page project</a>
          <div className="box-label">
            <div className="box-heading">LANDING PAGE</div>
            <div className="project-text">An HTML, CSS, and Javascript-based landing page mockup</div>
          </div>
        </div>
        <div className="box project project-6">
        <a className="box-contents" href="https://gs-storefront.netlify.app/">Link to the storefront project</a>
          <div className="box-label">
            <div className="box-heading">STOREFRONT</div>
            <div className="project-text">A React/Redux-based e-commerce store</div>
          </div>
        </div>
      </div>
    </div>
  );
}
