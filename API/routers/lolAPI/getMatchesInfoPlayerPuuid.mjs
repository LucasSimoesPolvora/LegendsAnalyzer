import axios from 'redaxios'
import express from "express"

// Creating the router
const getMatchesInfoPuuid = express();

// endpoint for handling the router
getMatchesInfoPuuid.get("/", async (req, res) => {
    const API_KEY = process.env.API_KEY
    let matchesID = ''

    let puuid = req.body.puuid

    let option = req.body.options

    let APICallOptions = ''
    if (option.type) {
        APICallOptions = APICallOptions + 'type=' + option.type + '&'
    }
    if (option.start) {
        APICallOptions = APICallOptions + 'start=' + option.start + '&'
    }
    if (option.count) {
        APICallOptions = APICallOptions + 'count=' + option.count + '&'
    }

    const APICall = 'https://europe.api.riotgames.com/lol/match/v5/matches/by-puuid/' + puuid + '/ids?' + APICallOptions + 'api_key=' + API_KEY

    await axios.get(APICall).then((result) => {
        if (!result) {
            res.status(404).json({ msg: 'No matches were found !' })
        }
        matchesID = result
    }).catch((err) => {
        res.status(500).json({
            msg: 'A problem occured while we treated your request ! Try again later',
            data: err + ' '
        })
    })

    await axios.get()
});

export { getMatchesInfoPuuid };