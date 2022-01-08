import express from 'express'
import AWS from 'aws-sdk'
import {RequestParams, ResolveData} from './types/index.props'

AWS.config.update({region: "us-east-1"});

const PORT:number = 3001

const app = express()
const translate = new AWS.Translate();

app.listen(PORT, () => {
    console.log(`Server is starting on port ${PORT}`)
})

app.use(express.json());

function translateText(obj:RequestParams) {
    const params = {
        SourceLanguageCode: obj.from || 'auto',
        TargetLanguageCode: obj.to,
        Text: obj.value
    };

    return new Promise((resolve: (arg0: ResolveData) => void, reject) => {
        translate.translateText(params, function (err, data) {
            if (err) {
                console.log(err, err.stack);
                reject(err)
            } else {
                resolve(data)
            }
        });
    })
}

app.post('/api', (req, res) => {
    const request = {
        from: req.body.from || 'auto',
        to: req.body.to,
        value: req.body.value
    }

    translateText(request).then((data) =>  {
        res.json({
            message: data
        })
    }).catch(error =>  {
        res.json({
            message: error
        })
    })
})