import { PrismaClient } from "@prisma/client";
import { IAuthor } from "../types/author.interface";

const prisma = new PrismaClient()

export async function createAuthor (body:IAuthor ) {
    const author = await prisma.author.create({
        data: body
    })
    prisma.$disconnect();
    return author;
}

export async function findAllAuthors (): Promise<object[]> {
    const authors = await prisma.author.findMany({include: {book: true}})
    prisma.$disconnect(); 
    return authors;
}


export async function searchAuthor ( body:{query?:string}):Promise<object[]>{
    const author = await prisma.author.findMany({
        where: {
            OR:[
                { firstName: {contains: body.query} }, 
                { middleName: {contains: body.query} },
                { lastName: {contains: body.query} },
            ]
        }
    })
    prisma.$disconnect();
    return author;
}

export async function editAuthor(id: string, body: {firstName?:string,middleName?:string, lastName?:string, bio? :string }) {
    const updatedAuthor = await prisma.author.update({
        where: {
         id: parseInt(id, 10)
        }, 
        data: body
    })
    prisma.$disconnect();

    return updatedAuthor;
}


export async function deleteOneAuthor(id:number){
    await prisma.author.delete({
        where: {
            id: id
        }
    })
    prisma.$disconnect();
}

