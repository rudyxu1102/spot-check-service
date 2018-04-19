const user = require('./user')
const device = require('./device')
const check = require('./check')
const work = require('./work.js')

module.exports = (app) => {
  app.use(user.routes())
  app.use(device.routes())
  app.use(check.routes())
  app.use(work.routes())
}
