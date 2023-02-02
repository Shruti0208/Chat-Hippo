// import { Component } from '@angular/core';
// import { DataService } from '../data.service';
// import { sender } from '../user-window/sender';
// import { msgInf } from '../msgInf';
// // import { ActivatedRoute, ParamMap, Router } from '@angular/router';

// @Component({
//   selector: 'app-chat-pannel',
//   templateUrl: './chat-pannel.component.html',
//   styleUrls: ['./chat-pannel.component.css']
// })
// export class ChatPannelComponent {
//   public curDate=new Date();
//   chatsArr: msgInf[]=[];
//   currentChat:msgInf={} as msgInf;
//   public show:boolean=true;   
//   userType='A'
//    msgArr:string[]=[];
//   constructor( public chatservice:DataService){}
//   ngOnInit()
//   {
// // changed
//     //  this.chatsArr=this.chatservice.msgArr;
     
//     // this.route.paramMap.subscribe((params:ParamMap)=>{
//     // let id=parseInt(this.route.snapshot.paramMap.get('id')as string) ;
    
//     // this.chatservice.chatid=id;
//     // console.log('chat id is',this.chatservice.chatid);
//     // if(this.chatsArr.length>0)
//     // {
//     //   this.show=true;
//     // }
   
//     // this.currentChat=this.chatsArr[this.chatservice.chatid];
//    }
  
//   // storeMessage(message:string, userType:string)
//   // {
//   //   console.log("in store msg");
//   //   this.curDate=new Date();
//   //   let time=this.curDate;
//   //   let currentMessage:sender={} as sender;
//   //   currentMessage.message=message;
//   //   currentMessage.userType=userType;
//   //   currentMessage.time=this.curDate;
//   //   this.chatservice.msgArr[0].senderArray.push(currentMessage)
//   //   // this.chatservice.chatArr[this.chatservice.chatid].senderArray.push(currentMessage);
//   //   console.log("loggin chatservice",this.chatservice.msgArr);
//   // }

  
//   userChat(message: string)
//   {
//     let userType='U';
//     let content= message;
//     // console.log("message to store",content);
//     this.msgArr.push(message);
//     console.log(this.msgArr)
//     // this.storeMessage(content,userType);
//   }
//   customerChat(message: string)
//   {
//     let userType='C';
//     let content= message;
//     // console.log("message to store",content);
//     this.msgArr.push(message);
//     console.log(this.msgArr)
//     // this.storeMessage(content,userType);

//   }
// }

import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { sender } from '../user-window/sender';
@Component({
  selector: 'app-chat-pannel',
  templateUrl: './chat-pannel.component.html',
  styleUrls: ['./chat-pannel.component.css']
})
export class ChatPannelComponent {
  public messageArr:sender[]=[];
   temp:number=-1;
  //  customerMsg:string[]=[];
   userMsg:string[]=[];
   
constructor()
{

}
userChat(message:string)
{
 let comp:sender={} as sender 
 comp.userType="user";
//  temp.messageArray.push(message); 
   comp.message=message;
   this.temp=0;
this.userMsg.push(message);
// console.log(comp);
this.messageArr.push(comp);
console.log(this.messageArr);

}
customerChat(message:string)
{
  let comp:sender={} as sender 
  comp.userType="customer";
  comp.message=message;
  this.temp=1;
  this.userMsg.push(message);
  // console.log(comp);
this.messageArr.push(comp);
console.log(this.messageArr);
}
}
