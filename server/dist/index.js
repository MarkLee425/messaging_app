"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const dotenv_1 = __importDefault(require("dotenv"));
const api_1 = __importDefault(require("./api"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use("/api", api_1.default);
app.get('/', (_req, res) => {
    res.status(200).send('hello world!');
});
app.listen(process.env.SERVER_PORT || 8000, () => {
    console.log('listening on port ' + process.env.SERVER_PORT);
});
//# sourceMappingURL=index.js.map