const usersRouter = require('./users');
const categoriesRouter = require('./categories');
const coffeesRouter = require('./coffees');
const branchesRouter = require('./branches');
const authRouter = require('./auth');
const cartRouter = require('./carts');

function route(app){

    app.use('/api/users', usersRouter);
    app.use('/api/categories', categoriesRouter);
    app.use('/api/coffees', coffeesRouter);
    app.use('/api/branches', branchesRouter);
    app.use('/api/auth', authRouter);
    app.use('/api/carts', cartRouter);
}

module.exports = route;