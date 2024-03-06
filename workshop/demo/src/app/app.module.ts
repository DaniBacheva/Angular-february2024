import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { MainComponent } from './main/main.component';
import { ThemesComponent } from './themes/themes.component';
import { PostsComponent } from './posts/posts.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { UserModule } from './user/user.module';
import { ThemesListModule } from './themes-list/themes-list.module';
import { WelcomeComponent } from './welcome/welcome.component';




@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ThemesComponent,
    PostsComponent,
    HomeComponent,
    WelcomeComponent,

  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    CoreModule,
    SharedModule,
    HttpClientModule,
    UserModule,
    ThemesListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
