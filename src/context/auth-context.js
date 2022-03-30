import axios from "axios";
import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const encodedToken = localStorage.getItem("encodedToken")
    const [token, setToken] = useState(encodedToken ? encodedToken : "");
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const loginUser = async (email, password) => {
        try {
            const res = await axios.post("api/auth/login", { email: email, password: password })
            if (res.status === 200) {
                setError("");
                setToken(res.data.encodedToken);
                localStorage.setItem("encodedToken", res.data.encodedToken);
                navigate("/");
            }
        }
        catch (err) {
            setError("The credentials you entered are invalid.")
        }
    }
    return (
        < AuthContext.Provider value={{ token, error, loginUser }}>
            {children}
        </AuthContext.Provider >)
}

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth }