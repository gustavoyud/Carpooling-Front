import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

/**
 * Dashboard Component
 *
 * Author: Gustavo Yud
 */
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  /**
   * Dashboard Constructor
   *
   * @param { Router } - Angular Router
   * @param { AuthService } - HTTP Auth Service
   */
  constructor(
    private router: Router,
    private auth: AuthService,
  ) { }

  /**
   * Initializer
   */
  ngOnInit() {
    this.auth.signinCheck((response) => { });
  }

  /**
   * logout Method
   */
  public logout(): void {
    localStorage.removeItem('access_token');
    this.router.navigate(['/login/']);
  }

}
