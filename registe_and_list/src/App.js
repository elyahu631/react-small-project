import { Container } from "react-bootstrap";

import Main from "./Comps/Main";

function App() {
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <Main />
      </div>
    </Container>
  );
}

export default App;
