const express = require('express') // express 모드를 가져온다.
const app = express() // express 함수를 실행하여 새로운 express app을 생성
const port = 5000 // port는 자유

const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://hansol:goinddo1@@boilerplate.ofcl7.mongodb.net/<dbname>?retryWrites=true&w=majority", {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: true
}).then(() => console.log('MongoDB Conneted...')).catch(err => console.log(err))

app.get('/', (req, res) => { // 루트 디렉토리에 오면은 hello world! 글자를 출력
  res.send('Hello World! 안녕하세요')
})

app.listen(port, () => { // 앱이 port 5000번에서 실행한다.
  console.log(`Example app listening at http://localhost:${port}`)
})