import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ExamplesPipesComponent } from './examples-pipes/examples-pipes.component';
import { SettingsService } from './settings.service';
import { CamelCasePipe } from './camel-case.pipe';
import { ImpureFilterArrayPipe } from './impure-filter-array.pipe';
import { FilterArrayPipe } from './filter-array.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ExamplesPipesComponent,
    CamelCasePipe,
    ImpureFilterArrayPipe,
    FilterArrayPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    // {
    //   provide: LOCALE_ID,
    //   useValue: 'pt-BR'
    // }
    SettingsService,
    {
      provide: LOCALE_ID,
      deps: [SettingsService],
      useFactory: function (setting) {  setting.getLocale()}
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
