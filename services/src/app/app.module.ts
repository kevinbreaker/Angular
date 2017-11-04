import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { KnowledgesService } from './knowledges/knowledges.service';

import { CreateKnowledgesModule } from './create-knowledges/create-knowledges.module';
import { KnowledgesModule } from './knowledges/knowledges.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CreateKnowledgesModule,
    KnowledgesModule
  ],
  // providers: [ KnowledgesService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
