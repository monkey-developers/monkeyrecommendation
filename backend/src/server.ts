import { app } from './app'
// const { Client } = require('pg')

const PORT = 8080
app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`))

// const client = new Client({
//     host: 'localhost',
//     user: 'postgres',
//     port: 8080,
//     password: 'password',
//     database: 'postgres'
// })

// client.connect()

// export { client }