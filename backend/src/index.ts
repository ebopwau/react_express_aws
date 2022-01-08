import express from 'express'
import AWS from 'aws-sdk'

AWS.config.update({region: "us-east-1"});

const PORT:number = 3001

const app = express()
const translate = new AWS.Translate();

app.listen(PORT, () => {
    console.log(`Server is starting on port ${PORT}`)
})

app.use(express.json());

function translateText(obj:any) {
    const params = {
        SourceLanguageCode: obj.from || 'auto',
        TargetLanguageCode: obj.to,
        Text: obj.value
    };

    return new Promise((resolve, reject) => {
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

    console.log(req.body)

    translateText(req.body).then((data) =>  {
        res.json({
            message: data
        })
    }).catch(error =>  {
        res.json({
            message: error
        })
    })
})