import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { sender } from '../user-window/sender';
@Component({
  selector: 'app-chat-pannel',
  templateUrl: './chat-pannel.component.html',
  styleUrls: ['./chat-pannel.component.css']
})
export class ChatPannelComponent {
  
   temp:number=-1;
   customerMsg:string[]=[];
   userMsg:string[]=[];
   
constructor()
{

}
userChat(message:string)
{
 let temp:sender={} as sender 
 temp.userType="user";
//  temp.messageArray.push(message); 
}
customerChat(message:string)
{
  let temp:sender={} as sender 
  temp.userType="customer";
  // temp.messageArray.push(message);
}
}
