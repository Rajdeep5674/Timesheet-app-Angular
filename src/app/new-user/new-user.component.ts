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

@Output()
public childEvent=new EventEmitter();

  submit(full_name,full_address,dob,phone_number,username,password1,password2){
  this.full_name=full_name;
  this.password1=password1;
  this.password2=password2;
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