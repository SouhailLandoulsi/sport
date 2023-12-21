import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MatchesComponent } from './components/matches/matches.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { AddTeamComponent } from './components/add-team/add-team.component';
import { EditTeamComponent } from './components/edit-team/edit-team.component';
import { MatchFormComponent } from './components/match-form/match-form.component';
import { PlayerFormComponent } from './components/player-form/player-form.component';
import { HomeComponent } from './components/home/home.component';
import { PlayersComponent } from './components/players/players.component';
import { TeamsComponent } from './components/teams/teams.component';
import { AdminComponent } from './components/admin/admin.component';
import { MatchInfoComponent } from './components/match-info/match-info.component';
import { SearchMatchComponent } from './components/search-match/search-match.component';
import { TeamInfoComponent } from './components/team-info/team-info.component';
import { PlayerInfoComponent } from './components/player-info/player-info.component';
import { AddStadiumComponent } from './components/add-stadium/add-stadium.component';
import { SearchMachByStadiumComponent } from './components/search-mach-by-score/search-mach-by-stadium.component';
import { ProfileComponent } from './components/profile/profile.component';
import { WeatherComponent } from './components/weather/weather.component';


const routes: Routes = [
  {path:"", component:HomeComponent},{path:"matches", component:MatchesComponent}, 
  {path:"login", component:LoginComponent},{path:"signup", component:SignupComponent},{path:"addTeam", component:AddTeamComponent},{path:"editTeam", component:EditTeamComponent},{path:"matchForm", component:MatchFormComponent},{path:"playerForm", component:PlayerFormComponent},{path:"allMatches", component:MatchesComponent},
  {path:"allPlayers", component:PlayersComponent},{path:"allTeams", component:TeamsComponent},
  {path:"admin", component:AdminComponent},{path:"matchInfo/:id", component:MatchInfoComponent},{path:"matchForm/:id", component:MatchFormComponent},{path:"searchMatchByTeam", component:SearchMatchComponent},{path:"allMatches/search", component:MatchesComponent},{path:"teamInfo/:id", component:TeamInfoComponent},{path:"addTeam/:id", component:AddTeamComponent},{path:"playerForm/:id", component:PlayerFormComponent},{path:"allPlayers/:id", component:PlayersComponent},{path:"playerInfo/:id", component:PlayerInfoComponent},{path:"addStadium", component:AddStadiumComponent},{path:"searchMatchByScore", component:SearchMachByStadiumComponent},{path:"signupAdmin", component:SignupComponent},{path:"profile/:id", component:ProfileComponent},{path:"weather", component:WeatherComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
