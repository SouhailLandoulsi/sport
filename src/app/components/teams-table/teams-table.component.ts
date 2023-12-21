import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { allTeams } from 'src/app/data/teamsData';
import { PlayerService } from 'src/app/services/player.service';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-teams-table',
  templateUrl: './teams-table.component.html',
  styleUrls: ['./teams-table.component.css']
})
export class TeamsTableComponent implements OnInit {
  searchTeamsByStadium : FormGroup;
  teams:any=[];
  path :any;
  isDisplayed :boolean= false;
  obj: any={};
  team: any={};
  teamStd: any;
  foundTeams:any=[];

  constructor(private router:Router, private teamService:TeamService) { }

  ngOnInit() {
    // this.teams=allTeams

      this.path=this.router.url;
      if (this.path =='/admin') {
       this.isDisplayed = true;
      }

      this.teamService.getAllTeams().subscribe(
        (data)=>{
          this.teams=data.teamsTab
        }
      )
   
  }


  goToEditTeam(id:number){
      // alert(`${id}`)
       this.router.navigate([`addTeam/${id}`])
    }
  
  goToDisplayTeam(id:number){
      //  alert(`${id}`)
         this.router.navigate([`teamInfo/${id}`])
      }

  // searchTeamByStadium(){
  //    this.teams=allTeams;
  //   this.foundTeams=[];
  //   for (let i = 0; i < this.teams.length; i++) {
  //     if (this.teams[i].stadium ==  this.obj.stadium) {
  //       this.foundTeams.push(this.teams[i])
  //     }
  //   }
  //   this.teams = this.foundTeams;
  // }

  deleteTeam(id:number){
    this.teamService.deleteTeam(id).subscribe(
    
    )
  }

}
