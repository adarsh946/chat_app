import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

export const useSignUp = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const signup = async ({
    fullname,
    username,
    password,
    confirmPassword,
    gender,
  }) => {
    const success = handleSubmitError({
      fullname,
      username,
      password,
      confirmPassword,
      gender,
    });
    if (!success) {
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(
        "https://chatbuddy-vayg.onrender.com/api/auth/signup",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            fullname,
            username,
            password,
            confirmPassword,
            gender,
          }),
        }
      );

      const data = await res.json();
      console.log(data);

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
  return { loading, signup };
};

const handleSubmitError = ({
  fullname,
  username,
  password,
  confirmPassword,
  gender,
}) => {
  if (!fullname || !username || !password || !confirmPassword || !gender) {
    toast.error("plese fill all feilds!");
    return false;
  }
  if (password != confirmPassword) {
    toast.error("password does not match");
    return false;
  }
  if (password.length < 6) {
    toast.error("password must contain at least 6 characters");
    return false;
  }
  return true;
};
