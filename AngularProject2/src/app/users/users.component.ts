import { Component, OnInit } from '@angular/core';
import { UsersService } from './users-service.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  
 users : {id : number , name : string}[] = [] ;

 constructor(private userService : UsersService){}

 ngOnInit(){
                this.users  =  this.userService.getUsers()  ;
 }

}
