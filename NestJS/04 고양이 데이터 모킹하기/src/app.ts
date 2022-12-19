import exp from 'constants';
import * as express from 'express';
// import { Cat, CatType } from './cats/cats.model';
import catsRouter from './cats/cats.route';

class Server {
  public app: express.Application;

  constructor() {
    const app: express.Application = express();
    this.app = app;
  }

  private setRoute() {
    // 분리한 라우터 등록
    this.app.use(catsRouter);
  }

  private setMiddleware() {
    // 미들웨어는 순서가 중요!
    this.app.use((req, res, next) => {
      console.log(req.rawHeaders[1]);
      console.log('로깅하는 미들웨어닷');
      next(); // 라우터를 찾도록 next 함수
    });

    // json 미들웨어
    this.app.use(express.json());

    this.setRoute();
  }

  public listen() {
    this.setMiddleware();
    this.app.listen(8000, () => {
      console.log('server is on...');
    });
  }
}

function init() {
  const server = new Server();
  server.listen();
}
init();

const app: express.Express = express();

// const data = [1, 2, 3, 4];

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
