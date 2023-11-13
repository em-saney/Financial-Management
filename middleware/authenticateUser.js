module.exports.userAuth = (req, res, next) => {
    if (req.query.name !== 'admin' || req.query.password !== '12344') {
      return res.status(401).json({ success: false, message: 'Invalid credentials' });
    }
    next();
  };
  