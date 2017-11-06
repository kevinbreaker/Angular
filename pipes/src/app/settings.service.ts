import { Injectable } from '@angular/core';

@Injectable()
export class SettingsService {

  constructor() { }

  getLocale(){
    let language = navigator.language;
    console.log('====================================');
    console.log(language);
    console.log('====================================');
    return language;
  }

}
