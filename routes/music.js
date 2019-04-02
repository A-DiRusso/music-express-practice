const express = require('express');
const Router = express.Router;

const {
    create,
    retrieveAll,
    update,
    deleteOne
} = require('../controllers/music');

const musicRouter = Router();

musicRouter.get('/', retrieveAll);
musicRouter.post('/', create);
musicRouter.put('/', update);
musicRouter.delete('/', deleteOne);

module.exports = musicRouter;
