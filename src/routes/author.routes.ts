import { Router } from "express";
import { create, findAll } from "../controller/author.controller";
const router = Router(); 

router.post('', create)
router.get('', findAll)


export {router};