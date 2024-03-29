import express from 'express';
import { initDb } from './db/sequelize.mjs';
import 'dotenv/config'

const app = express()
app.use(express.json())
const port = 3000

initDb()

app.listen(port, () => {
    console.log(`http://localhost:${port}/`)
})

app.get('/', (req,res) =>{
    res.send('hello')
})


app.use(({ res }) => {
    const message = "No ressource found try. Try in another URL"
})