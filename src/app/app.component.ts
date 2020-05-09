import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  public default=true;
  public message=true;
  public choice="";
  ExistingUser()
  {
    this.message=false;
    this.choice="existing";
  }
  home()
  {
    this.message=true;
  }
  newUser()
  {
    this.message=false;
    this.choice="new";
  }
}