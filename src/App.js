import logo from './logo.svg';
import './App.css';
import './styles.css';
import FeaturedProject from './components/FeaturedProject.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          This is where I start cheesing this.
        </a>

        <h1 className="awe-some">
          Hello world!
        </h1>

        <FeaturedProject/>

      </header>
    </div>
  );
}

export default App;
