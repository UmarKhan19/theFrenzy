const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, trim: true, unique: true },
    password: { required: true, type: String },
    role: { type: String, default: "user", enum: ["admin", "user"] },
    firstName: { type: String, required: true, trim: true },
    lastName: { type: String, trim: true },
    address: {
      houseNumber: { type: String, required: true, trim: true },
      city: { type: String, required: true, trim: true },
      state: { type: String, required: true, trim: true },
      country: { type: String, required: true, trim: true },
      pincode: { type: String, required: true, trim: true },
    },
    phoneNumber: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
