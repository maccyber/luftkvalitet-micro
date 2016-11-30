'use strict'

const { json, send } = require('micro')
const lookup = require('luftkvalitet')

module.exports = async (request, response) => {
  try {
    const data = await json(request)
    const result = await lookup(data)
    send(response, 200, result)
  } catch (err) {
    send(response, 500, err)
  }
}

