let categories = [
  { id: 1, categoryName: "Electronics" }
];

exports.getCategories = (req, res) => {
  res.json(categories);
};

exports.addCategory = (req, res) => {
  const newCategory = req.body;
  categories.push(newCategory);

  res.json({
    message: "Category added successfully",
    data: newCategory
  });
};