import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class ChildComponent {
  @Input()
  gifts: Array<string> = [];

  constructor() {}
}
