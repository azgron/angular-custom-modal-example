import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ModalModule} from "angular-custom-modal";
import { ModalContentComponent } from './modal-content/modal-content.component';

@NgModule({
  declarations: [
    AppComponent,
    ModalContentComponent,
  ],
  imports: [
    BrowserModule,
    ModalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
