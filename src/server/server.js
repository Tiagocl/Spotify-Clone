require('dotenv').config({ path: require('path').resolve(__dirname, '../../.env') });



console.log('Client ID:', process.env.SPOTIFY_CLIENT_ID);
console.log('Client Secret:', process.env.SPOTIFY_CLIENT_SECRET);
console.log('Redirect URI:', process.env.SPOTIFY_REDIRECT_URI);
const express = require('express');
const SpotifyWebApi = require('spotify-web-api-node');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());



app.post('/refresh', (req, res) => {
    const refreshToken = req.body.refreshToken;
    const spotifyApi = new SpotifyWebApi({
        redirectUri: process.env.SPOTIFY_REDIRECT_URI,
        clientId: process.env.SPOTIFY_CLIENT_ID,
        clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
        refreshToken,
    });

    spotifyApi.refreshAccessToken().then(
        (data) => {
            res.json({
                accessToken: data.accessToken,
                expiresIn: data.body.expiresIn,
            });
        }).catch((err) => {
            console.log(err);
            res.sendStatus(400);
        });
});

app.post('/login', (req, res) => {
    const code = req.body.code;

    const spotifyApi = new SpotifyWebApi({
        redirectUri: process.env.SPOTIFY_REDIRECT_URI,
        clientId: process.env.SPOTIFY_CLIENT_ID,
        clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
    });

    spotifyApi.authorizationCodeGrant(code).then(data => {
        res.json({
            accessToken: data.body.access_token,
            refreshToken: data.body.refresh_token,
            expiresIn: data.body.expires_in,
        });
    }).catch((err) => {
        console.log(err);
        res.sendStatus(400);
    });
});

app.listen(5174, () => {
    console.log("Server is running on http://localhost:5174");
});
