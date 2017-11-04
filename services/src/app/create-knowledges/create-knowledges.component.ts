import { Component, OnInit } from '@angular/core';

import { KnowledgesService } from '../knowledges/knowledges.service';

@Component({
  selector: 'app-create-knowledges',
  templateUrl: './create-knowledges.component.html',
  styleUrls: ['./create-knowledges.component.css'],
  providers: [KnowledgesService]
})
export class CreateKnowledgesComponent implements OnInit {

  knowledges: string[] = [];

  constructor(private knowledgesService: KnowledgesService) { }

  ngOnInit() {
    this.knowledges = this.knowledgesService.getKnowledges();
  }

  onAddSkill(skill:string){
    this.knowledgesService.addSkill(skill);
  }

}
