import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  userAuthenticated = false;

  constructor(private apSerive: ApiService) {}

  ngOnInit(): void {}

  get isUserAuthenticated(): boolean {
    return this.apSerive.isAuthenticatedUser();
  }
}
