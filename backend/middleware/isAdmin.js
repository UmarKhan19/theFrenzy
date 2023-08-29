const checkAdmin = (req, res, next) => {
  try {
    const userRole = req.user.role; // Extracted from authentication middleware

    if (userRole !== "admin") {
      return res
        .status(403)
        .json({ error: "Access forbidden. Only admin users are allowed." });
    }

    next();
  } catch (error) {
    req.status(403).json({ success: false, error: "internal server error." });
  }
};

module.exports = checkAdmin;
