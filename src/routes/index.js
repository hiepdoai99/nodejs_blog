const { use } = require('./news');
const newRouter = require('./news');
const newRouter = require('./site');


function route(app){

    app.use('/news', newRouter);
    app.use('/', siteRouter );



}

module.exports = route;