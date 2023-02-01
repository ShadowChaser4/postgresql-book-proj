import { router as bookRoutes, router } from "./book.routes";


router.use('/book', bookRoutes)


export {router}