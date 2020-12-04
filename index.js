const express = require('express'); // express 모드를 가져온다.
const app = express(); // express 함수를 실행하여 새로운 express app을 생성
const port = 5000; // port는 자유
const bodyParser = require('body-parser');
const { User } = require('./models/User');
const mongoose = require('mongoose');
const config = require('./config/key');

// application/x-www-form-urlencoded 분석해서 가져옴
app.use(bodyParser.urlencoded({extended: true}));
// application/json 분석해서 가져옴
app.use(bodyParser.json())

mongoose.connect(config.mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: true
}).then(() => {
  console.log('MongoDB Connected...')
}).catch(err => console.log(err));


app.get('/', (req, res) => { // 루트 디렉토리에 오면은 hello world! 글자를 출력
  res.send('Hello World! 안녕하세요 반갑습니다.')
});

app.post('/register', (req, res) => {
  // 회원가입 할 때 필요한 정보들을 client에서 가져오면
  // 그것들을 데이터베이스에 넣어준다.
  const user = new User(req.body);

  user.save((err, doc) => {
    if(err) {
      return res.json({success: false, err});
    }

    return res.status(200).json({
      success: true
    })
  })
});

app.listen(port, () => { // 앱이 port 5000번에서 실행한다.
  console.log(`Example app listening at http://localhost:${port}`)
});