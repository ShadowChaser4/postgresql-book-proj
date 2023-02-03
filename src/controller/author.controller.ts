import { NextFunction, Request, Response } from "express";
import { createAuthor, findAllAuthors } from "../service/author.service";

export async function create(req: Request, res: Response, next: NextFunction) {
    await createAuthor(req.body)
    return res.status(201).json({
        message: 'Author successfully created', 
        success: true, 
    })
}

export async function findAll(req: Request, res: Response, next: NextFunction) {
    return res.status(200).json({
        message: 'Found authors', 
        success: true, 
        data : await findAllAuthors()
    })
}