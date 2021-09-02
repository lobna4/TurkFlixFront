import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Model/User';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  users?:User[];


  constructor(
    private service:ServiceService,
  ) { }

  ngOnInit(): void {
      this.service.getUserList()
      .subscribe(data => {
        this.users=data;
        console.log(this.users)
        })
  }

}
