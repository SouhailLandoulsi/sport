import { Component, OnInit } from "@angular/core";
import { MatchService } from "src/app/services/match.service";
import { PlayerService } from "src/app/services/player.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  match: any;
  latestPlayers: any = [];
  constructor(
    private matchService: MatchService,
    private playerService: PlayerService
  ) {}
  ngOnInit() {
    this.matchService.getAllMatches().subscribe((data) => {
      this.match = data.matchesTab[data.matchesTab.length - 1];
    });
    this.playerService.getAllPlayers().subscribe((data) => {
      for (let i = 0; i < 3; i++) {
        this.latestPlayers[i] = data.playersTab[data.playersTab.length - 1 - i];
      }
    });
  }
}
