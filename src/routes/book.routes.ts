import { Router } from "express";
import { create, deleteBooks, find, search } from "../controller/book.controller";

const router = Router();

router.post('/', create)
router.get('/', find)
router.get('/search',search)
router.delete('/delete/:id', deleteBooks)

export {router};