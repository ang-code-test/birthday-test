/*************************************
 *
 * YOU DONT NEED TO CHANGE THIS FILE
 *
 *************************************/

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ParentComponent } from './features/birthday/dumb-components/parent/parent.component';
import { ChildComponent } from './features/birthday/dumb-components/child/child.component';
import { GiftComponent } from './features/birthday/dumb-components/gift/gift.component';
import { GiftStashService } from './features/birthday/services/gift-stash.service';
import { GivingSmartComponent } from './features/birthday/giving-smart.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    GivingSmartComponent,
    ParentComponent,
    ChildComponent,
    GiftComponent,
  ],
  bootstrap: [AppComponent],
  providers: [GiftStashService],
})
export class AppModule {}
