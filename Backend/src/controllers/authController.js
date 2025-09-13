import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

//
export const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // check - user already exists!
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User already exists!",
      });
    }

    // create password hash
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = new User({
      name,
      email,
      password: hashedPassword,
    });

    await user.save();

    //   create and return jwt token
    const payload = {
      user: {
        id: user.id,
        role: user.role,
      },
    };

    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      {
        expiresIn: "2d",
      },
      (err, token) => {
        if (err) {
          console.log(err);
          throw err;
        }
        // return token
        res.status(201).json({
          success: true,
          message: "User registered successfully!",
          token,
        });
      }
    );
  } catch (error) {
    console.error(error);
    res.status(500).send("Oops! Something went wrong.");
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // check - user already exists!
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Invalid credentials!",
      });
    }

    // match password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({
        success: false,
        message: "Incorrect password!",
      });
    }

    // create and return jwt token
    const payload = {
      user: {
        id: user.id,
        role: user.role,
      },
    };

    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      {
        expiresIn: "2d",
      },
      (err, token) => {
        if (err) {
          console.log(err);
          throw err;
        }
        // return token
        res.status(201).json({
          success: true,
          message: "User logged in successfully!",
          token,
        });
      }
    );
  } catch (error) {
    console.error(error);
    res.status(500).send("Oops!Something went wrong.");
  }
};
