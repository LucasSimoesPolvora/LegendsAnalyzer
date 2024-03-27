import express from 'express';

const app = express()
app.use(express.json())
const port = 3000


app.listen(port, () => {
    console.log(`http://localhost:${port}/`)
})

app.get('/', (req,res) =>{
    res.send('hello')
})


app.use(({ res }) => {
    const message = "No ressource found try. Try in another URL"
})