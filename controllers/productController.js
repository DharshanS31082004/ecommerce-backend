let products = [
  { id: 1, name: "Laptop", price: 50000, stock: 5 }
];

exports.getProducts = (req, res) => {
  res.json(products);
};

exports.addProduct = (req, res) => {
  const product = req.body;
  products.push(product);

  res.json({
    message: "Product added",
    data: product
  });
};

exports.updateProduct = (req, res) => {
  const id = parseInt(req.params.id);

  const product = products.find(p => p.id === id);

  if (product) {
    product.name = req.body.name;
    product.price = req.body.price;
    product.stock = req.body.stock;

    res.json(product);
  } else {
    res.status(404).json({ message: "Product not found" });
  }
};

exports.deleteProduct = (req, res) => {
  const id = parseInt(req.params.id);

  products = products.filter(p => p.id !== id);

  res.json({ message: "Product deleted" });
};