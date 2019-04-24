import { HomeComponent } from "./home/home.component";
import { ServersComponent } from "./servers/servers.component";
import { ServerComponent } from "./servers/server/server.component";
import { EditServerComponent } from "./servers/edit-server/edit-server.component";
import { UsersComponent } from "./users/users.component";
import { UserComponent } from "./users/user/user.component";
import { PagenotfoundComponent } from "./pagenotfound/pagenotfound.component";
import { Routes, RouterModule } from "@angular/router";
import { NgModule} from "@angular/core";
import { AuthGuard } from "./auth-guard.service";
import { CanDeactivaGuard } from "./servers/edit-server/can-deactivate-guard.service";
import { ErrorPageComponent } from "./error-page/error-page.component";
import { ServerResolver } from "./servers/server/server-resolver.service";
import { EdituserComponent } from "./users/edituser/edituser.component";


const appRoutes : Routes = [

    {path: '' , component : HomeComponent},
    {path: 'servers', canActivate:[AuthGuard] , component : ServersComponent , children:[
      {path: ':id', component : ServerComponent , resolve:{server:ServerResolver}},
      {path: ':id/edit',
       component : EditServerComponent,
       canDeactivate:[CanDeactivaGuard] },
    ]},
  
    {path: 'users', component : UsersComponent , canActivate:[AuthGuard] , children:[
      {path:':id/:name', component:UserComponent},
      {path:':id/:name/edit' ,  component : EdituserComponent }
    ]},
    
    {path: 'notfound', component :ErrorPageComponent , data:{message:'Page not found'} },
    {path:'**', redirectTo:'/notfound'}
  ];




  @NgModule({
          
            imports: [
                RouterModule.forRoot(appRoutes),
            ] , 
            exports : [
                RouterModule
            ]
  })
export class AppRoutingModule {


} 