let users = [];

exports.getUsers = (req, res) => {
  res.json(users);
};

exports.addUser = (req, res) => {
  users.push(req.body);
  res.json({
    message: "User added",
    data: req.body
  });
};