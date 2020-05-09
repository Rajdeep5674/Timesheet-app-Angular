import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import {User} from './user';
import {EnrollmentService} from './enrollment.service';

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

  userModel=new User('','','');

  onSubmit()
  {
    //values are this.userModel.full_name,this.userModel.password1,this.userModel.password2
    if(this.userModel.password1==this.userModel.password2)
  {
    this.message="Success !! You have saved your details.";
    this.message_class="alert alert-success";
  }
  else
  {
    this.message="password did not match.Please try again.";
    this.message_class="alert alert-warning";
  }
  //subscribing to the enrollment servive
  console.log("User adata"+this.userModel);
  this._enrollmentService.enroll(this.userModel) .subscribe(data=>console.log('success!!',data),
  error=>console.error('error',error))
  }
  fireEvent()
  {
    this.childEvent.emit(true);
  }
  constructor(private _enrollmentService:EnrollmentService) { 
    
  }

  ngOnInit() {
  }

}