export class AuthService {


isLoggin = false ;

login(){
    this.isLoggin = true ;
}

logout(){
    this.isLoggin = false ;
}



   isAuthinticated(){

    const promise = new Promise( (resolve , reject) => {
        
        setTimeout(()=>{
            resolve(this.isLoggin);
        },800)

    })

    return promise ; 

   }

}