import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Film } from 'src/app/Model/Film';
import { User } from 'src/app/Model/User';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  films?:Film[];
  users?:User[];

  constructor(
    private service:ServiceService,
    private router:Router,
    ) { }

  ngOnInit(): void {
    this.service.getFilms()
      .subscribe(data=>{
        this.films=data;
        console.log(this.films)
      })
  }

  remove(filmId:any){
   this.service.deleteFilm(filmId)
    .subscribe( (data:any) =>{
      this.films = this.films?.filter(film => filmId !== film.id);
        alert("Film supprimé");
      this.router.navigate(["list"]);
    })
  }


    rolesUser(){
    this.service.getUserList()
    .subscribe(data => {
      this.users=data;
      console.log(this.users)
      })
    }

}


