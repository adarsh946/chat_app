import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";

export const useLogOut = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const logOut = async () => {
    setLoading(true);
    try {
      const res = await fetch(
        "https://chatbuddy-vayg.onrender.com/api/auth/logout",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
        }
      );

      const data = res.json();
      if (data.error) {
        throw new Error(data.error);
      }

      localStorage.removeItem("chat-user");
      setAuthUser(null);
    } catch (error) {
      toast.error(error.messege);
    } finally {
      setLoading(false);
    }
  };
  return { loading, logOut };
};
