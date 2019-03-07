(async () => {

  const setupBoard = require('./board');
  const {turnLED, bounce, reset, play, wait} = await setupBoard();

  const express = require('express');
  const bodyParser = require("body-parser");
  const cors = require('cors');

  const app = express();
  
  app.use(cors());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true}));

  function isRPS(text) {
    return text === 'rock' || text === 'paper' || text === 'scissors'; 
  }
  
  app.post('/', async function (req, res) {
    console.log(req.body);

    const hand = req.body.message.toLowerCase();
    if (!isRPS(hand)) {
      return;
    }
    
    console.log("get ready");
    turnLED('on');
    await wait(2000);
    turnLED('off');
    await bounce(3);
    await play(hand);
  });
  
  app.listen(8008, function () {
    console.log('😎')
  });

})();
