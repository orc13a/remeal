var jwt = require('jsonwebtoken');

const auth = async (req, res, next) => {
    const token = req.body.user.token;
    const userId = req.body.user.userId;

    try {
        let decoded = jwt.verify(token, 'remealSECRET');

        if (decoded.userId === userId) {
            next();
        } else {
            res.status(401).json({ message: 'Du skal være logget ind', type: 'error' });
        }

    } catch(err) {
        res.status(401).json({ message: 'Du skal være logget ind', type: 'error' });
    }
};

module.exports = auth;