import express from 'express';
import { initDb } from './db/sequelize.mjs';
import { loginRouter } from './routers/login/login.mjs';
import { signUpRouter } from './routers/signUp/signup.mjs';
import { changePasswordRouter } from './routers/changePassword/changePassword.mjs';
import { getPlayerPuuidRouter } from './routers/lolAPI/getPlayerPuuid.mjs';
import { getChampionsMasteryPuuid } from './routers/lolAPI/getChampionsMastery.mjs';
import { getMatchesInfoPuuid } from './routers/lolAPI/getMatchesInfoPlayerPuuid.mjs';
import { getLastLolMatches } from './routers/esportAPI/getLastLolMatches.mjs';
import { forgotPasswordRouter } from './routers/changePassword/forgotPassword.mjs';
import 'dotenv/config'
import helmet from 'helmet'
import cors from 'cors'

const app = express()
app.use(express.json())
app.use(helmet())
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
    exposedHeaders: 'Authorization'
}));

const port = 3000

initDb()

app.listen(port, () => {
    console.log(`http://localhost:${port}/`)
})

app.get('/', (req,res) =>{
    res.send('Welcome to the legends Analyzer API')
})

app.use('/login', loginRouter)

app.use('/signup', signUpRouter)

app.use('/changepassword', changePasswordRouter)

app.use('/forgotpassword', forgotPasswordRouter)

app.use('/lol/getPlayer', getPlayerPuuidRouter)

app.use('/lol/getChampionsMastery', getChampionsMasteryPuuid)

app.use('/lol/getMatches', getMatchesInfoPuuid)

app.use('/esport/lol/lastMatches', getLastLolMatches)

app.use(({ res }) => {
    const message = "No ressource found. Try another URL"
    res.send(message)
})