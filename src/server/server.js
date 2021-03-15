let express = require('express');
let path = require('path');
let fs = require('fs');

const app = express();
const port = 3000;



app.use( express.static(path.join(__dirname, '../public')));

app.get('/', function (request, response) {
    response.sendFile(path.join(__dirname, '/public/index.html'));
});

app.listen(port, () => {
    console.log(`listening at http://localhost:${port}`);
});


