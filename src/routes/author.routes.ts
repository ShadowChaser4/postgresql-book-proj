import { Router } from "express";
import { create, edit, findAll, deleteOne, search } from "../controller/author.controller";
const router = Router(); 

router.post('', create)
router.get('', findAll)
router.get('/search',search)
router.patch('/:id',edit)
router.delete('/:id',deleteOne)

export {router};