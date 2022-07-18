/*************************************
 *
 * YOU DONT NEED TO CHANGE THIS FILE
 *
 *************************************/

import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
})
export class AppComponent {
  overview = `It's your lucky childs birthday...  You have a stash of quality gifts to give, however because it's funny
  you decide to give the odd joke gift as well.`;

  objectives = [
    `1.  Clicking button "Give joke gift" will give ONE gift from "parent-child-container" variable "jokeGifts" using input/output component binding`,
    `2.  Wire up button "Give gift from Stash" - use gift-stash.service method giveStashGift() in a subscribe style"`,
  ];

  constructor() {}
}
