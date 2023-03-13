const mongoose = require("mongoose");

//Schemea of user

const userSchema = mongoose.Schema(
  {
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
      default: "https://i.ibb.co/4pDNDk1/avatar.png",
    },
    phone: {
      type: String,
      default: "+91",
    },
    bio: {
      type: String,
      maxLenght: [250, "Password must  not be more  than 250 characters"],
      default: "bio",
    },
  },
  {
    timeStamps: true,
  }
);

 // Hash password
  //Encrypt password before saving to DB
userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    return next();
  }
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(password, salt);
  this.password = hashPassword
  next();
    
  })


const User = mongoose.model("User", userSchema);
module.exports = User;
