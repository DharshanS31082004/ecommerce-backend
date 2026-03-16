let orders = [];

let products = [
  { id: 1, name: "Laptop", price: 50000, stock: 5 }
];

exports.createOrder = (req, res) => {

  const { productId, quantity } = req.body;

  const product = products.find(p => p.id === productId);

  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }

  if (product.stock < quantity) {
    return res.status(400).json({ message: "Not enough stock" });
  }

  product.stock -= quantity;

  const order = {
    orderId: orders.length + 1,
    productId,
    quantity
  };

  orders.push(order);

  res.json({
    message: "Order created",
    order
  });
};