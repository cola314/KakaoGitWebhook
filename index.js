const express = require('express')
const app = express()
const request = require('request')
const port = 9203

app.use(express.json());

app.post('/api/webhook/:room', (req, res) => {
    const room = req.params.room;

    if (room) {
        var result = `${req.body.repository.name}/${req.body.ref}\n` +
            `${req.body.commits[0].url}\n` +
            `Push by ${req.body.pusher.username}\n\n` +
            `${req.body.commits[0].message}`;

        console.log(result);
        sendMessage(room, result.trim());

        return res.sendStatus(200);
    }

    return res.sendStatus(400);
})

const sendMessage = (room, message) => {
    const options = {
        uri: 'http://cpplove.iptime.org:9200/send',
        method: 'POST',
        body: {
            password: "4321",
            room: room,
            message: message
        },
        json: true
    }
    request.post(options, function (error, response, body) {
        //post callback
    });
}

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})