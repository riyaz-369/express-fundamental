import express, { NextFunction, Request, Response } from "express";
const app = express();

// parsers
app.use(express.json());

// middleware
const logger = (req: Request, res: Response, next: NextFunction) => {
  console.log(req.url, req.method, req.host, req.hostname);
  next();
};

app.get("/", logger, (req: Request, res: Response) => {
  res.send("Hello world!");
});

app.post("/", (req: Request, res: Response) => {
  console.log(req.body);
  res.send("got data");
});

// params
app.get("/:userId", (req: Request, res: Response) => {
  console.log(req.params);
  res.send("success");
});

// query
app.get("/", (req: Request, res: Response) => {
  console.log(req.query);
  res.send("successfully get query");
});

export default app;
