import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { allMatches } from "src/app/data/matchesData";
import { MatchService } from "src/app/services/match.service";

@Component({
  selector: "app-match-form",
  templateUrl: "./match-form.component.html",
  styleUrls: ["./match-form.component.css"],
})
export class MatchFormComponent implements OnInit {
  
  matchForm: FormGroup;
  match: any = {};
  matchId: any = {};
  title: string = "Add Match";
  foundMatch: any;
  matches = allMatches;

  constructor(
    private activatedRoute: ActivatedRoute,
    private matchService: MatchService
  ) {}

  ngOnInit() {
    this.matchId = this.activatedRoute.snapshot.paramMap.get("id");
    if (this.matchId) {
      this.title = "Edit Match";
      // this.match=this.matches.find(
      //   (obj:any) => {return obj.id ==this.matchId}
      // )
      this.matchService.getMatchById(this.matchId).subscribe((data) => {
        this.match = data.foundMatch;
      });
    }
  }

  addOrEditMatch() {
    if (this.matchId) {
      this.matchService.updateMatch(this.match).subscribe((data) => {
        console.log(data.msg);
      });
    } else {
      this.matchService.addMatch(this.match).subscribe();
    }
  }
}
