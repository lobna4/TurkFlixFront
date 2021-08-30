import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor( private service:ServiceService) { }

  ngOnInit(): void {
  }

  onClickLogout() {
    this.service.logout();
  }

}
