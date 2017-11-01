import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-operator-elvis',
  templateUrl: './operator-elvis.component.html',
  styleUrls: ['./operator-elvis.component.css']
})
export class OperatorElvisComponent implements OnInit {

  task:any = {
    desc: 'Description',
    responsible: null,
    user: {
      id: null
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
