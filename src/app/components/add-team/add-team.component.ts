import { unescapeIdentifier } from "@angular/compiler";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { allTeams } from "src/app/data/teamsData";
import { TeamService } from "src/app/services/team.service";

@Component({
  selector: "app-add-team",
  templateUrl: "./add-team.component.html",
  styleUrls: ["./add-team.component.css"],
})
export class AddTeamComponent implements OnInit {
  addTeamForm: FormGroup;
  title: string = "Edit team";
  match: any = {};
  teamId: any = {};
  team: any = {};
  foundTeam: any;
  teams = allTeams;

  constructor(
    private activatedRoute: ActivatedRoute,
    private teamService: TeamService
  ) {}

  ngOnInit() {
    this.teamId = this.activatedRoute.snapshot.paramMap.get("id");
    if (this.teamId) {
      // this.team = this.teams.find((obj: any) => {
      //   return obj.id == this.teamId;
      // });
      this.teamService.getTeamById(this.teamId).subscribe((data) => {
        this.team = data.foundTeam;
      });
    } else {
       this.title = "Add Team";
    }
  }

  addOrEditTeam() {
    if (this.teamId) {
      this.teamService.updateTeam(this.team).subscribe();
    }
    this.teamService.addTeam(this.team).subscribe((data) => {
      console.log(this.team);
      console.log(data.msg);
    });
  }
}
