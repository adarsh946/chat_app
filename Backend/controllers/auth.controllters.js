import User from "../models/user.models.js";
import bcrypt from "bcryptjs";
import generateAccessToken from "../utils/refreshToken.js";

const signUp = async (req, res) => {
  try {
    const { fullname, password, confirmPassword, username, gender } = req.body;

    if (password !== confirmPassword) {
      return res.status(401).json({ error: "password does not match" });
    }

    const user = await User.findOne({ username });
    if (user) {
      return res.status(401).json({
        error: "username already exists",
      });
    }

    //hashing the pasword
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const girlProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;

    const newUser = await User.create({
      fullname,
      username,
      password: hashedPassword,
      gender,
      profilePic: gender == "male" ? boyProfilePic : girlProfilePic,
    });
    if (!newUser) {
      res.status(400).json({
        error: "user not created",
      });
    }

    generateAccessToken(newUser._id, res);

    await newUser.save();
    res.status(200).json({
      _id: newUser._id,
      fullname: newUser.fullname,
      username: newUser.username,
      profilePic: newUser.profilePic,
    });
  } catch (error) {
    console.log("unable to signUp ", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const logIn = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    const isPasswordCorrect = await bcrypt.compare(
      password,
      user?.password || ""
    );
    if (!user || !isPasswordCorrect) {
      return res
        .status(400)
        .json({ error: "username or password is incorrect!" });
    }

    generateAccessToken(user._id, res);
    return res.status(200).json({
      _id: user._id,
      fullname: user.fullname,
      username: user.username,
      profilePic: user.profilePic,
    });
  } catch (error) {
    console.log("unable to login ", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const logOut = (req, res) => {
  try {
    res.cookie("token", "", { maxAge: 0 });
    res.status(200).json({
      messege: "Logout successfully",
    });
  } catch (error) {
    console.log("unable to logOut ", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export { signUp, logIn, logOut };
