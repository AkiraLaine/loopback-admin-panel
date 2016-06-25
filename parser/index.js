'use strict'

const config = require('./config')
const glob = require('glob')

/**
 * Discover model.json files
 * @return {Array}
 */
function getModelPaths () {
  return glob.sync(`${config.modelsPath}/*.json`)
}

/**
 * Require model.json files and return data
 * @param  {Array} paths Paths to model.json files
 * @return {Array}
 */
function readModels (paths) {
  let models = []

  for (let i = 0; i < paths.length; i++) {
    models.push(require(paths[i]))
  }

  return models
}


function _init () {
  let paths = getModelPaths()
  console.log(readModels(paths))
}


_init()
