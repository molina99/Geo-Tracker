const express = require("express");
const router = express.Router();

router.route('/ubicacion')
  .get((req, res) => {
    res.send(req.body);
  });

module.exports = router;