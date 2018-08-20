const db  = require('../models')
const jwt = require('jsonwebtoken')

const generateToken = user => {
  const timestamp = new Date().getTime()
  return jwt.encode({ sub: user.id, iat: timestamp }, process.env.SECRET_KEY)
}

exports.login = async (req, res) => {
  try {
    const { userData: { email, password } } = req.body

    res.send({ login: 'login' })

  } catch (error) {
    console.log('Login Error: ', error)
  }
}

exports.register = async (req, res) => {
  try {
    const { userData: { email, password } } = req.body

    const user = await db.User.create({ email, password })

    const token = await jwt.sign({ userId: user._id }, process.env.SECRET_KEY)

    console.log('TOKEN', token)

    res.send({ register: 'register' })
    
  } catch (error) {
    console.log('Registration Error: ', error)
  }
}