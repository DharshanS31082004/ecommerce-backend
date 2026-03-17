exports.validateProduct = (req, res, next) => {
    const { name, slug, price } = req.body;

    if (!name || !slug || !price) {
        return res.status(400).json({
            message: "All fields required"
        });
    }

    next();
};