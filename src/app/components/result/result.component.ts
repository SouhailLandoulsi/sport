import { Component, OnInit, Input } from '@angular/core';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
 @Input() m: any=[];

  constructor(private teamService:TeamService) { }

  ngOnInit() {
  
  
  }

  scoreResult(scoreOne:any ,  scoreTwo:any){
    if (scoreOne > scoreTwo) {
      return 1
    }
    else if (scoreOne < scoreTwo) {
      return 2
    }
    else
    {
      return 0
    }
  }

  teamResult(teamOne:any ,  teamTwo:any){
    if (teamOne > teamTwo) {
      return 'green'
    }
    else if (teamOne < teamTwo) {
      return 'blue'
    }
    else
    {
      return 'yellow'
    }
  }

}

