import { Controller, Get, Post, Delete, Put, Body, Param } from '@nestjs/common'
import { BookService } from './book.service'
import { Book } from './data/book.interface.dto'

@Controller('book')
export class BookController {

    constructor(private readonly bookService: BookService){}

    @Get('all')
    getBook() : Book[] {
        return this.bookService.getBooksService();
    }

    @Post('add')
    addBook(@Body() book: Book) : string {
        return this.bookService.addBookService(book);
    }

    @Put('update')
    updateBook(@Body() book: Book) : string {
        return this.bookService.updateBookService(book);
    }

    @Delete('delete/:id')
    deleteBook(@Param('id') bookId : string) : string {
        return this.bookService.deleteBookService(bookId)
    }

}