import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MatchesComponent } from './components/matches/matches.component';
import { PlayersComponent } from './components/players/players.component';
import { TeamsComponent } from './components/teams/teams.component';
import { HomeComponent } from './components/home/home.component';
import { CupEventComponent } from './components/cup-event/cup-event.component';
import { NewsComponent } from './components/news/news.component';
import { BlogComponent } from './components/blog/blog.component';
import { ResultComponent } from './components/result/result.component';
import { StandingsComponent } from './components/standings/standings.component';
import { InfoComponent } from './components/info/info.component';
import { ArticleComponent } from './components/article/article.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { MatchFormComponent } from './components/match-form/match-form.component';
import { PlayerFormComponent } from './components/player-form/player-form.component';
import { AddTeamComponent } from './components/add-team/add-team.component';
import { EditTeamComponent } from './components/edit-team/edit-team.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminComponent } from './components/admin/admin.component';
import { MatchesTableComponent } from './components/matches-table/matches-table.component';
import { PlayersTableComponent } from './components/players-table/players-table.component';
import { TeamsTableComponent } from './components/teams-table/teams-table.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BannerComponent } from './components/banner/banner.component';
import { MatchInfoComponent } from './components/match-info/match-info.component';
import { SearchMatchComponent } from './components/search-match/search-match.component';
import { TeamInfoComponent } from './components/team-info/team-info.component';
import { PlayerInfoComponent } from './components/player-info/player-info.component';
import { PipesPipe } from './pipes.pipe';
import { CustimisedFilterPipe } from './pipes/custimised-filter.pipe';
import { CustomStarPipe } from './pipes/custom-star.pipe';
import { AddStadiumComponent } from './components/add-stadium/add-stadium.component';
import { SearchMachByStadiumComponent } from './components/search-mach-by-score/search-mach-by-stadium.component';
import { ProfileComponent } from './components/profile/profile.component';
import { WeatherComponent } from './components/weather/weather.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
  
    MatchesComponent,
    PlayersComponent,
    TeamsComponent,
    HomeComponent,
    CupEventComponent,
    NewsComponent,
    BlogComponent,
    ResultComponent,
    StandingsComponent,
    InfoComponent,
    ArticleComponent,
    LoginComponent,
    SignupComponent,
    MatchFormComponent,
    PlayerFormComponent,
    AddTeamComponent,
    EditTeamComponent,
    AdminComponent,
    MatchesTableComponent,
    PlayersTableComponent,
    TeamsTableComponent,
    DashboardComponent,
    BannerComponent,
    MatchInfoComponent,
    SearchMatchComponent,
    TeamInfoComponent,
    PlayerInfoComponent,
    PipesPipe,
    CustimisedFilterPipe,
    CustomStarPipe,
    AddStadiumComponent,
    SearchMachByStadiumComponent,
    ProfileComponent,
    WeatherComponent,
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
