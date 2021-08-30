import { Component, OnInit } from '@angular/core';
import emailjs, { EmailJSResponseStatus, init } from 'emailjs-com';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  constructor() { }

  

  ngOnInit(): void {
    init("user_ILHkAExMbunVEktYNYR0j")

  }

  public sendEmail(e: Event) {
    e.preventDefault();
    emailjs.sendForm('service_cy3m6d3', 'template_6uu5ybh', e.target as HTMLFormElement, 'user_ILHkAExMbunVEktYNYR0j')
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });


  }
}
