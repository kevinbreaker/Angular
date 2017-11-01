import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DirectiveNgIfComponent } from './directive-ng-if/directive-ng-if.component';
import { DirectiveNgSwitchComponent } from './directive-ng-switch/directive-ng-switch.component';
import { DirectiveNgForComponent } from './directive-ng-for/directive-ng-for.component';
import { DirectiveNgClassComponent } from './directive-ng-class/directive-ng-class.component';
import { DirectiveNgStyleComponent } from './directive-ng-style/directive-ng-style.component';

@NgModule({
  declarations: [
    AppComponent,
    DirectiveNgIfComponent,
    DirectiveNgSwitchComponent,
    DirectiveNgForComponent,
    DirectiveNgClassComponent,
    DirectiveNgStyleComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
