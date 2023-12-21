import { Component, OnInit } from "@angular/core";
import jwt_decode from "jwt-decode";
import { isBoolean } from "util";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit {
  user: any = {};

  constructor() {}

  ngOnInit() {}

  isLoged() {
    let token = sessionStorage.getItem("jwt");
    if (token) {
      this.user = this.decodeToken(token);
    }
    return !!token;
  }

  decodeToken(token: string) {
    
    return jwt_decode(token);
  }

  logOut() {
    sessionStorage.removeItem("jwt");
    window.location.reload();
  }
}
