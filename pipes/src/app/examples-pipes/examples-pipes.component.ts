import { async } from '@angular/core/testing';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';


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

  filter: string;

  addBook(valor){
    this.books.push(valor);
    console.log(this.books);
  }

  getBooks(){
    if(this.books.length === 0 || this.filter === undefined || this.filter.trim() === ''){
      return this.books;
    }
    return this.books.filter( v => {

    if( v.toLocaleLowerCase().indexOf(this.filter.toLocaleLowerCase()) >= 0 ){
      return true;
    }
      return false;
    });
  }
  //with promise
  asyncValuePr = new Promise((resolve, reject) => {  
    setTimeout(() => resolve('Async value with Promise'),2000)
  });
  
  //with observable
  asyncValueOb = Observable.interval(2000).map( (value) => 'Async value with Observable');

  constructor() { }

  ngOnInit() {
  }

}