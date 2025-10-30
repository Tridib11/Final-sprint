const mongoose = require("mongoose");

async function connectDb() {
  try {
    await mongoose.connect(
      "mongodb+srv://admin:admin@cluster0.ksun8sc.mongodb.net/todotest"
    );

    console.log("DB connected");
  } catch (err) {
    console.error("Failed to connect", err.message);

    process.exit(1);
  }
}

module.exports = connectDb;
