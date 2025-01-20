import { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState(null);

    const login = () => {
        const localData = localStorage.getItem("auth");

        if (localData) {
            setAuth(JSON.parse(localData));
        }
    };

    const logout = () => {
        localStorage.removeItem("auth");
        setAuth(null);
    };

    return (
        <AuthContext.Provider value={{auth, login, logout}}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;