import multer from 'multer';

const storage = multer.diskStorage({
    destination: (req, res, cb) => {
        console.log(req.FILES)
        cb(null, 'uploads')
    },
    filename: (req, res, cb) => {
        console.log(req.FILES);
        cb(null, Date.now()+'');
    }
});

const multerConfig = multer({ storage }).single('file');
export default multerConfig;