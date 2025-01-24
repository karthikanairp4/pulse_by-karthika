const jwt = require('jsonwebtoken');

// JWT secret key (store securely in an environment variable)
const JWT_SECRET = '123456789';

// Middleware to verify JWT token
const verifyToken = (req, res, next) => {
    const token = req.cookies.authToken; // Extract token from cookies

    if (!token) {
        return res.redirect('/user/signin'); // Redirect if no token
    }

    try {
        // Verify the token
        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = decoded; // Attach decoded data to request object
        next(); // Proceed to the next middleware or route handler
    } catch (err) {
        console.error('JWT verification failed:', err.message);
        res.redirect('/user/signin'); // Redirect if the token is invalid
    }
};

module.exports = { verifyToken };
