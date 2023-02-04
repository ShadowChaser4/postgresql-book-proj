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
exports.editAuthor = exports.findAllAuthors = exports.createAuthor = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
function createAuthor(body) {
    return __awaiter(this, void 0, void 0, function* () {
        const author = yield prisma.author.create({
            data: body
        });
        prisma.$disconnect();
        return author;
    });
}
exports.createAuthor = createAuthor;
function findAllAuthors() {
    return __awaiter(this, void 0, void 0, function* () {
        const authors = yield prisma.author.findMany();
        prisma.$disconnect();
        return authors;
    });
}
exports.findAllAuthors = findAllAuthors;
function editAuthor(id, body) {
    return __awaiter(this, void 0, void 0, function* () {
        const updatedAuthor = yield prisma.author.update({
            where: {
                id: parseInt(id, 10)
            },
            data: body
        });
        prisma.$disconnect();
        return updatedAuthor;
    });
}
exports.editAuthor = editAuthor;
//# sourceMappingURL=author.service.js.map