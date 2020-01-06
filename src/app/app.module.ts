import { AngularMaterialModule } from './modules/angular-material/angular-material.module';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ContactComponent } from './components/contact/contact.component';
import { EmploymentHistoryComponent } from './components/employment-history/employment-history.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { IntroductionComponent } from './components/introduction/introduction.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { TechnologiesComponent } from './components/technologies/technologies.component';

import { IconService } from './services/icon/icon.service';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    EmploymentHistoryComponent,
    HeaderComponent,
    HomeComponent,
    IntroductionComponent,
    NavigationComponent,
    NotFoundComponent,
    ProjectsComponent,
    TechnologiesComponent
  ],
  imports: [
    AngularMaterialModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    IconService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
