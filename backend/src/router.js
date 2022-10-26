"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
const router = (0, express_1.default)();
exports.router = router;
const recommends = [];
const storage = multer_1.default.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});
const upload = (0, multer_1.default)({ storage });
router.post('/recommendation-image', upload.single('foto'), (req, res) => {
    const filepath = path_1.default.resolve(req.file.path);
    return res.json({ filepath });
});
router.post('/recommendation', (req, res) => {
    const { masterpiece, rate, author, description, category } = req.body;
    const recommendData = {
        masterpiece,
        rate,
        author,
        description,
        category
    };
    let sim = recommends.push(recommendData);
    console.log(req.body);
    return res.status(201).json(recommendData);
});
router.get('/recommendations-list', (req, res) => {
    return res.json(recommends);
});
