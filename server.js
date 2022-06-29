const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const routerAuth = require('./routers/auth.router');
const routerUser = require('./routers/user.router');
const routerProduct = require('./routers/product.router');


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use('/api/v1/auth', routerAuth);
app.use('/api/v1', routerUser);
app.use('/api/v1/users', routerProduct);


app.listen(5000, () => {
    console.log('Server is running on port 5000...');
})