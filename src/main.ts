import { enableProdMode } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { createApplication } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import { CustomInputComponent } from './app/custom-input/custom-input.component';
import { FormBuilder } from '@angular/forms';

if (environment.production) {
  enableProdMode();
}
// NgModuleのBootstrap
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch((err: any) => console.error(err));


