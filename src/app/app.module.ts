import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import {
  EventListComponent,
  EventThumbnailComponent,
  EventDetailsComponent,
  CreateEventComponent
} from './events/index';
import { EventsAppComponent } from './events-app.component';
import { NavBarComponent } from '../nav/navbar.component';
import { appRoutes } from './routes';
import { Error404Component } from './errors/404.component';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    EventsAppComponent,
    EventListComponent,
    EventThumbnailComponent,
    EventDetailsComponent,
    NavBarComponent,
    CreateEventComponent,
    Error404Component
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
