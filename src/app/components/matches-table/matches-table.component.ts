import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { MatchService } from "src/app/services/match.service";

@Component({
  selector: "app-matches-table",
  templateUrl: "./matches-table.component.html",
  styleUrls: ["./matches-table.component.css"],
})
export class MatchesTableComponent implements OnInit {
  matches: any = [];

  constructor(private router: Router, private matchService: MatchService) {}

  ngOnInit() {
    // this.matches=allMatches;
    // get data from data base;

    this.matchService.getAllMatches().subscribe((data) => {
      console.log("la reponse", data.matchesTab);

      this.matches = data.matchesTab;
    });
  }

  allMatches() {
    this.matchService.getAllMatches().subscribe((data) => {
      console.log("la reponse", data.matchesTab);

      this.matches = data.matchesTab;
    });
  }

  goToDisplay(id: number) {
    //  alert(`${id}`)
    this.router.navigate([`matchInfo/${id}`]);
  }

  editMatch(id: number) {
    //  alert(`${id}`)
    this.router.navigate([`matchForm/${id}`]);
  }

  DeleteMatch(id: number) {
    this.matchService.deleteMatch(id).subscribe((data) => {
      console.log("here is deleted match", data.message);

      this.allMatches();
    });
  }
}
