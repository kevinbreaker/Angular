import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateKnowledgesComponent } from './create-knowledges.component';
import { KnowledgesService  } from '../knowledges/knowledges.service';
import { GetSkillCreatedComponent } from '../get-skill-created/get-skill-created.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [    
    CreateKnowledgesComponent,
    GetSkillCreatedComponent
  ],
  exports: [CreateKnowledgesComponent]//,
  // providers: [KnowledgesService]
})
export class CreateKnowledgesModule { }
