const express = require('express');
const bodyParser = require('body-parser');
const Twit = require('twit');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.json());

const credentials = {
    consumer_key: 'Bf7fhNhtOkNYwz9d1MjNE0iMA',
    consumer_secret: 'yF0H5VPZuKDc1gLa7BHZdTrue7sQOVLb3VBlYGOoj5Cdekb5wc',
    access_token: '1248537328148045825-NGcrO2ZREe3QK0DI2EN4KBHt1uPHcx',
    access_token_secret: 'SQ5gkdZILbfX5edAry0ptP6HrM9qGnO06msnF3UTaq7J5'
}

app.post('/status', (req, res) => {
    const twitBot = new Twit(credentials);
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
    const twitView = new Twit(credentials);
    twitView.get('search/tweets', { q: 'Adhi9Darth', count: 100 }, function (err, data, response) {
        const respo = data.statuses;
        res.send(respo);
    })
})

app.listen(3000);