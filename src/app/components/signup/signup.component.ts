import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { UserService } from "src/app/services/user.service";
import { log } from "util";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"],
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  title: String = "SIGNUP";
  path: string;
  imagePreview:any;
  

  constructor(
    private X: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {
    const passwordPattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{5,10}$/;
    this.signupForm = this.X.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [Validators.required, Validators.pattern(passwordPattern)],
      ],
      tel: [''],
      role: [''],
      img:['']

    });
  }

  ngOnInit() {}

  signup() {
   
    console.log(this.signupForm.value);
    this.userService.addUser(this.signupForm.value, this.signupForm.value.img).subscribe((data) => {
      console.log("there is the added user", data.msg);
    });
    this.path = this.router.url;
    if (this.path == "/signup") {
      this.signupForm.value.role = "user";
    } else {
      this.signupForm.value.role = "admin";
    }
    // we can replace it with:
    // this.path == "/signup"
    //   ? (this.signupForm.value.role = "user")
    //   : (this.signupForm.value.role = "admin");
    // or we can do this
    // this.signupForm.value.role = this.path == "/signup" ? "user" : "admin";
  }

  onImageSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.signupForm.patchValue({ img: file });
    this.signupForm.updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
    this.imagePreview = reader.result as string
    };
    reader.readAsDataURL(file);
    }
    
}
