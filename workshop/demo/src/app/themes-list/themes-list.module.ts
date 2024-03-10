import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewThemeComponent } from './new-theme/new-theme.component';
import { CurrentThemeComponent } from './current-theme/current-theme.component';
import { ThemeRoutingModule } from './theme-routing.module';
import { PostsComponent } from './posts/posts.component';

import { MainComponent } from './main/main.component';
import { SharedModule } from '../shared/shared.module';
import { ThemesComponent } from './themes/themes.component';


@NgModule({
  declarations: [
    NewThemeComponent,
    CurrentThemeComponent,
    PostsComponent,
    ThemesComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    ThemeRoutingModule, 
    SharedModule
    ],
    exports: [
      PostsComponent,
      MainComponent,
      ThemesComponent,
      CurrentThemeComponent,
      NewThemeComponent,

    ]
})
export class ThemesListModule { }
