const router = require('express').Router()
const {
    getAllThoughts,
    getThoughtById,
    createThought,
    deleteThought,
    updateThought,
    createRection,
    deleteReaction
} = require('../../controllers/thoughtController')

router.route('/')
    .get(getAllThoughts)
    .post(createThought)

router.route('/:id')
    .get(getThoughtById)
    .delete(deleteThought)
    .put(updateThought)

router.route('/:thoughtId/reactions')
    .post(createRection)

router.route('/:thoughtId/reactions/:reactionId')
    .delete(deleteReaction)

module.exports = router