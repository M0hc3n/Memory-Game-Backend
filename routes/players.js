const express = require('express')
const router = express.Router()

// to parse the data
router.use(express.json())
router.use(express.urlencoded({extended: false}))

const {
    getPlayers,
    createOrUpdatePlayer
} = require('../controllers/players')

router.route('/').get(getPlayers).post(createOrUpdatePlayer)

module.exports = router