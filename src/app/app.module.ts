import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrialComponent } from './trial/trial.component';
import { ClickitComponent } from './clickit/clickit.component';
// import { WelcomepageComponent } from './welcomepage/welcomepage.component';
// import { RegisterComponent } from './register/register.component';

import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TrialComponent,
    ClickitComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,    
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
