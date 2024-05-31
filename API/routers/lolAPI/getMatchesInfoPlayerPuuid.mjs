import axios from "redaxios";
import express from "express";

// Creating the router
const getMatchesInfoPuuid = express();

// endpoint for handling the router
getMatchesInfoPuuid.get("/", async (req, res) => {
  const API_KEY = process.env.API_KEY;
  let matchesIDs = [];

  let puuid = req.body.puuid;

  let option = req.body.options;

  let APICallOptions = "";
  if (option.type) {
    APICallOptions = APICallOptions + "type=" + option.type + "&";
  }
  if (option.start) {
    APICallOptions = APICallOptions + "start=" + option.start + "&";
  }
  if (option.count) {
    APICallOptions = APICallOptions + "count=" + option.count + "&";
  }

  const APICall =
    "https://europe.api.riotgames.com/lol/match/v5/matches/by-puuid/" +
    puuid +
    "/ids?" +
    APICallOptions +
    "api_key=" +
    API_KEY;

  await axios
    .get(APICall)
    .then((result) => {
      if (!result) {
        res.status(404).json({ msg: "No matches were found !" });
      }
      matchesIDs = result.data;
    })
    .catch((err) => {
      res.status(500).json({
        msg: "A problem occured while we treated your request ! Try again later",
        data: err + " ",
      });
    });

  const APICallMatchInfo =
    "https://europe.api.riotgames.com/lol/match/v5/matches/";

  let matchesInfo = [];
  //   matchesIDs.forEach(async (matchId, index) => {
  //     await axios
  //       .get(APICallMatchInfo + matchId)
  //       .then((result) => {
  //         if (!result) {
  //           matchesInfo[index] = {
  //             data: "cannot get the data about this game !",
  //             status: 404,
  //           };
  //         }

  //         console.log(result.data)

  //         matchesInfo[index] = { data: result.data };
  //       })
  //       .catch((error) => {
  //         matchesInfo[index] = {
  //           data:
  //             "A problem occured while we treated your request ! Try again later : " +
  //             error,
  //           status: 500,
  //         };
  //       });

  //     // if (matchesInfo[index].status) {
  //     //   res
  //     //     .json(matchesInfo[index].status)
  //     //     .json({ data: matchesInfo[index].data });
  //     // }
  //   });

  for (let i = 0; i < matchesIDs.length; i++) {
    await axios
      .get(APICallMatchInfo + matchesIDs[i] + "?api_key=" + API_KEY)
      .then((result) => {
        console.log(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  res.json(200).json({ data: matchesInfo });
});

export { getMatchesInfoPuuid };
