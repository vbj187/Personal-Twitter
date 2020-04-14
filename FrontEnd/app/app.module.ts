import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PostBlockComponent } from './post-block/post-block.component';
import { TweetsBlockComponent } from './tweets-block/tweets-block.component';
import { HttpClientModule } from '@angular/common/http';
import { getTweetsService } from './services/gettweets.services'

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    PostBlockComponent,
    TweetsBlockComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
