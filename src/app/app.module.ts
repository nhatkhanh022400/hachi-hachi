import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderArticlesComponent } from './Components/header-articles/header-articles.component';
import { MainArticlesComponent } from './Components/main-articles/main-articles.component';
import { FooterArticlesComponent } from './Components/footer-articles/footer-articles.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderArticlesComponent,
    MainArticlesComponent,
    FooterArticlesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
