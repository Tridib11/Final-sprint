const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  title: String,
  description: String,

  completed: {
    type: Boolean,
    default: false,
  },
});

// Export the model correctly. Use module.exports, not mongoose.exports.
module.exports = mongoose.model("Todo", todoSchema);
