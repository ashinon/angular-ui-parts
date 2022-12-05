import { Component, OnInit, OnDestroy, Input, Output} from '@angular/core';
// import { Inject, Injectable, ElementRef, EventEmitter, ViewChild, ViewEncapsulation, Optional, Self, CUSTOM_ELEMENTS_SCHEMA, Injector } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { FloatLabelType, MatFormFieldAppearance, MatFormFieldModule } from '@angular/material/form-field';
// import { ThemePalette } from '@angular/material/core';
// import { MatIconModule } from '@angular/material/icon';
// import { MatInputModule } from '@angular/material/input';
// import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { trigger, state, style, animate, transition } from '@angular/animations';
// import { RouterModule } from '@angular/router';
// import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.scss'],
  // standalone: true,
	// imports: [CommonModule, HttpClientModule, RouterModule, FormsModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatIconModule],
})
export class CustomInputComponent implements OnInit {
  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit(): void {
    console.log('testParam_ngOnInit', this.testParam);
  }

  @Input() testParam: string | undefined;

  fg: FormGroup  = new FormGroup({
    code: new FormControl('')
  });

  /**
  * 画面表示するテキストやアイコン名
  */
   label = '';
   prefixText = '';
   suffixText = '';
   suffixIcon = '';
   error = '';
   hint = '';

   /**
    * プロパティ値
   */
   appearance: MatFormFieldAppearance = 'outline'; // 'fill' | 'outline';
  //  color: ThemePalette;
   floatLabel: FloatLabelType | undefined; // 'always' | 'auto'
   hideRequiredMarker: boolean = true;
   hintLabel: string = '';
   // subscriptSizing: SubscriptSizing = 'fixed'; // 'fixed' | 'dynamic';
   maxlength: any;
   placeholder = '';
   type = '';
   hide = true;
   ariaLabel = '';

  // Form field with error messages
  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  // Testing with MatFormFieldHarness
  requiredControl = new FormControl('Initial value', [Validators.required]);

  // Form field with label
  hideRequiredControl = new FormControl(false);
  floatLabelControl = new FormControl('auto' as FloatLabelType);
  options = this._formBuilder.group({
    hideRequired: this.hideRequiredControl,
    floatLabel: this.floatLabelControl,
  });

  getFloatLabelValue(): FloatLabelType {
    return this.floatLabelControl.value || 'auto';
  }

  // // Form field theming
  // theminfOptions = this._nonNullableFormBuilder.group({
  //   color: this._nonNullableFormBuilder.control('primary' as ThemePalette),
  //   fontSize: this._nonNullableFormBuilder.control(16, Validators.min(10)),
  // });

  // getFontSize() {
  //   return Math.max(10, this.theminfOptions.value.fontSize || 0);
  // }

  }
