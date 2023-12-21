import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MatchService {
matchUrl:string="http://localhost:3000/matches";
matchUrlSearchMatch:string="http://localhost:3000/matches/search";
obj : any={};
  constructor(private httpClient:HttpClient) {}

  addMatch(obj){
    return  this.httpClient.post<{msg : any}>(this.matchUrl,obj)
  }

  // récuppérer tt le tableau d'objets.
  getAllMatches(){
    return  this.httpClient.get<{matchesTab:any}>(this.matchUrl)
  }

  getMatchById(id){
    return  this.httpClient.get<{foundMatch:any}>(`${this.matchUrl}/${id}`)
  }

// Modifier un objet de tableau d'objets.
  updateMatch(obj){
    return  this.httpClient.put<{msg:any}>(this.matchUrl,obj)
  }

  deleteMatch(id){
    return  this.httpClient.delete<{message:any}>(`${this.matchUrl}/${id}`)
  }

  searchMatch(obj){
      return  this.httpClient.post<{msg:any, g:any}>(this.matchUrlSearchMatch,obj)
  } 
}
