import express from "express";
import "dotenv/config";
import cors from "cors";
import http from 'http';
import { connect } from "./lib/db.js";
const app = express();
//createServer is used to create an HTTP server
const server = http.createServer(app);

//Middleware setup
app.use(express.json({limit:"4mb"}));
app.use(cors());

app.use("/api/status",(req,res)=>res.send("server is live"));
//connect to the MongoDB
await connect();

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});