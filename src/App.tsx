import "./App.css";
import { Button } from "./components/Button";

function App() {
  return (
    <>
      <Button onClick={() => alert("Hello")} variant="primary" size="sm">
        Primary
      </Button>
    </>
  );
}

export default App;
