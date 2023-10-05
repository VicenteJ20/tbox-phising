const express = require('express')
const router = express.Router()
const homeController = require('../../controllers/homeController')

router
  .get('/', homeController.getHomeScreen)
  .get('/Login/Login', homeController.getLoginScreen)
  .post('/api/saveInfo', homeController.saveInfoScreen)

module.exports = router