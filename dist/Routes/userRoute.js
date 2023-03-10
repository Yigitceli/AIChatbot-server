"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userRouter = express_1.default.Router();
userRouter.get('/', (req, res, next) => {
    res.send('user');
});
userRouter.post('/', (req, res, next) => {
    res.send('user');
});
exports.default = userRouter;
