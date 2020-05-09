import { Component, OnInit, Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-existing-user',
  templateUrl: './existing-user.component.html',
  styleUrls: ['./existing-user.component.css']
})
export class ExistingUserComponent implements OnInit {
  public message="";
  public message_class="";
  public active_session=false;
  public loginForm=true;
  public authorizationFailed=true;
  public authorizationFailedCounter=0;

@Output()
public childEvent=new EventEmitter();


submit(username,password)
{
  if(username=="1196291" && password=="R@jdeep123")
  {
    this.message="Login successful";
    this.loginForm=false;
    this.message_class="alert alert-success";
    this.active_session=true;
    }
  else
  {
    this.authorizationFailedCounter++;
    this.authorizationFailed=true;
    this.message="Invalid username or password";
    this.message_class="alert alert-warning";
    if(this.authorizationFailedCounter>=3)
    {
      this.message="3 invalid login attempts, please try after some time. ";
      this.message_class="alert alert-warning";
    }
  }
}
logout()
{
  this.message="You have been successfully logged out.";
  this.message_class="alert alert-success";
  this.active_session=false;
  this.loginForm=true;
}
fireEvent()
{
  this.childEvent.emit(true);
}

  constructor() { }

  ngOnInit() {
  }

}