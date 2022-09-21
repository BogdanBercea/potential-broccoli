module.exports = (req, res, next) => {
  if (req.user.credits < 1) {
    return res.status(403).send({ error: "You don't have enough credits to perform this action! Please go to payments tab and add some credits." });
  }

  next();
};