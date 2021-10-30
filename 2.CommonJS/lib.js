module.exports = function (palyerAction) {
  let random = Math.random() * 3;

  if (random < 1) {
    var computerAction = 'rock';
  } else if (random > 2) {
    var computerAction = 'sessior';
  } else {
    var computerAction = 'paper';
  }

  console.log(`我出了${computerAction}`);

  if (palyerAction === computerAction) {
    console.log('平局');
    return 0;
  } else if (
    (computerAction === 'rock' && palyerAction === 'paper') ||
    (computerAction === 'sessior' && palyerAction === 'rock') ||
    (computerAction === 'paper' && palyerAction === 'sessior')
  ) {
    console.log('你赢了');
    return -1;
  } else {
    console.log('你输了');
    return 1;
  }
};
