import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { allMatches } from 'src/app/data/matchesData';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {

matches: any=[];
title : string="Matches";
teamToFind : any;
path : string;
foundMatches :any=[];

  constructor(private  router:Router , private matchServices:MatchService) { }

  ngOnInit() {
   
    this.matches= allMatches;
    this.matchServices.getAllMatches().subscribe();

    this.teamToFind = JSON.parse(localStorage.getItem("teamToFind")||' []');
    
    
   for (let i = 0; i < this.matches.length; i++) {
    
    if (this.matches[i].teamOne == this.teamToFind.name || this.matches[i].teamTwo == this.teamToFind.name) {
     
      
      this.foundMatches.push(this.matches[i])
    }
    
   }
  
   
   this.path =this.router.url;
   if (this.path =='/allMatches/search') {
    this.matches= this.foundMatches
   }


  }


}
