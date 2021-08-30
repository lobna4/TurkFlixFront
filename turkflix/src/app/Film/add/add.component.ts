import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Film } from 'src/app/Model/Film';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  filmForm = new FormGroup({
    name: new FormControl(''),
    resume: new FormControl(''),
  });

  constructor(private router: Router, private service: ServiceService) { }

  ngOnInit(): void {
  }

  Ajouter() {
    const newFilm = this.filmForm.value;
    console.log(newFilm)
    this.service.createFilms(newFilm)
      .subscribe(
        (film: Film) => {
          alert("Ajouté avec succes!");
          this.router.navigate(["list"]);
        })

  }

}
