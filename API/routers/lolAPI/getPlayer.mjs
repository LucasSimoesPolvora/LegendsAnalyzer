import axios from 'redaxios'
import express from "express"

// Creating the router
const getPlayerRouter = express();

// endpoint for handling the router
getPlayerRouter.get("/", async (req, res) => {
    const API_KEY = 'RGAPI-7451e32c-066d-4def-a5e5-4a7eda50815c'

    let split = req.body.accountName

    let accountName = split.split('#')

    console.log(accountName)
    
    const APICall = 'https://europe.api.riotgames.com/riot/account/v1/accounts/by-riot-id/' + accountName[0] + "/" + accountName[1]+ '?api_key=' + API_KEY
  
    console.log('done   ' + APICall)
    await axios.get(APICall).then((result) => {
        console.log('doooooonne')
        if(!result){
            res.status(404).json({msg: 'No summoner found'})
        }
        res.status(200).json({data: result.data})
    }).catch((err) => {
        res.status(500).json({
            msg: 'A problem occured while we treated your request ! Try again later', 
            data: err + ' '
        })
    })
});

export { getPlayerRouter };