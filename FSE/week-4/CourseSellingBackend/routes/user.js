const { Router } = require("express");
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db/db");
const router = Router();

router.post("/singup", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  User.create({
    username,
    password,
  });

  res.json({
    message: "User created successfully",
  });
});

router.get("/courses", async (req, res) => {
  const response = await Course.find({});
  res.json({
    Courses: response,
  });
});

router.post("/courses/:courseId", userMiddleware, async (req, res) => {
  const courseId = req.params.courseId;
  const username = req.headers.username;

  await User.updateOne(
    {
      username: username,
    },
    {
      $push: {
        purchasedCourses: courseId,
      },
    }
  );

  res.json({
    message: "Purchase Complete!",
  });
});

router.get("/purchasedCourses", userMiddleware, async (req, res) => {
  const user = await User.findOne({
    username: req.headers.username,
  });
  console.log(user.purchasedCourses);
  const courses = await Course.find({
    _id: {
      $in: user.purchasedCourses,
    },
  });

  res.json({
    Courses: courses,
  });
});

module.exports = router;
