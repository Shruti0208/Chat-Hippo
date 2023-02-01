import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserWindowComponent } from './user-window/user-window.component';
// import { UserInputComponent } from './user-input/user-input.component';
import { HeaderComponent } from './header/header.component';
import { ChatPannelComponent } from './chat-pannel/chat-pannel.component';

@NgModule({
  declarations: [
    AppComponent,
    UserWindowComponent,
    // UserInputComponent,
    HeaderComponent,
    ChatPannelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
