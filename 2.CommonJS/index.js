var palyerAction = process.argv[process.argv.length - 1];

const game = require('./lib');

let count = 0;
// 监听事件 进程会一直行下去
process.stdin.on('data', (e) => {
  const palyerAction = e.toString().trim();

  const result = game(palyerAction);

  if (result == -1) {
    count++;
  }

  if (count === 3) {
    console.log('你太厉害了,我不玩了');
    process.exit();
  }
});
