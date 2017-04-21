/**
 * Created by beebe on 4/19/2017.
 */
const express = require(`express`);
const app = module.exports = express();
const bodyParser = require(`body-parser`);
const axios = require(`axios`);
const cors = require(`cors`);
const corsOptions = {origin: 'http://localhost:3001'};
const config = require(`./.config.js`);


app.use(bodyParser.json());
app.use(cors(corsOptions));
app.use(express.static(`public`));


app.listen(3000,()=>{
   console.log(`Wub a dub dub on 3000 morty`)
});