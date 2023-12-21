import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { allPlayers } from 'src/app/data/playersData';
import { MatchService } from 'src/app/services/match.service';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-players-table',
  templateUrl: './players-table.component.html',
  styleUrls: ['./players-table.component.css']
})
export class PlayersTableComponent implements OnInit {
  players=allPlayers;
  playerId: any;

  constructor(private router:Router, private playerService:PlayerService) { }

  ngOnInit() {
    this.playerService.getAllPlayers().subscribe( 
      (data) => {
        console.log('la reponse', data.playersTab);
     
        this.players=data.playersTab;
    })
    
  }

  goToEditPlayer(id: number){
    // alert(`${id}`)
    this.router.navigate([`playerForm/${id}`])
  }

  goToDisplayPlayer(id:number){
    //  alert(`${id}`)
       this.router.navigate([`playerInfo/${id}`])
    }

   
    DeletePlayer(id:number){
      this.playerService.deletePlayer(id).subscribe(
        (data)=>{
          console.log(data.message);
          
        }
      )
    }

}
