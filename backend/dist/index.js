"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const aws_sdk_1 = __importDefault(require("aws-sdk"));
aws_sdk_1.default.config.update({ region: "us-east-1" });
const PORT = 3001;
const app = (0, express_1.default)();
const translate = new aws_sdk_1.default.Translate();
app.listen(PORT, () => {
    console.log(`Server is starting on port ${PORT}`);
});
app.use(express_1.default.json());
function translateText(obj) {
    const params = {
        SourceLanguageCode: obj.from || 'auto',
        TargetLanguageCode: obj.to,
        Text: obj.value
    };
    return new Promise((resolve, reject) => {
        translate.translateText(params, function (err, data) {
            if (err) {
                console.log(err, err.stack);
                reject(err);
            }
            else {
                resolve(data);
            }
        });
    });
}
app.post('/api', (req, res) => {
    console.log(req.body);
    translateText(req.body).then((data) => {
        res.json({
            message: data
        });
    }).catch(error => {
        res.json({
            message: error
        });
    });
});
//# sourceMappingURL=index.js.map