import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Welcome from "./Components/Welcome";
import LoginRegister from "./Components/Login";
import AuthProvider from "./Auth/authProvider";
import {useAuth} from "./Auth/authProvider";
import Header from './Components/Header'
import ProtectedRoute from "./Components/ProtectedRoute";

function App() {
    const user = useAuth();
  return (
      <div className="App">
          <BrowserRouter>
          <AuthProvider>
            <Routes>
            <Route
                path="/Welcome"
                element={<Welcome/>}
            />
                <Route path="/Login" element={<LoginRegister isLogin={true}/>}/>
                <Route path="/Register" element={<LoginRegister isLogin={false}/>}/>
                    <Route
                        path="/chat"
                        element={
                        <ProtectedRoute>
                            <div>
                                <Header/>
                            </div>
                        </ProtectedRoute>
                        }
                    />
            </Routes>
          </AuthProvider>
      </BrowserRouter>

</div>
  );
}



export default App;
