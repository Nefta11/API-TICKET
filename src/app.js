import express from "express";
import morgan from "morgan";
import { config } from "dotenv";
import ticketRouter from "./routes/ticket.routes.js"

const app =express();
config()

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({extends:true}));
app.use('/api/tickets',ticketRouter)

export default app;