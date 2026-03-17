exports.authMiddleware = (req, res, next) => {
    const token = req.headers.authorization;

    if (token !== "mytoken") {
        return res.status(401).json({ message: "Unauthorized" });
    }

    next();
};