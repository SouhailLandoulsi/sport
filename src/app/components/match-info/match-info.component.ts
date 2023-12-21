import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { allMatches } from 'src/app/data/matchesData';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-match-info',
  templateUrl: './match-info.component.html',
  styleUrls: ['./match-info.component.css']
})
export class MatchInfoComponent implements OnInit {
title :string = "Match-Info";
matchId: any ;
matches : any = allMatches;
match :any;
foundMatch : any;

constructor (private  activatedRoute: ActivatedRoute, private matchService: MatchService ) {}

  ngOnInit() {
    this.matchId = this.activatedRoute.snapshot.paramMap.get('id');
    this.matchService.getMatchById(this.matchId).subscribe(
      (data) => {
        console.log('here the found match', data.foundMatch);
        this.foundMatch=data.foundMatch         
      }
    )
    // for (let i = 0; i < this.matches.length; i++) {
    //   if (this.matches[i].id == this.matchId) {
    //     this.foundMatch= this.matches[i];
    //     break; 
    //   }
    // }
  //   this.foundMatch=this.matches.find(
  //   (obj:any) => {return obj.id ==this.matchId}
  //   )
  // }

 }
}


