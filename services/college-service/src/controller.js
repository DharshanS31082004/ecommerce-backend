let colleges = [];

exports.getColleges = (req, res) => {
  res.json(colleges);
};

exports.addCollege = (req, res) => {
  colleges.push(req.body);
  res.json({
    message: "College added",
    data: req.body
  });
};