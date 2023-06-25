import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../services/theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  exibirMenu = false;
  darkMode = false;

  constructor(
    public readonly themeService : ThemeService
  ) { }

  ngOnInit(): void {
  }

  public exibirMenuSecundario(){    
      this.exibirMenu = !this.exibirMenu;
  }

  public themeSwitch(){
    this.themeService.toggleTheme()
    this.darkMode = !this.darkMode;
  }


}
