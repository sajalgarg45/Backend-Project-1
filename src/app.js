import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN, // allow to server to accept request from different origin
    credentials: true
}))
app.use(express.json({ limit: '16kb' })); // for parsing application/json
app.use(express.urlencoded({ 
    extended: true,
    limit: '16kb'
 })); // for parsing application/x-www-form-urlencoded
app.use(express.static('public')); // to serve static files
app.use(cookieParser()); // to parse cookies


// Routes import
import userRouter from './routes/user.routes.js';

// routes declaration
app.use("/api/v1/users", userRouter);

export { app }