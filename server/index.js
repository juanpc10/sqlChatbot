// const Koa = require('koa');
// const app = new Koa();

// const serve = require('koa-static');
// const bodyParser = require('koa-bodyparser');
// const router = require('./router');

// const port = 3000;
// const hostname = 'localhost';
// const path = require('path');

// app
//   .use(serve(path.join(__dirname, '../chat-client')))
//   .use(bodyParser())
//   .use(router.routes())

// app.listen(port, hostname, () => console.log(`Server running at http://${hostname}:${port}`))


const Koa = require('koa');
const app = new Koa();

const serve = require('koa-static');
const bodyParser = require('koa-bodyparser');
const router = require('./router');

const port = 3000;
const hostname = 'localhost';
const path = require('path');

app
  .use(serve(path.join(__dirname, '../chat-client')))
  .use(bodyParser())
  .use(router.routes())

app.listen(port, hostname, () => console.log(`Server running at http://${hostname}:${port}`))
