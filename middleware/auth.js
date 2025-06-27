const jwt = require('jsonwebtoken');
// Load the secret key used to verify tokens (from your .env file)
const JWT_SECRET = process.env.JWT_SECRET
// This is a middleware function for protecting routes (authorization)
function auth(req, res, next) {
        // Get the Authorization header from the incoming request
    const authHeader = req.headers.authorization;
    // console.log('authHeader',authHeader)
    const token = authHeader && authHeader.split(' ')[1];
    // console.log('token',token)

    if (!token) return res.status(401).json({ message: 'No token provided' });

    try {
        // Verify the token using the secret key (JWT_SECRET)
        // If the token is valid, decode it and store user info in req.user
        const decoded = jwt.verify(token, JWT_SECRET);
        // console.log('decoded',decoded)
        req.user = decoded;
        // Allow the request to proceed to the next middleware or route handler
        next();
    } catch (err) {
        res.status(403).json({ message: 'Invalid token' });
    }
}

module.exports = auth;
