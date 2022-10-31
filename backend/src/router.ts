import Router from 'express'
import multer from 'multer'
import path from 'path'
import { db } from './config'

const router = Router()

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/')
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
})

const upload = multer({ storage })

router.post('/recommendation-image', upload.single('foto'), (req, res) => {
    // const { id } = req.body
    const filepath = path.resolve(req.file.path)
    console.log(filepath)
    // db.serialize(() => {
    //     db.run(`UPDATE Recommends SET photo = ${req.file.path} WHERE id = ${id}`)
    // })
    // return res.json({ filepath })
});

router.post('/recommendation', (req, res) => {
    const { masterpiece, rate, author, description, category } = req.body
    db.serialize(() => {
        db.run('INSERT INTO Recommends ( masterpiece, rate, author, description, category ) VALUES (?,?,?,?,?)', [masterpiece, rate, author, description, category])
    })
})

router.get('/recommendations-list', async (req, res) => {
    db.serialize(() => {
        db.all(`SELECT * FROM Recommends ORDER BY id desc`,
            function (error, rows) {
                if (error) return res.status(500).json({ error, msg: error.message })
                res.json({ recommends: rows })
            })
    })
})

export { router }