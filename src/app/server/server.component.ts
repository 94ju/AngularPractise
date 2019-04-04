import { Component } from '@angular/core';

@Component({
    selector:'app-server',
    templateUrl:'./server.component.html',
    styleUrls:['./server.component.css']
})
export class ServerComponent{
 serverStatus="Offline";
 serverId:string="10";
 serverCreationStatus="Not Created yet";
 buttonGetDisabled=true;
 serverName='';
 buttonClicked=true;
 getServerId(){
     return this.serverId;
 }
 constructor(){
    setTimeout(() => {
        this.buttonGetDisabled=false;
    }, 2000);
    this.serverStatus = Math.random()> 0.5 ? 'online' : 'offline';

 }
 onCreateServer(){
     this.buttonClicked=false;
    this.serverCreationStatus="Server is Created";
 }
 onInputUpdate(event: any){
    this.serverName=event.target.value;
 }
 getColor(){
     return this.serverStatus === 'online' ? 'green' : 'red';
 }

}