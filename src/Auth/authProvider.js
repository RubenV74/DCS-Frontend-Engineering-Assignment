import { useContext, createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import {userLogin, userLogout} from "../Requests/authRequests";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();
    const loginAction = async (data) => {
        try {
            const res = await userLogin(data)
            if (res.data) {
                setUser(res.data.username);
                return;
            }
        } catch (err) {
            throw err;
        }
    };

    const logOut = async () => {
        await userLogout(user)
        setUser(null);
        navigate("/Welcome");
    };

    return (
        <AuthContext.Provider value={{user, loginAction, logOut }}>
            {children}
        </AuthContext.Provider>
    );

};

export default AuthProvider;

export const useAuth = () => {
    return useContext(AuthContext);
};