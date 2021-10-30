// run `node index.js` in the terminal

// console.log(`Hello Node.js v${process.versions.node}!`);

// console.log(__filename) // 文件名
// console.log(__dirname) // 目录名

// console.log(`process`, process)

// console.log(`processs.argv`, process.argv)
// process.argv 可以拿到node的进程的参数 会出现在argv数组的最后一项


var palyerAction = process.argv[process.argv.length - 1]
console.log(' palyerAction:>> ', palyerAction);


let random = Math.random() * 3

if (random < 1) {
	palyerAction = 'rock'
} else if (random > 2) {
	
	palyerAction = 'sessior'
} else {
	palyerAction = 'paper'
}

if (palyerAction === random) {
	console.log('平局')
} else if {
	(palyerAction === 'rock' && random === 'paper') ||
	(palyerAction === 'sessior' && random === 'rock') ||
	(palyerAction === 'paper' && random === 'sessior')

}	{
				console.log('你赢了')
} else {
	console.log('你输了')
}

