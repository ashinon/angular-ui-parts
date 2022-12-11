import { Component, OnInit, OnDestroy, Input, Output, ViewEncapsulation, EventEmitter, HostListener} from '@angular/core';
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
import { trigger, state, style, animate, transition } from '@angular/animations';
// import { RouterModule } from '@angular/router';
// import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.scss', '../../../src/styles.scss', '../../../src/theme.scss',],
  // standalone: true,
	// imports: [CommonModule, HttpClientModule, RouterModule, FormsModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatIconModule],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class CustomInputComponent implements OnInit {
  constructor(private _formBuilder: FormBuilder) {}

  public input: FormControl = new FormControl('');
  ngOnInit(): void {
    console.log('testParam_ngOnInit', this.testParam);

    this.input = new FormControl('', [
      Validators.required
    ]);
    this.inputValueChanges();
  }

  @Input() testParam: string | undefined;

  /**
  * 画面表示するテキストやアイコン名
  */
   @Input() label = '';
   @Input() prefixText = '';
   @Input() suffixText = '';
   @Input() suffixIcon = '';
   @Input() error = '';
   @Input() hint = '';

   /**
    * プロパティ値
   */
  @Input() appearance: MatFormFieldAppearance = 'outline'; // 'fill' | 'outline';
  //  color: ThemePalette;
  @Input() floatLabel: FloatLabelType | undefined; // 'always' | 'auto'
  @Input() hideRequiredMarker: boolean = true;
  @Input() hintLabel: string = '';
   // subscriptSizing: SubscriptSizing = 'fixed'; // 'fixed' | 'dynamic';
  @Input() maxlength: any;
  @Input() placeholder = '';
  @Input() type = '';
  @Input() iconName = '';
  hide = true;
  @Input() ariaLabel = '';

  @Input()
  public customValue: string = '';

  @Output()
  public valueChange = new EventEmitter<string>();

  @HostListener("blur", ["$event.target.value"])
  onBlur(){
    this.valueChange.emit(this.customValue);
  }

  public inputValueChanges() {
    this.input.valueChanges.subscribe((value: string) => {
      this.customValue = value;
    });
  }

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
}
