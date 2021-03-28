import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuotesComponent } from './quotes/quotes.component';
import { QuotesDetailsComponent } from './quotes-details/quotes-details.component';
import { InputFormComponent } from './input-form/input-form.component';
import { DateCountPipe } from './date-count.pipe';
import { LikeanddislikeDirective } from './likeanddislike.directive';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { FooterComponent } from './footer/footer.component';
import { LikesComponent } from './likes/likes.component';
import { MostLikesDirective } from './most-likes.directive';


@NgModule({
  declarations: [
    AppComponent,
    QuotesComponent,
    QuotesDetailsComponent,
    InputFormComponent,
    DateCountPipe,
    LikeanddislikeDirective,
    LandingPageComponent,
    FooterComponent,
    LikesComponent,
    MostLikesDirective,
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
