import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GiftStashService {
  stash$: Subject<string>;

  #stash = ['Nike Air Jordans', 'Bmx', 'Telescope', 'VR Headset'];

  giveStashGift = () : void => {
    // We want to send ONE gift each time this is called
  };

  constructor() {}
}
