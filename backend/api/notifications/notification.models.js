const mongoose = require("mongoose");

const notificationSchema = new mongoose.Schema({
  message: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  read: {
    type: Boolean,
    default: false
  },
  feedback: {
    type: String,
    default: "" // Par défaut, le feedback est une chaîne vide
  }
});

const Notification = mongoose.model("Notification", notificationSchema);

module.exports = Notification;
