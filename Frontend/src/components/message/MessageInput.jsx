import { useState } from "react";
import { BsSend } from "react-icons/bs";
import useSendMessages from "../../hooks/useSendMessages";

const MessageInput = () => {
  const [message, setMessage] = useState("");
  const { loading, sendMessages } = useSendMessages();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!sendMessages) return;
    await sendMessages(message);
    setMessage("");
  };

  return (
    <form className="px-4 my-3" onClick={handleSubmit}>
      <div className="w-full relative">
        <input
          type="text"
          className="border text-sm rounded-lg block w-full p-2.5  bg-gray-700 border-gray-600 text-white"
          placeholder="Send a message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          type="submit"
          className="absolute inset-y-0 end-0 flex items-center pe-3"
        >
          {loading ? (
            <span className="loading loading-spinner"></span>
          ) : (
            <BsSend />
          )}
        </button>
      </div>
    </form>
  );
};
export default MessageInput;
