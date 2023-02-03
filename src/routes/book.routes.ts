import { Router } from "express";
import { create, find, search } from "../controller/book.controller";

const router = Router();

router.post('/', create)
router.get('/', find)
router.get('/search',search)

export {router};