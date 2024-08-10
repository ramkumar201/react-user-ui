import { createContext, useContext, useMemo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "./useLocalStorage";

const AuthContext = createContext();


export const AuthProvider = ({ children }) => {
    const [user, setUser] = useLocalStorage("user", null);
    const navigate = useNavigate();

    const logout = useCallback(() => {
        setUser(null);
        navigate('/login');
    }, [setUser, navigate]);

    const login = useCallback(async (data) => {
        setUser(data);
        console.log('user',  user);
        navigate('/', { replace: true })
    }, [setUser, navigate, user]);

    const value = useMemo(() => ({
        user, login, logout
    }), [user, login, logout]);

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
    return useContext(AuthContext);
}
