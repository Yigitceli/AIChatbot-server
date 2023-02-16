"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const userRoute_1 = __importDefault(require("./Routes/userRoute"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
app.use((0, cors_1.default)({ origin: 'http://localhost:5173' }));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, morgan_1.default)('dev'));
app.use('/user', userRoute_1.default);
app.get('/', (req, res) => {
    res.send('Express + TypeScript Server');
});
app.use((err, req, res, next) => {
    const errorStack = err.stack;
    const errorStatus = (err === null || err === void 0 ? void 0 : err.status) || 500;
    const errorMessage = (err === null || err === void 0 ? void 0 : err.message) || 'Something went broke!';
    return res.status(errorStatus).json({ message: errorMessage, stack: errorStack });
});
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
