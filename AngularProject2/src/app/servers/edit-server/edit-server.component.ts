import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Params, RouterLink, Router } from '@angular/router';
import { CanComponentDeactivate } from './can-deactivate-guard.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit , CanComponentDeactivate{
  server: {id: number, name: string, status: string};
  serverName = '';
  serverStatus = '';
  allowEdit = false ;
  chngedSaved = false ;

  constructor( private serversService: ServersService , 
               private route:ActivatedRoute,
               private router:Router
              ) { }

  ngOnInit() {
    
    this.route.queryParams.subscribe(

      (qParam:Params)=>{
             this.allowEdit = qParam['allowEdit'] === '1' ? true : false ;
      }
    );
     let id = +this.route.snapshot.params['id'];
    this.server = this.serversService.getServer(id);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
    this.chngedSaved = true ;
    this.router.navigate(['../'] , { relativeTo: this.route });
  }

  canDeactivate():Observable<boolean> | Promise<boolean> | boolean {
          
         if(!this.allowEdit){
           return true ;
         }
         if((this.serverName !== this.server.name || this.serverStatus !== this.server.status) 
         && !this.chngedSaved ){
           return confirm("do you want to discart changes?") ;
         }else{
            return true ;
         }
  } 

}
