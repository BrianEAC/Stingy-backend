const movRouter = require('express').Router();
const Movement = require('../model/movement');

movRouter.get('/', (request, response, next) => {
  Movement.find({})
    .then((movements) => {
      response.json(movements);
    })
    .catch((error) => next(error));
});

movRouter.get('/:id', (request, response, next) => {
  Movement.findById(request.params.id)
    .then((mov) => {
      if (mov) {
        response.json(mov);
      } else {
        response.status(404).end();
      }
    })
    .catch((error) => next(error));
});

movRouter.post('/', (request, response, next) => {
  const movement = new Movement(request.body);

  movement
    .save()
    .then((result) => {
      response.status(201).json(result);
    })
    .catch((error) => next(error));
});

movRouter.delete('/:id', (request, response, next) => {
  Movement.findByIdAndRemove(request.params.id)
    .then((res) => {
      response.status(204).end();
    })
    .catch((error) => next(error));
});

module.exports = movRouter;
