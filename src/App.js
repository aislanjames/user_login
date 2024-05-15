import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { Home } from "./Pages/Home";
import { Login } from "./Pages/Login";

function App() {
  return (
    <div className="wrapper text-center mt-5">
      <h1 className="text-4xl font-bold text-blue-600">Projeto de Login com API call, Tailwind, React e ReduxToolkit!</h1>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

