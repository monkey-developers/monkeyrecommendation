import express from 'express'
import { router } from './router'
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())
app.use(router)


export { app }