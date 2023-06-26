import express from 'express';
const app = express()
import cors from 'cors'
import router from './router.js'
import bodyParser from 'body-parser'

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/', router);

app.listen(3000, () => {
  console.log(`Node app is running on port 3000`);
});

// Export our API
export default { app };
