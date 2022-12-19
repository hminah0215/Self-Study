import exp from 'constants';
import * as express from 'express';
import { Cat, CatType } from './app.model';

const app: express.Express = express();

// const data = [1, 2, 3, 4];

// 미들웨어는 순서가 중요!
app.use((req, res, next) => {
  console.log(req.rawHeaders[1]);
  console.log('로깅하는 미들웨어닷');
  next(); // 라우터를 찾도록 next 함수
});

// json 미들웨어
app.use(express.json());

// Read 고양이 전체 데이터 조회하기
app.get('/cats', (req, res) => {
  try {
    const cats = Cat;
    // throw new Error('db connect error');
    res.status(200).send({
      success: true,
      data: {
        cats,
      },
    });
  } catch (error: any) {
    res.status(400).send({
      success: false,
      error: error.message,
    });
  }
});

// Read 특정 고양이 데이터 조회하기
app.get('/cats/:id', (req, res) => {
  try {
    const params = req.params;
    console.log(params);
    const cat = Cat.find((cat) => {
      return cat.id === params.id;
    });
    res.status(200).send({
      success: true,
      data: {
        cat,
      },
    });
  } catch (error: any) {
    res.status(400).send({
      success: false,
      error: error.message,
    });
  }
});

// Create 새로운 고양이 정보 추가
app.post('/cats', (req, res) => {
  try {
    const data = req.body;
    //console.log(data);
    Cat.push(data); // 데이터 저장
    res.status(200).send({
      success: true,
      data: { data },
    });
  } catch (error: any) {
    res.status(400).send({
      success: false,
      error: error.message,
    });
  }
});

/*
app.get('/cats/som', (req, res, next) => {
  console.log(req.rawHeaders[1]);
  console.log('솜이 미들웨어');
  next();
});

app.get(
  '/',
  (req: express.Request, res: express.Response, next: express.NextFunction) => {
    // console.log(req);
    console.log(req.rawHeaders[1]);
    // res.send({ data });
    res.send({ cats: Cat });
  },
);

app.get('/cats/blue', (req, res) => {
  console.log(req.rawHeaders[1]);
  res.send({ blue: Cat[0] });
});

app.get('/cats/som', (req, res) => {
  console.log(req.rawHeaders[1]);
  res.send({ som: Cat[1] });
});

app.use((req, res, next) => {
  res.send({ error: '404 not found' });
  next();
});
*/

app.listen(8000, () => {
  console.log('server is on...');
});
