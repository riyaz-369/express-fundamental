"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
// router
const userRouter = express_1.default.Router();
const courseRouter = express_1.default.Router();
// parsers
app.use(express_1.default.json());
app.use("/api/v1/users", userRouter);
app.use("/api/v1/courses", courseRouter);
userRouter.post("/create-user", (req, res) => {
    const user = req.body;
    console.log(user);
    res.json({
        success: true,
        message: "user created successfully",
        data: user,
    });
});
courseRouter.post("/create-course", (req, res) => {
    const course = req.body;
    console.log(course);
    res.json({
        success: true,
        message: "course created successfully",
        data: course,
    });
});
// middleware
const logger = (req, res, next) => {
    console.log(req.url, req.method, req.host, req.hostname);
    next();
};
app.get("/", logger, (req, res) => {
    res.send("Hello world!");
});
app.post("/", (req, res) => {
    console.log(req.body);
    res.send("got data");
});
// params
app.get("/:userId", (req, res) => {
    console.log(req.params);
    res.send("success");
});
// query
app.get("/", (req, res) => {
    console.log(req.query);
    res.send("successfully get query");
});
exports.default = app;
