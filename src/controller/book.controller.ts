import { Request, Response, NextFunction } from "express";
import { createBook, deleteBook, findAllBooks, searchBooks } from "../service/book.service";

export async function create(req: Request, res: Response, next: NextFunction)
{
    const data = await createBook(req.body);
    return res.status(201).json({
        message: 'Created successfully',
        success: true,
        data: data,
    })
}

export async function find(req:Request, res: Response, next: NextFunction) 
{
    return res.status(200).json({
        message: 'Found successfully', 
        success: true, 
        data: await findAllBooks()
    })
}

export async function search (req: Request, res: Response, next: NextFunction) {
    const query = req.query;
    return res.status(200).json({
        message: 'Found successfully', 
        success: true, 
        data: await searchBooks(query)
    })
}

export async function deleteBooks(req: Request , res: Response , next: NextFunction) {
    await deleteBook( parseInt( req.params.id) )
    return res.sendStatus(204)
}