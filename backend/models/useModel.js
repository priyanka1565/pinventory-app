const mongoose = require("mongoose");

//Schemea of user

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Pleased add a name"],
  },
  email: {
    type: String,
    required: [true, "Pleased add a email"],
    unique: true,
    trim: true,
    match: [
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Please enter a valid email",
    ],
  },

  password: {
    type: String,
    required: [true, "Pleased add a password"],
    minLenght: [6, "Password must be up to 6 characters"],
    maxLenght: [23, "Password must  not be more  than 23 characters"],
  },
  photo: {
    type: String,
    required: [true, "Pleased add a photo"],
  },
});

const User = mongoose.model("User", userSchema);
module.exports = User;