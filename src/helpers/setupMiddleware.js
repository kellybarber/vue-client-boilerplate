import thunk from 'redux-thunk'
import logger from 'redux-logger'

const baseMiddleware = [ thunk ]
const devMiddleware  = [ logger ]

export default () => {
  switch(process.env.NODE_ENV) {
    case 'development':
      return [
        ...baseMiddleware,
        ...devMiddleware
      ]
    default: 
      return baseMiddleware
  }
}