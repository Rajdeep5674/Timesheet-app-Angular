import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { NewUserComponent } from './new-user/new-user.component';
import { ExistingUserComponent } from './existing-user/existing-user.component';
import { EnrollmentService } from './new-user/enrollment.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule,HttpClientModule ],
  declarations: [ AppComponent, NewUserComponent, ExistingUserComponent],
  bootstrap:    [ AppComponent ],
  providers: [EnrollmentService]
})
export class AppModule { }
