const db  = require('../models')
const jwt = require('jsonwebtoken')

const generateToken = user => {
  return jwt.sign({ sub: user.id }, process.env.SECRET_KEY)
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

    if (!email || !password) {
      return res.status(422).send({ error: 'You must provide an email and password' })
    }

    const user  = await db.User.create({ email, password })
    const token = generateToken(user)

    res.send({ token })
    
  } catch (error) {
    if (error.code === 11000) {
      res.status(422).send({ error: 'This user already exists' })
    }
    console.log('Registration Error: ', error)
  }
}