import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { FullLayoutComponent } from './full-layout/full-layout.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { ItemListComponent } from './item-list/item-list.component';
import { ResFilterComponent } from './res-filter/res-filter.component';


@NgModule({
  declarations: [
    AppComponent,
    FullLayoutComponent,
    AppHeaderComponent,
    HeaderComponent,
    SearchComponent,
    ItemListComponent,
    ResFilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
