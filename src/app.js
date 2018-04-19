const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.json({
        msg: 'Welcome to Invoice builder backend'
    })
});
app.listen(PORT, () => {
    console.log(`Server is running at PORT ${PORT}`);
});