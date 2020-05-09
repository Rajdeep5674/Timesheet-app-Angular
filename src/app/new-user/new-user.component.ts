import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

private full_name;
private password1;
private password2;

public message="";
public message_class="";
@Output()
public childEvent=new EventEmitter();

  submit(full_name,password1,password2){
  if(password1==password2)
  {
    this.full_name=full_name;
    this.password1=password1;
    this.password2=password2;

    this.message="Success !! You have saved your details.";
    this.message_class="alert alert-success";
  }
  else
  {
    this.message="password did not match.Please try again.";
    this.message_class="alert alert-warning";
  }
  }
  fireEvent()
  {
    this.childEvent.emit(true);
  }
  constructor() { 
    
  }

  ngOnInit() {
  }

}