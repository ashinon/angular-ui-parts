import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.scss'],
})
export class CustomInputComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    console.log('testParam_ngOnInit', this.testParam);
  }

  @Input() testParam: string | undefined;

}
