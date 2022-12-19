import * as express from "express";

const app: express.Express = express();
// const app: express.Application = express();
// 위, 아래 모두 사용 가능 app 이 곧 서버라고 생각

const port: number = 8000;

// req,res에 타입을 적어본다면 아래와 같음
app.get("/", (req: express.Request, res: express.Response) => {
  // console.log(req);
  // res.send("hello world");
  res.send({ name: "min", age: 99, friends: ["aa", "bb", "cc"] });
});

// listen 서버를 연다고 생각
app.listen(port, () => {
  console.log(`포트 사용중, http://localhost:${port}`);
});
