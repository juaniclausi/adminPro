import { NgModule } from "@angular/core";

import { BreadcrumsComponent } from './breadcrums/breadcrums.component';
import { HeaderComponent } from './header/header.component';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations:[
    BreadcrumsComponent, 
    HeaderComponent, 
    NoPageFoundComponent,
    SidebarComponent
  ],
  exports:[
    BreadcrumsComponent, 
    HeaderComponent, 
    NoPageFoundComponent,
    SidebarComponent
  ]
})

export class SharedModule {};