import express from "express";
import "dotenv/config";
const app = express();

app.use(express.urlencoded({ extended: true }));

app.listen(process.env.PORT, () => {
    console.log(`Server listening on port ${process.env.PORT}`)
})