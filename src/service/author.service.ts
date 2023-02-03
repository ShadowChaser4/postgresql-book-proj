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
    const authors = await prisma.author.findMany()
    prisma.$disconnect(); 
    return authors;
}