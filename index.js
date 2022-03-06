// 1
// const stdin = process.stdin.pipe(process.stdout)
//  .on('data', msg=>(console.log('data terminal', msg.toString())))
//  stdin.pipe(process.stdout)



// 2
// const http = require('http')
// const fs = require('fs')
// http.createServer((req, res) => {
// //   const file = fs.readFileSync('big.file')
// // //   .toString()
// //   res.write(file)
// //   res.end()
//    fs
//      .createReadStream('big.file')
//      .pipe(res)
// }).listen(3001, () => {console.log('ok')})


// 3
// const net = require('net')
// net.createServer(socket => socket.pipe(process.stdout)).listen(1338)
// Listen > run in command line
// node -e "process.stdin.pipe(require('net').connect(1338))" 