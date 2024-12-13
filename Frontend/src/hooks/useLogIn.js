import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";

export const useLogIn = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const logIn = async (username, password) => {
    const success = handleLoginError(username, password);
    if (!success) return;

    setLoading(true);
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = res.json();
      if (data.error) {
        throw new Error(data.error);
      }

      localStorage.getItem("chat-user", JSON.stringify(data));
      setAuthUser(data);
    } catch (error) {
      toast.error(error.messege);
    }
  };
  return { loading, logIn };
};

const handleLoginError = (username, password) => {
  if (!username || !password) {
    return false;
  }
};
