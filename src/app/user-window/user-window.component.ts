import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { msgInf } from '../msgInf';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user-window',
  templateUrl: './user-window.component.html',
  styleUrls: ['./user-window.component.css']
})
export class UserWindowComponent {
  public chatsArr:msgInf[]=[];
constructor(public chats:DataService)
{

}
ngOnInit()
{
  this.chatsArr=this.chats.msgArr;
}
selectUser(key:number)
{
  this.chats.chatid=key;
  console.log(this.chats.chatid);
}
}