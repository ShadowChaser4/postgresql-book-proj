"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchBooks = exports.findAllBooks = exports.createBook = exports.prisma = void 0;
const client_1 = require("@prisma/client");
exports.prisma = new client_1.PrismaClient();
function createBook(body) {
    return __awaiter(this, void 0, void 0, function* () {
        const book = yield exports.prisma.book.create({
            data: body, include: { author: true }
        });
        exports.prisma.$disconnect();
        return book;
    });
}
exports.createBook = createBook;
function findAllBooks() {
    return __awaiter(this, void 0, void 0, function* () {
        const books = yield exports.prisma.book.findMany({ include: { author: true } });
        exports.prisma.$disconnect();
        return books;
    });
}
exports.findAllBooks = findAllBooks;
function searchBooks(query) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log(query);
        const books = yield exports.prisma.book.findMany({
            where: {
                name: {
                    contains: query.name,
                },
                author: {
                    OR: [
                        { firstName: { contains: query.authorName, mode: 'insensitive' } },
                        { middleName: { contains: query.authorName, mode: 'insensitive' } },
                        { lastName: { contains: query.authorName, mode: 'insensitive' } },
                    ]
                }
            },
            include: { author: true }
        });
        exports.prisma.$disconnect();
        return books;
    });
}
exports.searchBooks = searchBooks;
//# sourceMappingURL=book.service.js.map