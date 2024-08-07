const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

app.listen(port, (req, res) => {
    res.send('Server is running on port ' + port);
    });``