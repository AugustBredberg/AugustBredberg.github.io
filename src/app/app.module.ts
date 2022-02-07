import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { HttpErrorInterceptor } from './http-error.interceptor'
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatListModule} from '@angular/material/list';

import { AppComponent } from './app.component'
import { RouterModule, Routes } from '@angular/router'
import { MaterializeModule } from 'angular2-materialize'

import { NavigationComponent } from './navigation/navigation.component'
import { ProjectsComponent } from './projects/projects.component'
import { ContactComponent } from './contact/contact.component'
import { AboutComponent} from './about/about.component'
import { FooterComponent } from './footer/footer.component'
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

// TODO: routing working in production
// https://angular.io/api/common/PathLocationStrategy

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: { title: 'Home' },
  },
  {
    path: 'about/:firstname',
    component: AboutComponent,
    data: { title: 'About me'}, //, animation: 'About'  },
  },
  {
    path: 'portfolio/:firstname',
    component: PortfolioComponent,
    data: { title: 'Portfolio' }, //, animation: 'Portfolio' },
  },
  {
    path: 'projects/:firstname',
    component: ProjectsComponent,
    data: { title: 'Projects' },
  },
  {
    path: 'contact/:firstname',
    component: ContactComponent,
    data: { title: 'Contact' },
  },
  
  {
    path: '**', 
    redirectTo: '',
    pathMatch: 'full',
  },
]

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ProjectsComponent,
    ContactComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    AboutComponent,
    PortfolioComponent,
  ],
  imports: [
    RouterModule.forRoot(appRoutes, { enableTracing: false , scrollPositionRestoration: 'enabled'}),
    BrowserModule,
    BrowserAnimationsModule,
    MaterializeModule,
    HttpClientModule,
    MatGridListModule,
    MatCardModule,
    MatListModule,
    FlexLayoutModule,
  ],
  providers: [
    {
      
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true,
    },
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
