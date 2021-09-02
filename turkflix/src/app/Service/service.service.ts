import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import {map} from "rxjs/operators";
import { environment } from 'src/environments/environment';
import { Film } from '../Model/Film';
import { User } from '../Model/User';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  film?:Film[];

  private apiUrl = `${environment.apiUrl}/films`;
  private url = `${environment.apiUrl}`;
  private urlAdmin =`${environment.apiUrl}/admin/film`;

  constructor(private http:HttpClient,
              private router:Router) { }

  getFilms(){
    return this.http
      .get<Film[]>(this.apiUrl);
  }

  createFilms(film:Film){
    return this.http
      .post<Film>(this.urlAdmin + "/", film);
  }

  getFilmId(id:number){
    return this.http
      .get<Film>(this.urlAdmin + "/" +id);
  }

  updateFilm(film:Film){
    return this.http
      .put<Film>(this.urlAdmin + "/" + film.id, film);
  }

  deleteFilm(filmId:number){
    return this.http
      .delete<Film>(this.urlAdmin + "/" + filmId);
  }

  /**
   * méthode qui pérmet de s'enregistrer
   * @param newUser
   */
  register(newUser: User) {
    return this.http.post(`${this.url}/auth/signin`, newUser)
  }

   /**
   * méthode qui permet de se logger et de save le token en localStorage
   * @param user
   */
  login(user:User){
    return this.http.post(`${this.url}/auth/login`,user)
      .pipe(
        map(
          (resp:any)=>{
            localStorage.setItem('TOKEN_APPLI', resp.token);
            console.log('token Save');
            return resp;
          }
        )
      );
  }

  /**
   * méthode qui récupère le token du localStorage
   */
  getToken(){
    return localStorage.getItem("TOKEN_APPLI");
  }


 logout() {
    localStorage.removeItem('TOKEN_APPLI');
    console.log('déconnecter');
    this.router.navigate(['/login']);
  }

   /**
   * méthode qui permet de récupérer le role
   */
  getUserList(){
    return this.http
      .get<User[]>(this.url + "/admin/listUser");
  }

}
