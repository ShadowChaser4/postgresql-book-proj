import { Router } from "express";
import { create, find } from "../controller/book.controller";

const router = Router();

router.post('/', create)
router.get('/', find)


export {router};