const express = require('express');
const cors = require('cors');
app = express()

app.use(cors());

app.use( express.json() );

app.get('/', function(req, res) {
    res.send('hello world');
  });

app.get('/location/:id', (req, res) => {
    console.log(req.params.id);
    res.json({ background: 'red' })
    })

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log('Connected to: ', PORT));

module.exports = app