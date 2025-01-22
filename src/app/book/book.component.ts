import { Component, OnInit } from '@angular/core';
import { Book } from '../models/book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrl: './book.component.scss'
})
export class BookComponent implements OnInit{

  bookTitle: string ="";
  bookAuthor: string ="";

  books: Book[] = [];

  ngOnInit(): void {
    const storedBooks = localStorage.getItem("books");
    if(storedBooks){
      this.books = JSON.parse(storedBooks);
    }
  }

  addBook(){
    if(this.bookTitle && this.bookAuthor){
      const newBook: Book = {
        id: this.books.length + 1,
        title: this.bookTitle,
        author: this.bookAuthor
      };
      this.books.push(newBook);
      this.bookTitle = "";
      this.bookAuthor = "";
      localStorage.setItem("books", JSON.stringify(this.books))
    }
  }

  deleteBook(index:number){
    this.books.splice(index, 1);
    localStorage.setItem("books", JSON.stringify(this.books))
  }

  getCardColor(index: number): string {
    const colors = ['bg-primary', 'bg-success', 'bg-info', 'bg-warning', 'bg-danger', 'bg-secondary'];
    return colors[index % colors.length];
  }
  

}
