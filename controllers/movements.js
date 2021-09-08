const movRouter = require('express').Router()
const Movement = require('../model/movement')

movRouter.get("/", (request, response, next) => {
    Movement.find({})
      .then((movements) => {
        response.json(movements).catch((error) => next(error))
      })
      .catch((error) => next(error))
  })

movRouter.post("/", (request, response, next) => {
    const movement = new Movement(request.body)
  
    movement
      .save()
      .then((result) => {
        response.status(201).json(result)
      })
      .catch((error) => next(error))
  })


module.exports = movRouter