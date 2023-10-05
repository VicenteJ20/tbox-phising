const fs = require('fs')

const directory = '/home/vicente/Documents/datosFormulario'

const saveInfo = async (data) => {
  const { userMail, userPass } = data

  const dataToSave = {
    email: userMail,
    password: userPass,
    date: new Date().toLocaleDateString('es-CL')
  }

  const formattedData = JSON.stringify(dataToSave)

  try {
    fs.writeFile(`${directory}/datos.json`, formattedData, (error) => {
      if (error) {
        console.log(error)
        return {
          status: 400,
        }
      }
  
      return {
        status: 201,
      }
    })
  } catch (err) {
    console.error(err)
  }
}

module.exports = {
  saveInfo
}