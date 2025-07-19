const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/message', (req, res) => {
    res.json({ message: "Hej fra backend!" });
});

app.listen(3000, () => {
    console.log('Klar på port 3000');
});