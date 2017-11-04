import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KnowledgesComponent } from './knowledges.component';
import { KnowledgesService } from './knowledges.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    KnowledgesComponent
  ],
  exports: [KnowledgesComponent]//,
  // providers: [KnowledgesService]
})
export class KnowledgesModule { }
