//Imports
import { Router } from 'express';
import { createAction, deleteAction, editAction } from '../controllers/actions.controller';
let router:Router = Router();

router.post('/create', createAction);
router.patch('/:id', editAction);
router.delete('/:id', deleteAction);

//default export
export default router;