import express, { Express, NextFunction, Request, Response } from 'express';
import dotenv from 'dotenv';
import userRouter from './Routes/userRoute';
import morgan from 'morgan';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;


app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'));

app.use('/user', userRouter);

app.get('/', (req: Request, res: Response) => {
    res.send('Express + TypeScript Server');
});


app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    const errorStack = err.stack;
    const errorStatus = err?.status || 500;
    const errorMessage = err?.message || 'Something went broke!';
    return res.status(errorStatus).json({message: errorMessage, stack: errorStack});
})

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});