import express from 'express';

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.post('/submit-data', (req,res) => {
    res.send('Received a POST request from ' + req.body.name);
});

app.listen(3000, () => {console.log('Server started at port 3000')});

