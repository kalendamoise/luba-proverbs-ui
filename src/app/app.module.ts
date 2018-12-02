import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProverbsComponent } from './proverbs/proverbs.component';

import { FormsModule } from '@angular/forms';
import { ProverbDetailComponent } from './proverb-detail/proverb-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ProverbsComponent,
    ProverbDetailComponent
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
