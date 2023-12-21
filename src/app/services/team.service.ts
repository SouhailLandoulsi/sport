import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
teamUrl:string="http://localhost:3000/teams"
  constructor(private httpClient:HttpClient) {}

  addTeam(obj){
    return  this.httpClient.post<{msg: any}>(this.teamUrl,obj)
  }

  // récuppérer tt le tableau d'objets
  getAllTeams(){
    return  this.httpClient.get<{teamsTab : any}>(this.teamUrl)
  }

  getTeamById(id){
    return  this.httpClient.get<{foundTeam: any}>(`${this.teamUrl}/${id}`)
  }

// Modifier un objet de tableau d'objets
  updateTeam(obj){
    return  this.httpClient.put<{msg:any}>(`${this.teamUrl}/${obj.id}`,obj)
  }

  deleteTeam(id){
    return  this.httpClient.delete<{message : any}>(`${this.teamUrl}/${id}`)
  }
  
}
