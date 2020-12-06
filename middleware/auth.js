const jwt = require('jsonwebtoken');

module.exports = function(req, res, next) {
    
    const token = req.header('x-auth-token');
    console.log('got here 1');
    if(!token) {
        console.log('got here 2');
        return res.status(401).json({ msg: 'Acesso negado!'});
    }

    try {
        console.log('got here 3');
        jwt.verify(token, process.env.JWT_SECRET, (error, decoded) => {
            if(error){
                console.log('got here 4');
                console.log(error);
                return res.status(401).json({ msg: 'Token is not valid' });
            } else {
                console.log('got here 5');
                req.user = decoded.user;
                next();
            }
        });
    } catch (error) {
        console.log('got here 6');
        console.error('something wrong with auth middleware');
        res.status(500).json({ msg: 'Server Error' });
    }
};