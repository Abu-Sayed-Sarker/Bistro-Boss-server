const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 9000;
require('dotenv').config();

// middelware 
app.use(cors());
app.use(express.json());



app.get('/', (req, res) => {
    res.send('Boss is runing')
})
app.listen(port, () => {
    console.log(`Bistro boss runing on port no ${port}`)
})