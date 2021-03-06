import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { ServersService } from "../servers.service";
import { Injectable } from "@angular/core";

interface Server {
    id: number ,
    name: string ,
    status: string 
}

@Injectable()
export class ServerResolver implements Resolve<Server> {
    
    constructor(private service: ServersService){}

    resolve(route:ActivatedRouteSnapshot , state: RouterStateSnapshot) : Observable<Server> | Promise<Server> | Server {
                return this.service.getServer(+route.params['id']); 
    }

}