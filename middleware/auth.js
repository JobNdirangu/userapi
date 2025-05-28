const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET

function auth(req, res, next) {
    const authHeader = req.headers.authorization;
    // console.log('authHeader',authHeader)
    const token = authHeader && authHeader.split(' ')[1];
    // console.log('token',token)

    if (!token) return res.status(401).json({ message: 'No token provided' });

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        console.log('decoded',decoded)
        req.user = decoded;
        next();
    } catch (err) {
        res.status(403).json({ message: 'Invalid token' });
    }
}

module.exports = auth;
