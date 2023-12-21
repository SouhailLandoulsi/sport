import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-stadium',
  templateUrl: './add-stadium.component.html',
  styleUrls: ['./add-stadium.component.css']
})
export class AddStadiumComponent implements OnInit {
  stadiumForm:FormGroup;
  title:string="add stadium"
  stadiumsTab:any;
  stadium:any;

  constructor(private x:FormBuilder) { 

  }

  ngOnInit() {
    this.stadiumForm = this.x.group({
      max :[''],
      stadiumName:[''],
      stadiumCapacity:[''],
      stadiumCity:[''],
    }) 
  }

  addStadium(){
    this.stadiumsTab = JSON.parse(localStorage.getItem('stadiums')|| '[]');
    this.stadium =this.stadiumForm.value
    this.stadium.id = this.generatedId(this.stadiumsTab)+1;
    this.stadiumsTab.push(this.stadium)
    localStorage.setItem("stadiums", JSON.stringify(this.stadiumsTab));
  }

  generatedId(T){
    let max;
    if (T.length ==0) {
      max =0;
    }
    else{
      max=T[0].id;
      for (let i = 0; i < T.length; i++) {
        if (T[i].id > max) {
        max = T[i].id;
        }
      }
    }
    return max
        } 
    }
  












