import { Router } from 'express';
import multer from 'multer';
import {
    deleteController,
    getController,
    patchController,
    postController,
} from '../controllers/controllers';

const upload = multer(); // для form-data
const router = Router();

// upload.none() или др. по ситуации

router.post('/', upload.none(), postController);

router.get('/', getController);

router.patch('/:id', patchController);

router.delete('/:id', deleteController);

export default router;
