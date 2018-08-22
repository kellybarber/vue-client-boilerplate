const db  = require('../models')
const jwt = require('jsonwebtoken')

const generateToken = user => {
  return jwt.sign({ sub: user.id }, process.env.SECRET_KEY)
}

exports.login = async (req, res) => {
  try {
    const { userData: { email, password } } = req.body

    if (!email || !password) throw 'You must provide an email and password'

    const user = await db.User.findOne({ email })
    if (!user) throw 'No user with specified email exists'

    const verified = await user.comparePassword(password)
    if (!verified) throw 'Your password is incorrect'

    const token = generateToken(user)

    res.send({ token })

  } catch (error) {
    res.status(422).send({ error })
    console.log('Login Error: ', error)
  }
}

exports.register = async (req, res) => {
  try {
    const { userData: { email, password } } = req.body

    if (!email || !password) throw 'You must provide an email and password'

    const user  = await db.User.create({ email, password })
    const token = generateToken(user)

    res.send({ token })
    
  } catch (error) {
    if (error.code === 11000) error = 'This user already exists' 
    res.status(422).send({ error })
    console.log('Registration Error: ', error)
  }
}