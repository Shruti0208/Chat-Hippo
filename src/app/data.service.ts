import { Injectable } from '@angular/core';
import { timestamp } from 'rxjs';
import { msgInf } from './msgInf';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  public keyNum:number=0;
  public agentS:string="A";
  public msgArr:msgInf[]=[];
  constructor() { }
  public curDate=new Date();
  store(name:string)
  {

    console.log("in store fnc");
    let welcomeMsg:string="Welcome to hippo chat";
let curMsg:msgInf={} as msgInf;

// console.log(usr);
curMsg.key=this.keyNum;
curMsg.username=name;
this.curDate=new Date();

curMsg.time=new Date;
curMsg.time=this.curDate;
curMsg.sender=new Array();
curMsg.sender.push("A");
curMsg.msgArr=new Array();
curMsg.msgArr.push(welcomeMsg);

console.log(curMsg);
this.msgArr.push(curMsg);
console.log("Msg Array");
console.log(this.msgArr);

this.keyNum++;
  }

}
