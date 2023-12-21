import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { allPlayers } from 'src/app/data/playersData';
import { PlayerService } from 'src/app/services/player.service';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-player-form',
  templateUrl: './player-form.component.html',
  styleUrls: ['./player-form.component.css']
})
export class PlayerFormComponent implements OnInit {

    playerForm : FormGroup;
    playerId :any;
    title: string="Player Form";
    player: any={};
    players=allPlayers;
    teams: any=[];
    teamId:any;

    constructor(private X:FormBuilder, private activatedRoute:ActivatedRoute, private playerService:PlayerService,
      private teamService:TeamService) {
    
     }
  

  ngOnInit() {
    this.playerForm = this.X.group({
      name:['',[Validators.required, Validators.minLength(3)]],
      age:['', [Validators.required, Validators.min(15)]],
      number:['', [Validators.required, Validators.min(0)]],
      position:[''],      
    }) 

    this.playerId = this.activatedRoute.snapshot.paramMap.get('id') 
    if (this.playerId) {
      this.title = "Edit Player";
      // this.player=this.players.find(
      //   (obj:any) => {return obj.id ==this.playerId}
     // )
     this.playerService.getPlayerById(this.playerId).subscribe(
      (data) =>{
        this.player=data.foundPlayer
      }
     )
    }

    

      this.teamService.getAllTeams().subscribe(
        (data)=>{
          this.teams = data.teamsTab
        }
      ) 
  }

  addOrEditPlayer(){
    this.player.tId = this.teamId
    console.log("the team id",this.teamId);
    
    if (this.playerId) {
      this.playerService.updatePlayer(this.player).subscribe()
    } 
    {
      this.playerService.addPlayer(this.player).subscribe(
        (data) => {
          console.log(data.msg);
        }
      )
    }
  }

  selectedTeam(evt){
    this.teamId = evt.target.value
  }
  
}
