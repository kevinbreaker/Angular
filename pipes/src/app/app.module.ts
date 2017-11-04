import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppComponent } from './app.component';
import { ExamplesPipesComponent } from './examples-pipes/examples-pipes.component';
import { SettingsService } from './settings.service';
import { CamelCasePipe } from './camel-case.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ExamplesPipesComponent,
    CamelCasePipe
  ],
  imports: [
    BrowserModule
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
      useFactory: setting => setting.getLocale()
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
