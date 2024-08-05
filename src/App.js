import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Welcome from "./Components/Welcome";
import Login from "./Components/Login";

function App() {
  return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route
                path="/"
                element={<Welcome/>}
            />
            <Route path="/login" element=<Login/>/>
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
