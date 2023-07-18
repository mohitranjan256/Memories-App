import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Router from './routing/router.js';
import userRouter from './routing/User-router.js';
import postRouter from './routing/Post-routes.js';
import cors from 'cors';
const app =express();
dotenv.config();
//middleware
app.use(cors());
app.use(express.json());
app.use("",Router);
app.use("/user",userRouter);
app.use("/posts",postRouter);

// connections
mongoose.set('strictQuery', false);
mongoose.connect(
    `mongodb+srv://coolmohit:${process.env.MONGO_DB_PASSWORD}@cluster0.wsr642l.mongodb.net/?retryWrites=true&w=majority`
    ).then(()=>
        app.listen(5000 , () => console.log('Connection Sucessful and App is running '))
    )
    .catch((err)=>console.log(error.message()));

