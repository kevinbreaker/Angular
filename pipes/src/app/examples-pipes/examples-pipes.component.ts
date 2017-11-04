import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-examples-pipes',
  templateUrl: './examples-pipes.component.html',
  styleUrls: ['./examples-pipes.component.css']
})
export class ExamplesPipesComponent implements OnInit {

  book: any = {
    title : 'Pro Angular',
    pages: 820,
    price: 100.50,
    release: new Date(2017,4,2),
    rating: 4.723,
    url: 'https://www.amazon.com.br/Pro-Angular-Adam-Freeman/dp/1484223063?tag=goog0ef-20&smid=A1ZZFT5FULY4LN&ascsubtag=7c92518d-8e9f-4912-8fa2-86f77f44fef2'
  };
  
  books: string[] = ['Angular', 'NodeJs', 'MongoDb'];

  constructor() { }

  ngOnInit() {
  }

}