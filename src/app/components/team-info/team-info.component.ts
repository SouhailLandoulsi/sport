import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { allTeams } from 'src/app/data/teamsData';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-team-info',
  templateUrl: './team-info.component.html',
  styleUrls: ['./team-info.component.css']
})
export class TeamInfoComponent implements OnInit {
  title: string="team Info";
  teamId : any;
  foundTeam:any;
  // teams=allTeams;
  teams:any=[];
  t:any={}
 
  constructor(private activatedRoute:ActivatedRoute, private teamService:TeamService) { }
 
  ngOnInit() {

    this.teamId = this.activatedRoute.snapshot.paramMap.get('id');
    this.teamService.getTeamById(this.teamId).subscribe(
      (data)=>{
        this.teams=data.foundTeam
      }
    )
  //  this.teams=this.foundTeam
   console.log(this.teams);
  }
}
