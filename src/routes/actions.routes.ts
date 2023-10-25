//Imports
import { Router } from 'express';
import { createAction, deleteAction, editAction, getActions } from '../controllers/actions.controller';
let router:Router = Router();

router.get('/', getActions);
router.post('/create', createAction);
router.patch('/:id', editAction);
router.delete('/:id', deleteAction);

//default export
export default router;