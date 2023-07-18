const router = require('express').Router();
const apiRoutes = require('./api');

// /api
router.use('/api', apiRoutes);

router.use((req, res) => {
  res.send('Go back')
});

module.exports = router;