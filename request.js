import needle from 'needle';

needle.post('http://localhost:3000/submit-data',
    {name: 'Monina'},
    (err,res) => {
    console.log(res.body);
});