import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";

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

      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }

      localStorage.setItem("chat-user", JSON.stringify(data));
      setAuthUser(data);
    } catch (error) {
      toast.error(error.messege);
    } finally {
      setLoading(false);
    }
  };
  return { loading, logIn };
};

const handleLoginError = (username, password) => {
  if (!username || !password) {
    toast.error("Please fill all the fields!");
    return false;
  }
  return true;
};
