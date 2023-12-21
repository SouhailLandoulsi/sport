import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
playerUrl:string="http://localhost:3000/players"
  constructor(private httpClient:HttpClient) { }

  addPlayer(obj){
    return this.httpClient.post<{msg:any}>(this.playerUrl, obj)
  }

  getAllPlayers(){
    return this.httpClient.get<{playersTab:any}>(this.playerUrl)
  }

  getPlayerById(id){
    return this.httpClient.get<{foundPlayer: any}>(`${this.playerUrl}/${id}`)
  }

  updatePlayer(obj){
    return  this.httpClient.put<{msg:any}>(this.playerUrl,obj)
  }

  deletePlayer(id){
  return this.httpClient.delete<{message : any}>(`${this.playerUrl}/${id}`)
  }

}
