import { Injectable } from '@angular/core';

@Injectable()
export class SettingsService {

  constructor() { }

  getLocale(){
    let idioma = navigator.language;
    console.log('====================================');
    console.log(idioma);
    console.log('====================================');
    return idioma;
  }

}
