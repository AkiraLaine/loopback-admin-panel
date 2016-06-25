'use strict'

const prod = process.env.NODE_ENV === 'production' ? true : false

let config = {
  modelsPath: prod ? 'somewhere else...' : './models'
}

module.exports = config
