module.exports = (req, res, next) => {
  if (!req.user) {
    return res.status(401).send({ error: 'You must be authenticated to perform this action.' });
  }

  next();
};