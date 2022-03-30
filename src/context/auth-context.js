import axios from "axios";
import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const encodedToken = localStorage.getItem("encodedToken")
    const [token, setToken] = useState(encodedToken ? encodedToken : "");
    const [errorLogin, setErrorLogin] = useState("");
    const [errorSignUp, setErrorSignup] = useState("");
    const navigate = useNavigate();
    const loginUser = async (email, password) => {
        try {
            const res = await axios.post("api/auth/login", { email: email, password: password })
            if (res.status === 200) {
                setErrorLogin("");
                setToken(res.data.encodedToken);
                localStorage.setItem("encodedToken", res.data.encodedToken);
                navigate("/");
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
                navigate("/");
            }
        }
        catch (err) {
            setErrorSignup("Email already exists.")
        }
    }
    return (
        < AuthContext.Provider value={{ token, errorLogin, errorSignUp, loginUser, signupUser }}>
            {children}
        </AuthContext.Provider >)
}

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth }