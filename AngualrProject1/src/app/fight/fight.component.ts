import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fight',
  templateUrl: './fight.component.html',
  styleUrls: ['./fight.component.css']
})
export class FightComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    alert( " You Will Play Agaist Elsods " +
     " You Can Use Heal and Special Attack only once " +
     " You can GiveUp Any Time"
     );
  }

MonsterPower:number = 100 ;
PlayerPower:number = 100 ;
fightIsRunning:boolean = false ;
healCounter:number = 0 ;
specialAttackCounter:number = 0 ;
turns:Array<object> = [] ;

 

startNewGame(){
  this.fightIsRunning = true ;
  this.turns = [] ;
  this.MonsterPower = 100 ;
  this.PlayerPower = 100 ;
  this.powerRefactor();
}

powerRefactor(){
  this.healCounter = 0 ;
  this.specialAttackCounter = 0 ;
}

calculateDamage(min , max){
  return Math.max(Math.floor(Math.random() * max ) + 1 , min ) ;
}

checkWin(){
  if(this.MonsterPower <= 0){
    if(confirm("Hah You Are So Lucky! You Win..New Game ?")){
      this.startNewGame() ;
    }else{
      this.fightIsRunning = false ;
    }
    return true;
  }
  else if(this.PlayerPower <= 0){
    if(confirm("You Lose..New Game ?")){
      this.startNewGame() ;
    }else{
      this.fightIsRunning = false ;
    }
    return true;
  }
     return false ;
}

attack(){
  let damage = this.calculateDamage(3 , 10) ;
  this.MonsterPower -= damage;
  this.turns.unshift({
           isPlayer: true ,
           text:"You hits with " + damage
  });
  if(this.checkWin()){
    return ;
  }
     this.monstorAttack(); 
}


specialAttack(){
  if(this.specialAttackCounter === 0){
    this.specialAttackCounter++ ;
    let damage = this.calculateDamage(10,20); 
this.MonsterPower -= damage ;
this.turns.unshift({
  isPlayer: true ,
  text:"You hits hard with " + damage
});
if(this.checkWin()){
  return ;
}
   this.monstorAttack();
}else{
  alert("only once");
}
}

monstorAttack(){
  let damage =  this.calculateDamage(5,12) ; 
  this.PlayerPower -= damage ;
  this.checkWin();
  this.turns.unshift({
    isPlayer: false ,
    text:"ELSODS hits with " + damage
});
}

heal(){
  if(this.healCounter === 0 ){
    if(this.PlayerPower >= 90){
      alert("You have enough Power");
    }else{
      this.healCounter++ ;
      this.PlayerPower += 10 ;
      this.turns.unshift({
        isPlayer: true ,
        text:"You heals with 10" 
      });
    }
  }else if(this.healCounter > 0){
    alert("only once");
  }
  }


giveUp(){
  alert("YOU GIVE UP YOU LOSE");
  this.fightIsRunning = false ;
  this.powerRefactor();
}



}
