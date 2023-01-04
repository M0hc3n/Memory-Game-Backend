const Player = require('../models/Player')

const getPlayers = async (req, res) => {
    
    try {
        const allPlayers = await Player.find({})

        res.status(200).json({success: true, allPlayers})
    } catch (error) {
        res.status(402).json({success: false, error})
    }
}

const createOrUpdatePlayer = async (req, res) => {
    const { fullName, highScore } = req.body

    if(! fullName || ! highScore){
        return res.status(400).json({
            success: false,
            error: "Player need to provide his name and score"
        })
    }

    const player = await Player.findOne({fullName})

    // if that player does not exist, we will add it
    if( ! player ){

        try {
            await Player.create({fullName, highScore})
    
            return res.status(200).json({
                success: true,
                message: "player created successfully"
            })
        } catch (error) {
            res.status(402).json({success: false, error})
        }
    // if that player exists, we will update it 
    } else {

        try {
            await Player.findOneAndUpdate({fullName} , {fullName, highScore})
    
            return res.status(200).json({
                success: true,
                message: "player updated successfully"
            })
        } catch (error) {
            res.status(402).json({success: false, error})
        }
    }

}

module.exports = {
    getPlayers,
    createOrUpdatePlayer
}