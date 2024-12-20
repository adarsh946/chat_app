import jwt from "jsonwebtoken";
import User from "../models/user.models.js";

const protectRoute = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.status(401).json({ error: "Unauthorised Request!" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded) {
      return res.status(401).json({ error: "Unauthorised Request!" });
    }

    const user = await User.findById(decoded.userId).select("-password");
    if (!user) {
      return res.status(401).json({ error: "Unauthorised Request!" });
    }

    req.user = user;
    next();
  } catch (error) {
    console.log("error in protect route middleware", error.message);
    res.status(500).json({ error: "Internal Server Error.." });
  }
};

export default protectRoute;
