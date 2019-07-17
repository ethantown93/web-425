/*
============================================
; Title:  townsend-assignment-2.2
; Author: Ethan Townsend
; Date:   7/17/2019
; Description: web-425
;===========================================
*/


import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
