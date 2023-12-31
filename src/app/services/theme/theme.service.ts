import { DOCUMENT } from "@angular/common";
import { Inject, Injectable, Renderer2 } from "@angular/core";
import { Theme } from "../../enums/theme.enum";

@Injectable()
export class ThemeService{
    public theme!: Theme;
    private storageKey = "theme";

    constructor(
        @Inject(DOCUMENT) private readonly document : Document,
    ){
        this.theme = this.getTheme();
    }

    public getTheme(): Theme{
        const storagedTheme = localStorage.getItem(this.storageKey);          
        if(storagedTheme === Theme.DARK){
            this.document.body.classList.add(Theme.DARK);
        }                
        return storagedTheme ? storagedTheme as Theme : Theme.LIGHT;
    }

    public toggleTheme(){
        this.theme = this.theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;        
        localStorage.setItem(this.storageKey, this.theme);
        if (this.theme === Theme.DARK) {
            this.document.body.classList.add(Theme.DARK)
        } else {
            this.document.body.classList.remove(Theme.DARK)
        }
    }
}