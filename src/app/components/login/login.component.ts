import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { UserService } from "src/app/services/user.service";
import jwt_decode from "jwt-decode";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  f: FormGroup;
  user: any = {};
  title: String = "LogIn";
  errorMsg: string = "";

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {}

  login() {
    this.userService.login(this.user).subscribe((data) => {
      //   ************  rod belek mel user wel token *****************************
      console.log(data.msg);
      if (data.token) {
        console.log(data.token);
        
        // khabit el token fel sessionStorage
        sessionStorage.setItem("jwt", data.token);
        let user: any = this.decodeToken(data.token);
        if (user.role == "user") {
          this.router.navigate([`profile/${user.id}`]);
          console.log(user);
          
        } else {
          this.router.navigate([""]);
        }
      } else {
        this.errorMsg = "please check your email/password";
      }
    });
  }

  decodeToken(token: string) {
    return jwt_decode(token);
  }

  
}
