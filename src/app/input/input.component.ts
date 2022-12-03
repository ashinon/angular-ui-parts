import { Component, ElementRef, EventEmitter, OnInit, OnDestroy, Input, Output, ViewEncapsulation, Inject, Optional, Self, ViewChild} from '@angular/core';
// import { CommonModule } from '@angular/common';
import {FormBuilder, FormControl, Validators, NonNullableFormBuilder, FormGroup } from '@angular/forms';
import {FloatLabelType, MatFormFieldAppearance} from '@angular/material/form-field';
import {ThemePalette} from '@angular/material/core';
// import { AbstractControl, ControlValueAccessor, FormBuilder, FormControl, FormGroup, NgControl, Validators } from '@angular/forms';
// import { MatFormFieldModule, MAT_FORM_FIELD, MatFormField, MatFormFieldControl } from '@angular/material/form-field';
// import {FocusMonitor} from '@angular/cdk/a11y';
// import {BooleanInput, coerceBooleanProperty} from '@angular/cdk/coercion';
// import {Subject} from 'rxjs';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  constructor() {}
  // constructor(private _formBuilder: FormBuilder, private _nonNullableFormBuilder: NonNullableFormBuilder) {}

  ngOnInit(): void {}

  // fg: FormGroup  = new FormGroup({
  //   code: new FormControl('')
  // });

  // /**
  // * 画面表示するテキストやアイコン名
  // */
  // label = '';
  // prefixText = '';
  // suffixText = '';
  // suffixIcon = '';
  // error = '';
  // hint = '';

  // /**
  //  * プロパティ値
  // */
  // appearance: MatFormFieldAppearance = 'outline'; // 'fill' | 'outline';
  // color: ThemePalette;
  // floatLabel: FloatLabelType | undefined; // 'always' | 'auto'
  // hideRequiredMarker: boolean = true;
  // hintLabel: string = '';
  // // subscriptSizing: SubscriptSizing = 'fixed'; // 'fixed' | 'dynamic';
  // maxlength: any;
  // placeholder = '';
  // type = '';
  // hide = true;
  // ariaLabel = '';

  // // Form field with error messages
  // email = new FormControl('', [Validators.required, Validators.email]);

  // getErrorMessage() {
  //   if (this.email.hasError('required')) {
  //     return 'You must enter a value';
  //   }

  //   return this.email.hasError('email') ? 'Not a valid email' : '';
  // }

  // // Testing with MatFormFieldHarness
  // requiredControl = new FormControl('Initial value', [Validators.required]);


  // // Form field with label
  // hideRequiredControl = new FormControl(false);
  // floatLabelControl = new FormControl('auto' as FloatLabelType);
  // options = this._formBuilder.group({
  //   hideRequired: this.hideRequiredControl,
  //   floatLabel: this.floatLabelControl,
  // });

  // getFloatLabelValue(): FloatLabelType {
  //   return this.floatLabelControl.value || 'auto';
  // }

  // // Form field with prefix & suffix
  // // hide = true;

  // // Form field theming
  // theminfOptions = this._nonNullableFormBuilder.group({
  //   color: this._nonNullableFormBuilder.control('primary' as ThemePalette),
  //   fontSize: this._nonNullableFormBuilder.control(16, Validators.min(10)),
  // });

  // getFontSize() {
  //   return Math.max(10, this.theminfOptions.value.fontSize || 0);
  // }
}
