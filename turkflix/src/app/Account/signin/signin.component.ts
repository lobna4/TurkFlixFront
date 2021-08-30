import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/Model/User';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  
  registerForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    username: new FormControl('', [Validators.required]),
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(4)]),
  })
  
  constructor( 
    private router:Router,
    private service:ServiceService,
  ) { }

  ngOnInit(): void {
  }

  onRegister(){
    const newUser = this.registerForm.value;
    console.log(newUser)
    if(this.registerForm.valid){
      this.service.register(newUser)
        .subscribe(
          (user:User)=>{
            this.router.navigate(["login"])
            console.log(user);
          }
        )
    }
  }

}
