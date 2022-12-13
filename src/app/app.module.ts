import { ApplicationRef, Component, Inject, Injectable, Injector, Type, } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { CustomInputComponent } from './custom-input/custom-input.component';
import { FormsModule, ReactiveFormsModule, FormBuilder, NonNullableFormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { FloatLabelType, MatFormFieldAppearance, MatFormFieldModule } from '@angular/material/form-field';
import { ThemePalette } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatNativeDateModule } from '@angular/material/core';
import { MaterialExampleModule } from '../material.module';
import { CustomSelectComponent } from './custom-select/custom-select.component';
import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [
    AppComponent,
    CustomInputComponent,
    CustomSelectComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    OverlayModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    MaterialExampleModule,
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
})
export class AppModule {
  ngDoBootstrap(appRef: ApplicationRef): void {
    if (document.querySelector('app-root')) {
      appRef.bootstrap(AppComponent);
    }
  }

  constructor(injector: Injector) {
    const outputTarget = [
      { customTagName: 'custom-input', component: CustomInputComponent},
      { customTagName: 'custom-select', component: CustomSelectComponent},
    ];
    outputTarget.forEach((target) => {
      AppModule.createAndDefine(target.customTagName, target.component, injector);
    });
  }

  static createAndDefine(customTagName: string, component: Type<any>, injector: Injector) {
    const customElem = createCustomElement(component, {
      injector: injector,
    });
    customElements.define(customTagName, customElem);
  };

}
