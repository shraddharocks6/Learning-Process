const router    = require('express').Router();
const verify    = require('./verifyToken');
console.log("Posts /");

router.get('/',verify, (req,res) => {
    res.send(req.user);
});

module.exports = router;