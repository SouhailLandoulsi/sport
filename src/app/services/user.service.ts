import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class UserService {
  userUrl: string = "http://localhost:3000/users";

  constructor(private httpClient: HttpClient) {}

  addUser( obj: any, img: File) {
    let fData = new FormData();
    fData.append("firstName", obj.firstName)
    fData.append("lastName", obj.lastName)
    fData.append("email", obj.email)
    fData.append("password", obj.password)
    fData.append("tel", obj.tel)
    fData.append("role", obj.role)
    fData.append("img", img)
    return this.httpClient.post<{ msg: any }>(`${this.userUrl}/signup`, fData);
  }

  login(obj) {
    return this.httpClient.post<{ msg: any; token: any }>(
      `${this.userUrl}/login`,
      obj
    );
  }


  getUserById(id) {
    return this.httpClient.get<{ foundUser: any }>(`${this.userUrl}/${id}`);
  }
}
