import { Container } from "react-bootstrap";

import MainApp from "./Components/MainApp";

function App() {
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "460px", color:"darkblue" }}>
        <MainApp />
      </div>
    </Container>
  );
}

export default App;
