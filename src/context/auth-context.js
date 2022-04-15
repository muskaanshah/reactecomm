import { createContext, useContext, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const encodedToken = localStorage.getItem("encodedToken")
    const [token, setToken] = useState(encodedToken ? encodedToken : "");
    const [errorLogin, setErrorLogin] = useState("");
    const [errorSignup, setErrorSignup] = useState("");
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || '/'
    const loginUser = async (email, password) => {
        try {
            const res = await axios.post("api/auth/login", { email: email, password: password })
            if (res.status === 200) {
                setErrorLogin("");
                setToken(res.data.encodedToken);
                localStorage.setItem("encodedToken", res.data.encodedToken);
                navigate(from, { replace: true })
            }
        }
        catch (err) {
            setErrorLogin("The credentials you entered are invalid.")
        }
    }
    const signupUser = async (firstName, lastName, email, password) => {
        try {
            const res = await axios.post("api/auth/signup", { firstName: firstName, lastName: lastName, email: email, password: password })
            if (res.status === 201) {
                setErrorSignup("");
                setToken(res.data.encodedToken);
                localStorage.setItem("encodedToken", res.data.encodedToken);
                navigate(from, { replace: true })
            }
        }
        catch (err) {
            setErrorSignup("Email already exists.")
        }
    }
    return (
        < AuthContext.Provider value={{ token, errorLogin, errorSignup, loginUser, signupUser }}>
            {children}
        </AuthContext.Provider >)
}

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth }