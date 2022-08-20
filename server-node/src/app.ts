import c from "config";
import express, { Request, Response } from "express";

const app = express();

const port = 8081;

app.get("/", (req: Request, res: Response) => {
  res.send("hello world franky");
});

app.listen(port, () => {
  console.log("App is running");
});
