import Router from 'express'
import multer from 'multer'
import path from 'path'

const router = Router()
const recommends = []

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
    const filepath = path.resolve(req.file.path)
    return res.json({ filepath })
});

router.post('/recommendation', (req, res) => {
    const { masterpiece, rate, author, description, category } = req.body

    const recommendData = {
        masterpiece,
        rate,
        author,
        description,
        category
    }

    let sim = recommends.push(recommendData)

    console.log(req.body)
    
    return res.status(201).json(recommendData)
})

router.get('/recommendations-list', (req, res) => {
    return res.json(recommends)
})

export { router }