const express = require('express')
const cors = require('cors')

const authRoutes = require('./routes/auth')

const app = express()
const port = process.env.PORT || 8080

require('dotenv').config()


app.use(cors())
app.use(express.json())

app.get('/',(req,res)=>{
    res.send('server start')
})
app.use('/auth',authRoutes)

app.listen(port, () =>{
    console.log(`Server start on port ${port}`)
})