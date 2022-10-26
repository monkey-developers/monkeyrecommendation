import express from 'express'
import { router } from './router'
import { db } from './config'
const cors = require('cors')

export const createTable = async () => {
    db.serialize(() => {
        db.exec('CREATE TABLE IF NOT EXISTS Recommends ( id INTEGER PRIMARY KEY, masterpiece TEXT, rate NUMERIC, author TEXT, description TEXT, category TEXT, photo TEXT)')
    })
}

createTable()

const app = express()

createTable()
app.use(express.json())
app.use(cors())
app.use(router)

export { app }