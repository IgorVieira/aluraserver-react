
import config from "./config/config"
import app from "./config/express"
import http from "http"
require('./config/database')(config.db)
const port = app.get('port')

http.createServer(app).listen(port, ()=>{
  console.log('server is running:'+ port)
})
