const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('hello from heroku!');
})

app.listen(port, () => console.log(`Server started on port ${port}`))