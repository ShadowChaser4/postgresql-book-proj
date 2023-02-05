import { Book, PrismaClient } from "@prisma/client";
import { IBook } from "../types/book.interface";


export const prisma = new PrismaClient()

export async function createBook(body: IBook ): Promise<Book | null> {
    const {author, ...rest} = body;

    const book = await prisma.book.create({
        data:{
          ...rest, 
          author: {
            connect: author
          }
        }, include: {author: true}
    });
    prisma.$disconnect();
    return book;
}

export async function findAllBooks(): Promise<object[]>
{
    const books = await prisma.book.findMany({include: {author: true}})
    prisma.$disconnect();
    return books;
}

export async function searchBooks(query:{name?:string, authorName?:string,}):Promise<Book[]>{

    const books = await prisma.book.findMany({
        where: {
            OR:[
           { name: {contains: query.name, mode: 'insensitive'}, },
           { author: {
                some: {
                    OR:[
                        {firstName:{contains: query.authorName, mode: 'insensitive'}},
                        {middleName: {contains: query.authorName, mode: 'insensitive'}}, 
                        {lastName: {contains:query.authorName, mode: 'insensitive'}}
                    ]
                }
            }
        },
        ]},
        include: {author: true}
    })
    prisma.$disconnect()
    return books;
}