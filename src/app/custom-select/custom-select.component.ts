import { Overlay } from '@angular/cdk/overlay';
import { Component, OnInit, Input, Output, ViewEncapsulation, EventEmitter, HostListener, ValueProvider} from '@angular/core';
// import { FormControl, } from '@angular/forms';
import { MAT_AUTOCOMPLETE_SCROLL_STRATEGY, MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY_PROVIDER } from '@angular/material/autocomplete';
import { FloatLabelType, MatFormFieldAppearance } from '@angular/material/form-field';
import { MAT_SELECT_SCROLL_STRATEGY_PROVIDER } from '@angular/material/select';
import {OverlayModule} from '@angular/cdk/overlay'
import {ScrollingModule} from '@angular/cdk/scrolling';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule, FormBuilder, NonNullableFormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { environment } from '../../environments/environment';
import { Subscription } from 'rxjs';

type option = { value: string, label: string };

@Component({
  selector: 'app-custom-select',
  templateUrl: './custom-select.component.html',
  styleUrls: ['./custom-select.component.scss', '../../../src/styles.scss', '../../../src/theme.scss',],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class CustomSelectComponent implements OnInit {
  constructor() {}

  public fc: FormControl = new FormControl('');
  ngOnInit(): void {
    this.valueChanges();
  }

  @Input() options: option[] = [];
  // @Input() options: string[] = [];
  selectedValue: string | undefined;

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
  @Input() appearance: MatFormFieldAppearance = 'fill'; // 'fill' | 'outline';
  @Input() floatLabel: FloatLabelType | undefined; // 'always' | 'auto'
  @Input() hideRequiredMarker: boolean = true;
  @Input() hintLabel: string = '';
   // subscriptSizing: SubscriptSizing = 'fixed'; // 'fixed' | 'dynamic';
  @Input() maxlength: any;
  @Input() placeholder = '';
  @Input() type = '';
  @Input() iconName = '';
  @Input() ariaLabel = '';

  @Input() customValue: string = '';

  @Output() valueChange = new EventEmitter<string>();

  @HostListener("blur", ["$event.target.value"])
  onBlur(){
    this.valueChange.emit(this.customValue);
  }
  hide = true;

  public valueChanges() {
    this.fc.valueChanges.subscribe((value: string) => {
      this.customValue = value;
    });
  }
}
