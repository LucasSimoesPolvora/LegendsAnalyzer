import axios from 'redaxios'
import express from "express"

// Creating the router
const getLastLolMatches = express();

// endpoint for handling the router
getLastLolMatches.get("/", async (req, res) => {    

    const APICall = 'https://api.pandascore.co/lol/matches?filter[status]=finished&sort=-end_at'
  
    //const response = await axios.request(options)
    await axios.get(APICall, {
        headers : {
            Authorization: 'Bearer ' + process.env.ESPORT_TOKEN
        }
    }).then((result) => {
        if(!result){
            res.status(404).json({msg: 'No matches found'})
        }
        res.status(200).json({puuid: result.data})
    }).catch((err) => {
        res.status(500).json({
            msg: 'A problem occured while we treated your request ! Try again later', 
            data: err + ' '
        })
    })
});

export { getLastLolMatches };