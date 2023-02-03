import { Router } from "express";
const router = Router();

import { router as bookRoutes } from "./book.routes";
import { router as authorRoutes } from './author.routes'


router.use('/books', bookRoutes)
router.use('/authors', authorRoutes)


export {router}