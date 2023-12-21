import { Component, OnInit, Input } from '@angular/core';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  @Input() p: any=[];
  constructor(private matchService: MatchService) { }

  ngOnInit() {
  }

}
