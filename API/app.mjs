import express from 'express';
import { initDb } from './db/sequelize.mjs';
import { loginRouter } from './login/login.mjs';
import { signUpRouter } from './signUp/signup.mjs';
import 'dotenv/config'

const app = express()
app.use(express.json())
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
app.get('/signup', (req,res) => {
    res.send('hello')
})

app.use(({ res }) => {
    const message = "No ressource found. Try another URL"
})