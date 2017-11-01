import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DirectiveNgIfComponent } from './directive-ng-if/directive-ng-if.component';
import { DirectiveNgSwitchComponent } from './directive-ng-switch/directive-ng-switch.component';
import { DirectiveNgForComponent } from './directive-ng-for/directive-ng-for.component';
import { DirectiveNgClassComponent } from './directive-ng-class/directive-ng-class.component';
import { DirectiveNgStyleComponent } from './directive-ng-style/directive-ng-style.component';
import { OperatorElvisComponent } from './operator-elvis/operator-elvis.component';
import { ExampleNgContentComponent } from './example-ng-content/example-ng-content.component';
import { BackgroundYellowDirective } from './shared/background-yellow.directive';
import { CustomDirectivesComponent } from './custom-directives/custom-directives.component';
import { HighlightMouseDirective } from './shared/highlight-mouse.directive';
import { HighlightDirective } from './shared/highlight.directive';
import { DirectiveNgElseDirective } from './shared/directive-ng-else.directive';

@NgModule({
  declarations: [
    AppComponent,
    DirectiveNgIfComponent,
    DirectiveNgSwitchComponent,
    DirectiveNgForComponent,
    DirectiveNgClassComponent,
    DirectiveNgStyleComponent,
    OperatorElvisComponent,
    ExampleNgContentComponent,
    BackgroundYellowDirective,
    CustomDirectivesComponent,
    HighlightMouseDirective,
    HighlightDirective,
    DirectiveNgElseDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
