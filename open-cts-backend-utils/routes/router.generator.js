/*
 * By J. Salem AFFA
 * 
 */

import express from 'express';
import multerConfig from '../middlewares/multer.config';

function generateAuthRouter() {
    const router = express.Router();

    router.get('/', (req, res) => {
        res.status(200).json({ msg: 'My router works !' });
    });

    router.post('/register', (req, res) => {
        
    });

    router.post('/upload/:type', multerConfig, (req, res) => {
        console.log(req.file);
        res.status(200).json({});
    });

    router.post('/login', (req, res) => {});

    return router;
}

const authRouter = generateAuthRouter();

export {
    authRouter
};