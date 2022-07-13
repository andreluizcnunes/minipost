import { useContext, createContext} from 'react';

const AuthContext = createContext();

export function AuthProvider({children, valeu}) {
    return <AuthContext.Provider valeu={valeu}>{children}</AuthContext.Provider>
}

export function useAuthValeu(){
    return useContext(AuthContext);
}