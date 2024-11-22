import express, { NextFunction, Request, Response } from "express";
const app = express();
// router
const userRouter = express.Router();
const courseRouter = express.Router();

// parsers
app.use(express.json());
app.use("/api/v1/users", userRouter);
app.use("/api/v1/courses", courseRouter);

userRouter.post("/create-user", (req: Request, res: Response) => {
  const user = req.body;
  console.log(user);

  res.json({
    success: true,
    message: "user created successfully",
    data: user,
  });
});

courseRouter.post("/create-course", (req: Request, res: Response) => {
  const course = req.body;
  console.log(course);

  res.json({
    success: true,
    message: "course created successfully",
    data: course,
  });
});

// middleware
const logger = (req: Request, res: Response, next: NextFunction) => {
  console.log(req.url, req.method, req.host, req.hostname);
  next();
};

// error handling
app.get("/", logger, (req: Request, res: Response, next: NextFunction) => {
  try {
    res.send(something);
  } catch (error) {
    next(error);
    // console.log(error);
    // res.status(400).json({
    //   success: false,
    //   message: "Failed to get data",
    // });
  }
});

app.post("/", (req: Request, res: Response) => {
  console.log(req.body);
  res.send("got data");
});

// params
// app.get("/:userId", (req: Request, res: Response) => {
//   console.log(req.params);
//   res.send("success");
// });

// query
app.get("/", (req: Request, res: Response) => {
  console.log(req.query);
  res.send("successfully get query");
});

app.all("*", (req: Request, res: Response) => {
  res.status(400).json({
    success: false,
    message: "not found",
  });
});

// global error handler
app.use((error: any, req: Request, res: Response, next: NextFunction) => {
  console.log(error);
  if (error) {
    res.status(400).json({
      success: false,
      message: "something went wrong",
    });
  }
});

export default app;
