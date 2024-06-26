import express from "express";
import imageRoute from "./routes/imageRoute";
import dotenvFlow from "dotenv-flow";

const app = express();
dotenvFlow.config();

app.use(express.json());

app.use("/api/", imageRoute);

app.get("/", (req, res) => {
  res.send("OKEE!");
});

app.listen(5002, () => {
  console.log("Image Uploader Server is running on port 5002");
});
