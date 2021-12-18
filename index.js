const express = require('express');
const cors = require('cors');
app = express()

app.use(cors());

app.use( express.json() );

app.get('/location/:id', (req, res) => {
    console.log(req.params.id);
    res.json({ background: 'orange' })
    })

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log('Connected to: ', PORT));

module.exports = app