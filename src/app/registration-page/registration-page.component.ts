import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.css'],
})
export class RegistrationPageComponent implements OnInit {
  registrationForm!: FormGroup;
  registrationSuccess: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.registrationForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      bio: [''],
    });
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      this.apiService.registerUser().subscribe(
        () => {
          this.registrationSuccess = true;

          this.router.navigate(['/profile']);
        },
        (error) => {
          console.error('User Registration Failed: ', error);
          this.registrationSuccess = false;
        }
      )
    }
  }
}
