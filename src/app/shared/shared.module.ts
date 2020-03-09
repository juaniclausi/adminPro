import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { BreadcrumsComponent } from './breadcrums/breadcrums.component';
import { HeaderComponent } from './header/header.component';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({

  imports: [
    RouterModule,
    CommonModule
  ],
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
