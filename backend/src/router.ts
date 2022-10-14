import Router from 'express'

const router = Router()

router.post('/recommendations', (req, res) => {
    return res.status(201).send()
})

export { router }