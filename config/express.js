import express from 'express'
import consign from 'consign'



const app = express()



app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.set('port', (process.env.PORT || 8080))

consign({cwd:'app', verbose: false})
			.include('models')
			.then('controllers')
			.then('routes')
			.into(app)

export default app
