import './App.css';
import Hello from './Components/Hello'
import Nav from './Components/Nav';

function App() {
  return (
    <div className="App">
      <Nav/>
      <header className="App-header">
        <img src="Octocat.png" className="App-logo" alt="logo" />
        <p>
          GitHub Codespaces <span className="heart">♥️</span> React
        </p>
        <p className="small">
          Edit <code>src/App.js</code> and save to reload.
        </p>
          <Hello/>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
            >
            Learn React
          </a>
        </p>
              </header>
    </div>
  );
}

export default App;
