import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Cat } from './cats/cats.component';
import { FormsModule } from '@angular/forms';
import { CatItem } from './cats/cat-item/cat-item.component';

@NgModule({
  declarations: [
    AppComponent,
    Cat,
    CatItem
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
