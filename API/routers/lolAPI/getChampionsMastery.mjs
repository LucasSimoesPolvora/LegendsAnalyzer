import axios from 'redaxios'
import express from "express"

// Creating the router
const getChampionsMasteryPuuid = express();

// endpoint for handling the router
getChampionsMasteryPuuid.get("/", async (req, res) => {
    const API_KEY = process.env.API_KEY

    let puuid = req.body.puuid
    
    const APICall = 'https://euw1.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-puuid/' + puuid +'/top?api_key=' + API_KEY
  
    await axios.get(APICall).then((result) => {
        if(!result){
            res.status(404).json({msg: 'No summoner found'})
        }
        res.status(200).json({puuid: result.data})
    }).catch((err) => {
        res.status(500).json({
            msg: 'A problem occured while we treated your request ! Try again later', 
            data: err + ' '
        })
    })
});

export { getChampionsMasteryPuuid };