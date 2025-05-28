const express = require('express');
const app = express();

app.get('/api/status', (req, res) => {
    res.json({ status: 'ok', version: '1.0.0' });
});

app.get('/api/data', (req, res) => {
    res.json({ data: [1, 2, 3, 4] });
});

const port = process.env.PORT || 3000;
if (require.main === module) {
    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
    });
}

module.exports = app;
