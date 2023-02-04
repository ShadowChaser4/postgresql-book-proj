import { Router } from "express";
import { create, edit, findAll } from "../controller/author.controller";
const router = Router(); 

router.post('', create)
router.get('', findAll)
router.patch('/:id',edit)

export {router};