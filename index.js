const pdf = require('html-pdf');
const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');


const pdfTemplate = require('./utils');
const app = express();
const port = process.env.PORT || 3000;

// npm install body-parser
// npm install cors

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.post('/create-pdf', (req, res) => {
    pdf.create(pdfTemplate(req.body), {}).toFile('result.pdf', (err) => {
        if(err) {
            res.send(Promise.reject());
        }

        res.send(Promise.resolve());
    });
});

app.get('/fetch-pdf', (req, res) => {
    res.sendFile(`${__dirname}/result.pdf`)
})

app.listen(port, () => console.log(`Listening on port ${port}`));














/*
var html = fs.readFileSync('./utils/businesscard.html', 'utf8');

pdf.create(html).toFile('businesscard.pdf', function(err, res) {
    if (err){
        console.log(err);
    } else {
        console.log(res);
    }
});



async function readPDF() {
    const buffer = await fs.readFile('businesscard.pdf')
    // Parse PDF from buffer
    const pdf = await pdfjs.getDocument({data: buffer});

}


  pdf.create(html).toBuffer(function(err, buffer){
    console.log('This is a buffer:', Buffer.isBuffer(buffer));
    
    // readPDF();
  });
  */