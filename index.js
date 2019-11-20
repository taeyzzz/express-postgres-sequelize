const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const rolesRouter = require("./src/server/routers/role")
const usersRouter = require("./src/server/routers/user")

const app = express();
const port = process.env.PORT || 3000

app.use(cors())
app.use(cookieParser())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/roles', rolesRouter)
app.use('/users', usersRouter)

app.get('/', (req, res) => {
  res.status(200).send({
     message: 'Welcome to this API.'
  })
});

app.listen(port, () => {
   console.log(`Server is running on PORT ${port}`);
});
