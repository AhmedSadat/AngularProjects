import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: {id: number, name: string};

  constructor(private route : ActivatedRoute , private router: Router) { }

  ngOnInit() {
    this.user = {
    id : this.route.snapshot.params['id'],
    name : this.route.snapshot.params['name']
    }
    this.route.params.subscribe(
      (params:Params) =>{
        this.user.id = params['id'];
        this.user.name = params['name'];
      }
    );
  }

  onEditUser(){
       this.router.navigate(['edit'] , {relativeTo:this.route});
  }

}
