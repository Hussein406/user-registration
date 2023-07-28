import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

interface UserProfile {
  name: string;
  email: string;
  bio: string;
  img: string;
}
@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css'],
})
export class ProfilePageComponent implements OnInit {
  userProfile!: UserProfile ;

  constructor(private apiServ: ApiService) {}

  ngOnInit(): void {
      this.getUserProfileData();
  }


  getUserProfileData() {

    this.apiServ.getUserProfile().subscribe(
      (data: any) => {
        this.userProfile = data;
      },
      (error) => {
        console.error('Error Fetching User Profile: ', error);
      }
    )

  }
}
