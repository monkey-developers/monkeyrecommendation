import Router from 'express'
import multer from 'multer'

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
    const { nome, site } = req.body;
    res.json({ nome, site });
});

export { router }