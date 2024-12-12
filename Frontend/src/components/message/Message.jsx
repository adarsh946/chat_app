import React from "react";

const Message = () => {
  return (
    <div className="chat chat-end">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS chat bubble component"
            src={
              "https://img.freepik.com/premium-photo/man-with-beard-blue-circle-with-white-background_1057389-84761.jpg"
            }
          />
        </div>
      </div>
      <div className={`chat-bubble text-white bg-blue-500`}>
        Hii, what's Going on..
      </div>
      <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">
        09:45
      </div>
    </div>
  );
};

export default Message;
