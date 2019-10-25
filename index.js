
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// when a random route is inputed
app.get('/', (req, res) => {
  res.status(200).send({
     message: 'Welcome to this API.'
  })
});
app.listen(port, () => {
   console.log(`Server is running on PORT ${port}`);
});
