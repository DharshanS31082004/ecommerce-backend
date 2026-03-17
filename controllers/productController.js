let products = [
  { id: 1, name: "Laptop", slug: "laptop", price: 50000, stock: 5 }
];

// ✅ GET all products
exports.getAllProducts = (req, res) => {
  res.json(products);
};

// ✅ GET product by ID
exports.getProductById = (req, res) => {
  const id = parseInt(req.params.id);

  const product = products.find(p => p.id === id);

  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }

  res.json(product);
};

// ✅ GET product by SLUG
exports.getProductBySlug = (req, res) => {
  const slug = req.params.slug;

  const product = products.find(p => p.slug === slug);

  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }

  res.json(product);
};

// ✅ POST product
exports.addProduct = (req, res) => {
  const { name, slug, price, stock } = req.body;

  const newProduct = {
    id: products.length + 1,
    name,
    slug,
    price,
    stock
  };

  products.push(newProduct);

  res.status(201).json({
    message: "Product added",
    data: newProduct
  });
};

// ✅ PUT (update product)
exports.updateProduct = (req, res) => {
  const id = parseInt(req.params.id);

  const product = products.find(p => p.id === id);

  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }

  // update only if provided
  product.name = req.body.name || product.name;
  product.slug = req.body.slug || product.slug;
  product.price = req.body.price || product.price;
  product.stock = req.body.stock || product.stock;

  res.json({
    message: "Product updated",
    data: product
  });
};

// ✅ DELETE product
exports.deleteProduct = (req, res) => {
  const id = parseInt(req.params.id);

  const index = products.findIndex(p => p.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "Product not found" });
  }

  products.splice(index, 1);

  res.json({ message: "Product deleted successfully" });
};