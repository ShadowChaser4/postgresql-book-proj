import { IBook } from "./book.interface";

export interface IAuthor {firstName: string;
       middleName?: string;
       lastName: string;
       bio?:string
       book : {
         [key:string]:IBook
       }
    }