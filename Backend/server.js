const express = require('express');
const bodyParser = require('body-parser');
const Twit = require('twit');
const cors = require('cors');
let config = require('./credential')

const app = express();

app.use(cors());
app.use(bodyParser.json());


app.post('/status', (req, res) => {
    const twitBot = new Twit(credential);
    let text = req.body;
    console.log(text);
    twitBot.post('statuses/update', text, function (err, data, resp) {
        if (err) {
            res.send(err);
        } else {
            res.send(data.text + "  🐦 complete")
        }
    });
});

app.get('/gettweets', (req, res) => {
    const twitView = new Twit(credential);
    twitView.get('search/tweets', { q: 'Adhi9Darth', count: 100 },
        function (err, data, response) {
            const result = { ...data.statuses };
            const obj = {};
            obj['alltweex'] = [];
            for (const key in result) {
                for (const tex in result[key]) {
                    if (tex === "text") {
                        obj.alltweex.push(result[key][tex]);
                    }
                }
            }
            console.log(obj);
            res.send(obj);
        })
})

app.listen(3000);
