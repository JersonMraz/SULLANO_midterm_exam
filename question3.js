const express = require('express'); //Import the expresss module

const app = express(); //Initialize express ap

//Route /test
app.get('/test', (req, res) => {
  res.json({ message: 'Express is working! Jerson S. Sullano' });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
