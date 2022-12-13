import { Component } from '@angular/core';

type option = { value: string, label: string };

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-ui-parts';

  constructor() {}

  testOptions: option[] = [
    { value: '1', label: 'aaa' },
    { value: '2', label: 'bbb' },
    { value: '3', label: 'ccc' },
  ];

}
