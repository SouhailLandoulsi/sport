import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userId : any;
  user: any={};
  title: any="Profile"


  constructor(private activatedRoute:ActivatedRoute, private usersService:UserService ) { }

  ngOnInit() {
    this.userId = this.activatedRoute.snapshot.paramMap.get('id');

    this.usersService.getUserById(this.userId).subscribe(
      (data)=>{
            this.user=data.foundUser
      }
    )

  }

}
