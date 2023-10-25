//Imports
import { Router } from 'express';
import { createAction, deleteAction, editAction, getActions, updateAction } from '../controllers/actions.controller';
let router:Router = Router();

router.get('/', getActions);
router.post('/', createAction);

router.patch('/:id', editAction);
router.put('/:id', updateAction);
router.delete('/:id', deleteAction);

//default export
export default router;