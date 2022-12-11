import { Component, OnInit, Input, Output, ViewEncapsulation, EventEmitter, HostListener} from '@angular/core';
import { FormControl, } from '@angular/forms';
import { FloatLabelType, MatFormFieldAppearance } from '@angular/material/form-field';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.scss', '../../../src/styles.scss', '../../../src/theme.scss',],
  // standalone: true,
	// imports: [CommonModule, HttpClientModule, RouterModule, FormsModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatIconModule],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class CustomInputComponent implements OnInit {
  constructor() {}

  public input: FormControl = new FormControl('');
  ngOnInit(): void {
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

  public inputValueChanges() {
    this.input.valueChanges.subscribe((value: string) => {
      this.customValue = value;
    });
  }
}
