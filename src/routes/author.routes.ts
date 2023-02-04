import { Router } from "express";
import { create, edit, findAll, deleteOne } from "../controller/author.controller";
const router = Router(); 

router.post('', create)
router.get('', findAll)
router.patch('/:id',edit)
router.delete('/:id',deleteOne)

export {router};