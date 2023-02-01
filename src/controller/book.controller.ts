import { Request, Response, NextFunction } from "express";
import { createBook, findBook, prisma } from "../service/book.service";

export async function create(req: Request, res: Response, next: NextFunction)
{
    await createBook();
    await prisma.$disconnect();
    return res.status(201).json({
        message: 'Created successfully',
        success: true,
    })
}

export async function find(req:Request, res: Response, next: NextFunction) 
{
    return res.status(200).json({
        message: 'Found successfully', 
        success: true, 
        data: await findBook()
    })
}