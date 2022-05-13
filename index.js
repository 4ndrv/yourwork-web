
const express = require('express');
const path = require('path');
const app = express();
const port = 4848 || 3000;
const cors = require('cors');

app.use(express.static(__dirname + "/"))
app.use(express.static(path.join(__dirname, 'public')))
const corsOptions = {
    origin: '*',
    credentials: true,            //access-control-allow-credentials:true
    optionSuccessStatus: 200,
}
app.use(cors(corsOptions));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
})

app.listen(port, () => {
    console.log('starting..');
})