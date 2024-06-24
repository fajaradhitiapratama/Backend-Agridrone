var express = require('express')
var router = express.Router()

var basicControler = require('../controller/basic')

router.get('/tampil_soil',basicControler.getSoil)
router.post('/tampil_history_soil',basicControler.getHistorySoil)
router.get('/fb',basicControler.masukin)
router.post('/tampil_history_weahter',basicControler.getHistoryWeather)

module.exports = router;

