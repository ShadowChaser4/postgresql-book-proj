-- CreateTable
CREATE TABLE "Book" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "Book_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Author" (
    "id" SERIAL NOT NULL,
    "bio" TEXT,
    "firstName" TEXT NOT NULL,
    "middleName" TEXT,
    "lastName" TEXT NOT NULL,

    CONSTRAINT "Author_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_AuthorToBook" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_AuthorToBook_AB_unique" ON "_AuthorToBook"("A", "B");

-- CreateIndex
CREATE INDEX "_AuthorToBook_B_index" ON "_AuthorToBook"("B");

-- AddForeignKey
ALTER TABLE "_AuthorToBook" ADD CONSTRAINT "_AuthorToBook_A_fkey" FOREIGN KEY ("A") REFERENCES "Author"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AuthorToBook" ADD CONSTRAINT "_AuthorToBook_B_fkey" FOREIGN KEY ("B") REFERENCES "Book"("id") ON DELETE CASCADE ON UPDATE CASCADE;
