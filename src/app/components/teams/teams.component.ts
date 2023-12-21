import { Component, OnInit } from '@angular/core';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
  title : string="teams";
 


  constructor(private teamService:TeamService) { }

  ngOnInit() {

 this.teamService.getAllTeams().subscribe()
    
  }

}
