// run `node index.js` in the terminal

// console.log(`Hello Node.js v${process.versions.node}!`);

// console.log(__filename) // 文件名
// console.log(__dirname) // 目录名

// console.log(`process`, process)

// console.log(`processs.argv`, process.argv)
// process.argv 可以拿到node的进程的参数 会出现在argv数组的最后一项

var palyerAction = process.argv[process.argv.length - 1];
console.log(' palyerAction:>> ', palyerAction);

let random = Math.random() * 3;

if (random < 1) {
  var computerAction = 'rock';
} else if (random > 2) {
  var computerAction = 'sessior';
} else {
  var computerAction = 'paper';
}

if (palyerAction === computerAction) {
  console.log('平局');
} else if (
  (computerAction === 'rock' && palyerAction === 'paper') ||
  (computerAction === 'sessior' && palyerAction === 'rock') ||
  (computerAction === 'paper' && palyerAction === 'sessior')
) {
  console.log('你赢了');
} else {
  console.log('你输了');
}
