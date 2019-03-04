import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {
   loginForm: FormGroup;
   signupForm: FormGroup;
   
   ngOnInit(){}

   constructor(private fb: FormBuilder, private us: UsersService) {
     this.createSignupForm();
   }

   createLoginForm() {
     this.loginForm = this.fb.group({
       email: ['', Validators.required ],
       password: ['', Validators.required ]
     });
   }

   createSignupForm() {
     this.signupForm = this.fb.group({
       user_name: ['', Validators.required ],
       email: ['', Validators.required ],
       password: ['', Validators.required ]
     });
   }

   addUser(user_name,email,password) {
     alert();
     this.us.addUser({user_name:user_name, email:email, password:email});
   }
}
