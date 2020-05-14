const dotenv = require('dotenv');
dotenv.config();

const path = require('path');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());

app.use(express.static(__dirname + '/dist'));

const aylien = require('aylien_textapi');

const textapi = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
});

let polarity = null;
let subjectivity = null;

function analyzeText(postResponse, text='') {

}




app.get('/', function (req, res) {
    res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})

app.post('/analyze', function (req, res) {
    const url = req.body.url;
    textapi.extract({
        url: url
        }, (error, response) => {
            if (error === null) {
                textapi.sentiment({
                    text: response.article,
                    mode: 'document'
                    }, (error, response) => {
                        if (error === null) {
                            res.send({
                                polarity: response.polarity,
                                subjectivity: response.subjectivity,
                            });
                        }
                        else {
                            console.log('error analyzing', error);
                        }
                    }
                );
            }
            else {
                console.log('error extracting', error);
            }
        });
})
