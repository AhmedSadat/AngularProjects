import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Injectable } from "@angular/core";
import { AuthService } from "./auth.service";
import { Observable } from "rxjs/Observable";

@Injectable()
export class AuthGuard implements CanActivate {

constructor(private authService:AuthService , private router:Router){}

    canActivate(route: ActivatedRouteSnapshot ,
                state: RouterStateSnapshot ):Observable<boolean> | Promise<boolean> | boolean {

                    return this.authService.isAuthinticated().then((active:boolean)=>{
                        if(active){
                            return true ;
                        }else{
                            alert("please login first");
                            this.router.navigate(['/']) ;
                        }
                    });

    }


}