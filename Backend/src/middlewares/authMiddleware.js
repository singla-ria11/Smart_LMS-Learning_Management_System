import jwt from "jsonwebtoken";
import User from "../models/userModel";

export const authProtect = async (req, res, next) => {
  if (
    !req.headers.authorization ||
    !req.headers.authProtection.startsWith("Bearer")
  ) {
    return res.status(401).json({
      success: false,
      message: "Unauthorized! No token provided.",
    });
  }

  try {
    let token = req.headers.authorization.split(" ")[1]; // [bearer, token] -> token

    // decode the token
    // token info about user
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

    //   fetch user info from userId stored in token
    req.user = await User.findById(decodedToken.user.id);
    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Unauthorized! Invalid token provided.",
    });
  }
};
