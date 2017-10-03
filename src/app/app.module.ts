import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http' 
import { AppComponent } from './app.component';
import { ListHeroesComponent } from './list-heroes/list-heroes.component';
import { HeroComponent } from './hero/hero.component';
import { HeroesService } from './heroes.service';

@NgModule({
  declarations: [
    AppComponent,
    ListHeroesComponent,
    HeroComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    HeroesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
