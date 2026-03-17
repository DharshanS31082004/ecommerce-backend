let students = [
    { id: 1, name: "Darshan" },
    { id: 2, name: "Rahul" }
];

exports.getAllStudents = (req, res) => {
    res.json(students);
};