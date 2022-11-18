import { enableProdMode } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { createApplication } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import { InputComponent } from './app/input/input.component';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

createApplication({ providers: [] }).then((appRef) => {
  // create a constructor of a custom element
  const customInput = createCustomElement(InputComponent, { injector: appRef.injector });

  // register in a browser
  customElements.define('custom-input', customInput);
});
