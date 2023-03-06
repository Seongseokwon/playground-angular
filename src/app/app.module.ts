import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {PickListModule} from 'primeng/picklist'
import {FormsModule} from "@angular/forms";
import { PickListItemComponent } from './pick-list-item/pick-list-item.component';
import {DragDropModule} from "@angular/cdk/drag-drop";

@NgModule({
  declarations: [
    AppComponent,
    PickListItemComponent
  ],
  imports: [
    BrowserModule,
    PickListModule,
    FormsModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
