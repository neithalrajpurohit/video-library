import { createContext, useContext, useState } from "react";
export const authContext = createContext();

export function AuthProvider({ children }) {
  const [token, setToken] = useState("");
  const [login, setLogin] = useState(false);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  return (
    <authContext.Provider
      value={{
        token,
        setToken,
        login,
        setLogin,
        email,
        setEmail,
        password,
        setPassword,
      }}
    >
      {children}
    </authContext.Provider>
  );
}
export const useAuth = () => {
  return useContext(authContext);
};
export default AuthProvider;
