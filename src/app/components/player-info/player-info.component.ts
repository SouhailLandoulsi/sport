import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { allPlayers } from 'src/app/data/playersData';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-player-info',
  templateUrl: './player-info.component.html',
  styleUrls: ['./player-info.component.css']
})
export class PlayerInfoComponent implements OnInit {
  title: string = "Player Info";
  playerId: any;
  players= allPlayers;
  foundPlayer: any;

  constructor(private activatedRoute: ActivatedRoute, private playerService:PlayerService) { }

  ngOnInit() {
    this.playerId = this.activatedRoute.snapshot.paramMap.get('id');
   this.playerService.getPlayerById(this.playerId).subscribe(
    (data)=>{
      this.foundPlayer=data.foundPlayer
    }
   )
    // this.foundPlayer = this.players.find(
    //   (obj: any) => { return obj.id == this.playerId })
  }

}
