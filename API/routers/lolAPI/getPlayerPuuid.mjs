import axios from 'redaxios'
import express from "express"

// Creating the router
const getPlayerPuuidRouter = express();

// endpoint for handling the router
getPlayerPuuidRouter.get("/", async (req, res) => {
    const API_KEY = process.env.API_KEY

    let split = req.body.accountName

    let accountName = split.split('#')
    
    const APICall = 'https://europe.api.riotgames.com/riot/account/v1/accounts/by-riot-id/' + accountName[0] + "/" + accountName[1]+ '?api_key=' + API_KEY
  
    await axios.get(APICall).then((result) => {
        if(!result){
            res.status(404).json({msg: 'No summoner found'})
        }
        res.status(200).json({puuid: result.data.puuid})
    }).catch((err) => {
        res.status(500).json({
            msg: 'A problem occured while we treated your request ! Try again later', 
            data: err + ' '
        })
    })
});

export { getPlayerPuuidRouter };