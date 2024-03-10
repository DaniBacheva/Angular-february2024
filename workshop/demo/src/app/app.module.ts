import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { MainComponent } from './themes-list/main/main.component';
import { ThemesComponent } from './themes-list/themes/themes.component';
import { PostsComponent } from './themes-list/posts/posts.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { UserModule } from './user/user.module';
import { ThemesListModule } from './themes-list/themes-list.module';
import { WelcomeComponent } from './shared/welcome/welcome.component';
import { NotFoundComponent } from './not-found/not-found.component';




@NgModule({
  declarations: [
    AppComponent,
  

    HomeComponent,
      NotFoundComponent,

  
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
