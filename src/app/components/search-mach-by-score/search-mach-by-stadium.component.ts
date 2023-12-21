import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { allMatches } from 'src/app/data/matchesData';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-search-mach-by-stadium',
  templateUrl: './search-mach-by-stadium.component.html',
  styleUrls: ['./search-mach-by-stadium.component.css']
})
export class SearchMachByStadiumComponent implements OnInit {
  searchMatchByTheScore: FormGroup;
  title : String="Search Match by score";
  obj: any={}
  matches=allMatches
 
  constructor(private matchService:MatchService, private router:Router) {

  }

  ngOnInit() {
    
  }

  searchMatchByScore(){
    this.matchService.searchMatch(this.obj).subscribe(
      (data) => {
        console.log(data.g);
        console.log("the score",this.obj);        
          this.matches=data.g
      }
    )
  }
}
