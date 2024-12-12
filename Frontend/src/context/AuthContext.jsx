import { createContext, useContext, useState } from "react";

export const Authcontext = createContext();

export const useAuthContext = () => {
  return useContext(Authcontext);
};

export const AuthcontextProvider = ({ Children }) => {
  const [authUser, setAuthUser] = useState(
    JSON.parse(localStorage.getItem("chat-user")) || null
  );
  return (
    <Authcontext.Provider value={{ authUser, setAuthUser }}>
      {Children}
    </Authcontext.Provider>
  );
};
