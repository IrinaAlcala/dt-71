const express = require('express');
const router = express.Router();
const reviewCtrl = require('../controllers/reviews');

router.post('/movies/:id/reviews', reviewsCtrl.create);

module.exports = router;