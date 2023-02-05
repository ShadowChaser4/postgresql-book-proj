import { IAuthor } from "./author.interface";

export interface IBook { name: string;
                         description? :string;
                         author: {
                            [key:string]:IAuthor
                         }
                        }