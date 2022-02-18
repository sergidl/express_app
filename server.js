import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(express.json());

export default app.listen(process.env.PORT, () => {
    console.log(`Run on port ${process.env.PORT}`);
    console.log(`Server on http://localhost:${process.env.PORT}`);
})