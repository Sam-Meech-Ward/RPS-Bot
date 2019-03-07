const setupHand = require('./board');

(async () => {
  const {turnLED, bounce, reset, play, wait} = await setupHand();

  const hand = process.argv[2];
  console.log("get ready");
  turnLED('on');
  await wait(2000);
  turnLED('off');
  await bounce(3);
  await play(hand);
})();
