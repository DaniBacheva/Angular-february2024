import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { Theme } from '../../types/theme';
import { UserService } from '../../user/user.service';

@Component({
  selector: 'app-themes',
  templateUrl: './themes.component.html',
  styleUrls: ['./themes.component.css']
})
export class ThemesComponent implements OnInit {
  themes: Theme[] | null= [];
  isLoading: boolean = true;

  constructor(private api: ApiService, 
    private userService:UserService) { }

    get isLogged(): boolean {
      return this.userService.isLogged
    }

  ngOnInit(): void {
    this.api.getThemes().subscribe((themes) => {
      console.log(themes);
      this.themes = themes;
      this.isLoading = false;
    })

  }
}
