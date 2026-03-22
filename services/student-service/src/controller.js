let students = [];

exports.getStudents = (req, res) => {
  res.json(students);
};

exports.addStudent = (req, res) => {
  students.push(req.body);
  res.json({ message: "Student added", data: req.body });
};