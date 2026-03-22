let courses = [];

exports.getCourses = (req, res) => {
  res.json(courses);
};

exports.addCourse = (req, res) => {
  courses.push(req.body);
  res.json({ message: "Course added", data: req.body });
};