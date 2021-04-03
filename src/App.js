import logo from "./dictionary.png";
import "./App.css";
import Dictionary from "./Dictionary/Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="app-header">
          <img src={logo} className="app-logo" alt="logo" />
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="text-center app-footer">
          This project was coded by{" "}
          <a
            href="https://www.linkedin.com/in/olha-obertas-77932b15b/"
            target="_blank"
            rel="noreferrer"
          >
            Olha Obertas
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/oobertas"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub
          </a>
          <div>
            Icons made by{" "}
            <a
              href="https://www.freepik.com"
              title="Freepik"
              target="_blank"
              rel="noreferrer"
            >
              Freepik
            </a>{" "}
            from{" "}
            <a
              href="https://www.flaticon.com/"
              title="Flaticon"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              www.flaticon.com
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
