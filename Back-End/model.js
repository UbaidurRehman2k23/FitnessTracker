const mongoose = require("mongoose");
const UserSchema = mongoose.Schema({
  name: {
    type: String,
  },
  workout: {
    type: String,
  },
  place: {
    type: String,
  },
  date: {
    type: String,
  },
  time: {
    type: String,
  },
});
 
module.exports = mongoose.model("workouts", UserSchema);
 