const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/api/customers',(req,res)=> {
    res.send([
        {
            'id': 1,
            'name': '황대건',
            'phoneNumber': '01055',
            'doctor': '심인보',
            'birthday': '900604',
            'visitDay': '20210130'
        },
        {
                'id': 2,
                'name': '이상태',
                'phoneNumber': '0105651',
                'doctor': '심인보',
                'birthday': '900604',
                'visitDay': '20210130'
        }
    ]);
});

app.listen(port,() => console.log(`Listening on port ${port}`));
