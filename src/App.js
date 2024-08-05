import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Welcome from "./Components/Welcome";
import LoginRegister from "./Components/Login";
import AuthProvider from "./Auth/authProvider";
import PrivateRoute from "./Auth/ProtectedRoutes";
function App() {
  return (
      <div className="App">
        <BrowserRouter>
            <AuthProvider>
            <Routes>
            <Route
                path="/"
                element={<Welcome/>}
            />
                <Route path="/login" element={<LoginRegister/>}/>
                <Route element={<PrivateRoute />}>
                </Route>
                        {/* Other routes */}
                    </Routes>
                </AuthProvider>
        </BrowserRouter>
      </div>
  );
}

export default App;
