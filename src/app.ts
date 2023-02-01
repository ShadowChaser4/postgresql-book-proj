import express from 'express';
import { urlencoded, json } from 'body-parser';
import {router} from './routes/routes';
const app = express()


app.use(urlencoded({extended: false}))
app.use(json({}))

app.use('', router);

export {app}