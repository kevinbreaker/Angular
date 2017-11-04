import { Component, OnInit } from '@angular/core';

import { KnowledgesService } from './../knowledges/knowledges.service';

@Component({
  selector: 'app-get-skill-created',
  templateUrl: './get-skill-created.component.html',
  styleUrls: ['./get-skill-created.component.css']
})
export class GetSkillCreatedComponent implements OnInit {

  skill: string;

  constructor(private knowledgesService: KnowledgesService) { }

  ngOnInit() {
    this.knowledgesService.emitCreatedSkill.subscribe(
      skillCreated => this.skill = skillCreated
    );
  }

}
