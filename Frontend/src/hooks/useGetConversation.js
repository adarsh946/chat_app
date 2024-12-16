import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export const useGetConversation = () => {
  const [loading, setLoading] = useState(false);
  const [conversations, setConversations] = useState([]);

  useEffect(() => {
    const getConversations = async () => {
      setLoading(true);
      try {
        const res = await fetch("/api/user");
        const data = await res.json();
        if (data.error) {
          throw new Error(data.error);
        }
        setConversations(data);
      } catch (error) {
        toast.error(error.messege);
      } finally {
        setLoading(false);
      }
    };

    getConversations();
  }, []);
  return { loading, conversations };
};