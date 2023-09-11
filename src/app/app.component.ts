import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  signin = false;
  constructor(private auth_service: AuthService) {}

  ngOnInit(): void {
    this.auth_service.signin$.subscribe((res) => {
      this.signin = res;
    });
    this.auth_service.checkauth().subscribe(() => {});
  }
}
