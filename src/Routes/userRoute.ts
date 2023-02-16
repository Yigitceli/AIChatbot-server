import express, { Express, Request, Response } from 'express';

const userRouter = express.Router();

userRouter.get('/', (req, res, next) => {
    res.send('user');
})

userRouter.post('/', (req, res, next) => {
    res.send('user');
})




export default userRouter;