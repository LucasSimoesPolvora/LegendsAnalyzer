import express from 'express';
import { initDb } from './db/sequelize.mjs';
import { loginRouter } from './routers/login/login.mjs';
import { signUpRouter } from './routers/signUp/signup.mjs';
import { changePasswordRouter } from './routers/changePassword/changePassword.mjs';
import { testRouter } from './routers/test/test.mjs';
import { getPlayerPuuidRouter } from './routers/lolAPI/getPlayerPuuid.mjs';
import { getChampionsMasteryPuuid } from './routers/lolAPI/getChampionsMastery.mjs';
import { getMatchesInfoPuuid } from './routers/lolAPI/getMatchesInfoPlayerPuuid.mjs';
import 'dotenv/config'
import helmet from 'helmet'
import cors from 'cors'

const app = express()
app.use(express.json())
app.use(helmet())
app.use(cors())

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

app.use('/test16042024', testRouter)

app.use('/getPlayer', getPlayerPuuidRouter)

app.use('/getChampionsMastery', getChampionsMasteryPuuid)

app.use('/getMatches', getMatchesInfoPuuid)

app.use(({ res }) => {
    const message = "No ressource found. Try another URL"
    res.send(message)
})