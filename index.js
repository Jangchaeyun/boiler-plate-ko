const express = require('express')
const app = express()
const port = 5000
const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://zzangsally:t4840779@boiler-plate.b3kz1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
}).then(() => console.log('MongoDB connected...'))
.catch(err => console.log(err))
app.get('/', (req, res) => res.send('Hello world'))

app.listen(port, () => console.log('Example app listing on port $(port)!'))