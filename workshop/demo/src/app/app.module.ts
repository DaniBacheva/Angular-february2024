import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';



import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { UserModule } from './user/user.module';
import { ThemesListModule } from './themes-list/themes-list.module';

import { NotFoundComponent } from './not-found/not-found.component';
import { appInterceptorProvider } from './app.interseptor';




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
  providers: [appInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
