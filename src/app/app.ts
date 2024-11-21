import express, { Request, Response } from "express";
const app = express();

// parsers
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello world!");
});

app.post("/", (req: Request, res: Response) => {
  console.log(req.body);
  res.send("got data");
});

export default app;
