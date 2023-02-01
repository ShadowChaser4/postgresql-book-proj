import { PrismaClient } from "@prisma/client";


export const prisma = new PrismaClient()

export async function createBook(): Promise<void> {
    const book = await prisma.book.create({
        data:{
            name: 'Test2', 
            description: 'This is a demo book', 
            authorId: 1
        }
    });

    console.log(book) ;
}

export async function findBook(): Promise<object[]>
{
    const books = await prisma.book.findMany({include: {author: true}})

    return books;
}