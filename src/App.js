import "./App.css";
import { Container } from "react-bootstrap";
import Card from "./components/Card";

function App() {
  return (
    <Container className="App">
      <Card />
      <div className="attribution">
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          rel="noreferrer"
          target="_blank"
        >
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a href="https://github.com/victorJatencio">Victor J Atencio</a>.
      </div>
    </Container>
  );
}

export default App;
