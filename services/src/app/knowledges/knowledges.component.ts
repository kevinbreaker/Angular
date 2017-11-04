import { Component, OnInit } from '@angular/core';

import { KnowledgesService } from './knowledges.service'

@Component({
  selector: 'app-knowledges',
  templateUrl: './knowledges.component.html',
  styleUrls: ['./knowledges.component.css'],
  providers: [KnowledgesService]
})
export class KnowledgesComponent implements OnInit {

  knowledges:string[] = [];
  // knowledgesService: KnowledgesService; Before

  constructor(private knowledgesService:KnowledgesService) {
    // this.knowledgesService =_knowledgesService; Before
    // with private ....   After 
   }

  ngOnInit() {
    this.knowledges = this.knowledgesService.getKnowledges();

    KnowledgesService.createdNewSkill.subscribe(
      (skill:string) => this.knowledges.push(skill)
      
    );
  }

}
