const { Router } = require('express');
const router = Router();

router.use('/location', (req, res) => {
    res.json(req.originalUrl)
})


module.exports = router;