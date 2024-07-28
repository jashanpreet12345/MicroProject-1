const express = require('express');
const app = express();
const path = require('path');
const items = require('./data/items.json');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/items', (req, res) => {
  res.json(items);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
