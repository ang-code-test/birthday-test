import { Component } from '@angular/core';

import { GiftStashService } from './services/gift-stash.service';
import { GiftType } from './models/gift.types';

@Component({
  selector: 'app-giving-smart',
  template: `
            <app-parent></app-parent>
            <app-child [gifts]="childsReceivedGifts"></app-child>`,
})
export class GivingSmartComponent {
  childsReceivedGifts = [];
  jokeGifts = ['Ugly Carrot', 'Empty Box', 'Rubber chicken'];

  constructor(private giftStashService: GiftStashService) {}

  onGiveChildGift = (giftType: GiftType) => {
    switch (giftType) {
      case 'joke': {
        break;
      }

      case 'stash': {
        break;
      }
    }
  };
}
