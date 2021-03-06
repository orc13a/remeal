var jwt = require('jsonwebtoken');

const auth = async (req, res, next) => {
    let token = '';
    let userId = '';
    
    if (req.body.user !== undefined && req.body.user.userId !== undefined) {
        token = req.body.user.token;
        userId = req.body.user.userId;
    } else {
        token = req.headers.auth;
        userId = req.params.userId;
    }
    
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