import { Book } from "./dto/book.interface.dto";
import { Injectable } from "@nestjs/common"
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class BookService {

    public books: Book[] = [];

    // add book
    addBookService(book: Book): string {
        book.id = uuidv4();
        this.books.push(book);
        return 'Book is added Successfully'
    }

    // update book
    updateBookService(book: Book): string {
        const index = this.books.findIndex(currentBook => currentBook.id === book.id);
        this.books[index] = book;
        return 'Book is updated Successfully'
    }

    // delete book
    deleteBookService(bookId: string): string {
        this.books = this.books.filter(book => {
            return book.id === bookId
        });
        return 'Book is deleted Successfully'
    }

    // get all books
    getBooksService(): Book[] {
    return this.books;
}
}