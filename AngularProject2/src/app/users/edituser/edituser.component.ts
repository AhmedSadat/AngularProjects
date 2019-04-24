import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {

  user : {id : number , name : string} ;
  userName  = "" ;

  constructor(private uservice:UsersService,
     private route: ActivatedRoute,
     private router:Router) { }

  ngOnInit() {
         
        let id = +this.route.snapshot.params['id'] ;
        this.user =  this.uservice.getUser(id) ;
        this.userName =   this.user.name   ;
  }

  onUpdateUser( ){
    
    this.uservice.updateUser(this.user.id , {name : this.userName} );
    this.router.navigate(['../'] , {relativeTo:this.route});
  }

}
