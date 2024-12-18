import jwt from "jsonwebtoken";

const generateAccessToken = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "15d",
  });

  const option = {
    httpOnly: true,
    maxAge: 15 * 24 * 60 * 60 * 1000, // in milisecond..
    sameSite: "strict",
    secure: process.env.NODE_ENV !== "development",
  };
  res.cookie("token", token, option);
};

export default generateAccessToken;
