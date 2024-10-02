import User from "../models/user.models.js";

const userSideBar = async (req, res) => {
  try {
    const loggedInUsers = req.user;

    const allUserInSideBar = await User.find({
      _id: { $ne: loggedInUsers }, // here $ne operator is used to deselect looggedInuser from all users
    }).select("-password");

    res.status(201).json(allUserInSideBar);
  } catch (error) {
    console.log("error in userSideBar", error.message);
    res.status(500).json({ error: "Internal Server Error.." });
  }
};

export { userSideBar };
