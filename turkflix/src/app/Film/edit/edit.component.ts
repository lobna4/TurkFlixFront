import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Film } from 'src/app/Model/Film';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  film: Film = new Film();

   filmForm = new FormGroup({
     id: new FormControl(''),
    name: new FormControl(''),
    resume: new FormControl(''),
  });

  constructor(private router: Router,
              private service: ServiceService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    const filmId = this.route.snapshot.params.filmId;
    this.service.getFilmId(filmId)
      .subscribe(
        (film:Film) => {
          this.filmForm.patchValue(film);
        }
      );
  }



  Update() {
    const updateForm = this.filmForm.value;
    this.service.updateFilm(updateForm)
      .subscribe(
       (film: Film) => {
        console.log("update ok");
        this.router.navigate(["list"]);
      })
  }



}


