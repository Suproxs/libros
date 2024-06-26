import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../../services/book.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-book-details',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.css'
})
export class BookDetailsComponent implements OnInit {
  book: any;

  constructor(private route: ActivatedRoute, private librosService: BookService) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.librosService.getLibro(parseInt(id)).subscribe(data => {
        this.book = data.data;
        console.log(this.book)
      });
    }
  }
}
