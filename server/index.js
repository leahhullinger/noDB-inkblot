const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const PI = require('./personalityInsights')
const profiles = require('./profiles-controller')


const app = express();

app.use(express.static(`${__dirname}/client/app.js`))
app.use(bodyParser.json());
app.use(cors());


//endpoints
app.get('/inkblot/profiles', profiles.read)
app.post('/inkblot/profiles', profiles.create)
app.post('/api/getProfile', PI.newPersonality)






app.listen(3005, () => {
  console.log('listening on port 3005')
})

