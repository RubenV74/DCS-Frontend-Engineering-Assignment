import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Welcome from "./Components/Welcome";
import LoginRegister from "./Components/Login";
import AuthProvider from "./Auth/authProvider";
import {useAuth} from "./Auth/authProvider";
import AppBar from './Components/AppBar'
import ProtectedRoute from "./Components/ProtectedRoute";
import UsersBar from "./Components/UsersBar";
import ChatPage from "./Components/ChatPage";
import  Chat from './Components/Chat/Chat'
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
                                <AppBar/>
                                <UsersBar/>
                               <Chat/>
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
