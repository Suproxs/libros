import { Component, OnInit, inject } from '@angular/core';
import { BookService } from '../../services/book.service';
import { MatCardModule } from '@angular/material/card';
import { DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [MatCardModule, DatePipe, RouterLink],
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  books: any[] = [];

  private bookService = inject(BookService);

  ngOnInit(): void {
    this.bookService.getLibros().subscribe((data: any) => {
      this.books = data.books; // Ajusta según la estructura de los datos que devuelve la API
      console.log(this.books);
    });
  }

  trackByBookId(index: number, book: any): number {
    return book.isbn13;
  }
}
