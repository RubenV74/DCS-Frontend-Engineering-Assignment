import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Welcome from "./Components/Welcome";
import LoginRegister from "./Components/Login";
import AuthProvider from "./Auth/authProvider";
import PrivateRoute from "./Auth/ProtectedRoutes";
import {useAuth} from "./Auth/authProvider";
import Header from './Components/Header'

function App() {
    const user = useAuth();
  return (
      <div className="App">
        <BrowserRouter>
            <AuthProvider>
            <Routes>
            <Route
                path="/"
                element={<Welcome/>}
            />
                <Route path="/Login" element={<LoginRegister isLogin={true}/>}/>
                <Route path="/Register" element={<LoginRegister isLogin={false}/>}/>
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
