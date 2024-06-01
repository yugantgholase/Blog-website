import "./App.css";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Context from "./components/Content";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Context />
    </div>
  );
}

export default App;
