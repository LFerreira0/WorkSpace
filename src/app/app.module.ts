import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import "prismjs";
import "prismjs/components/prism-scss";
import "prismjs/components/prism-typescript";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SandBoxComponent } from './main/sand-box/sand-box.component';
import { PrismService } from './services/prism/prism.service';
import { ThemeService } from './services/theme/theme.service';
import { SnippetsComponent } from './shared/services/snippets/snippets.component';
import { AngularModule } from './stacks/Angular/angular.module';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SandBoxComponent,
    SnippetsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularModule,
    FormsModule,
    ReactiveFormsModule,    
  ],

  providers: [ThemeService, PrismService],
  bootstrap: [AppComponent]
})
export class AppModule { }
