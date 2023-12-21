import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-search-match',
  templateUrl: './search-match.component.html',
  styleUrls: ['./search-match.component.css']
})
export class SearchMatchComponent implements OnInit {
  searchMatchByTeamForm:FormGroup;
  obj : any={};
  searchTeamName :any;
  searh : any;

  constructor(private router:Router) { }

  ngOnInit() {
  }

  searchMatchByTeam(){
  console.log(this.obj.name);
  localStorage.setItem('teamToFind', JSON.stringify(this.obj))
  this.router.navigate(['allMatches/search']);
  }

}
