const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  userType: { type: String, enum: ["public", "staff"], required: true },
  hospital: { type: String, required: function () { return this.userType === "staff"; } },
  staffID: { type: String, required: function () { return this.userType === "staff"; } },
  role: { type: String, required: function () { return this.userType === "staff"; } },
});

module.exports = mongoose.model("User", UserSchema);
