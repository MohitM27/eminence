const jwt = require("jsonwebtoken");

module.exports = async (req, res, next) => {
  let token = req.headers?.authorization;
  token = token?.split(' ').length ? token.split(' ')[1] : null;
  if(token) {
    jwt.verify(token, process.env.JWT_SECRET_KEY, async function (err, decodedToken) {
      if (err) {
        return res.status(401).json({status: 400, message: "Token Expired! Please login again"});
      } else {
        req._userId = decodedToken.id; 
        if (decodedToken.id) {
            next();
        } else
            return res.status(401).json({status: 400, message: "Auth not found!"});
      }
    });
  } else
    return res.status(401).json({status: 400, message: "Auth not found!"});
};
