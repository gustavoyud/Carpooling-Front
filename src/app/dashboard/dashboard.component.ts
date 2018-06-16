import { UsersService } from './../../services/users.service';
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
   * User Name
   */
  public name = '';

  /**
   * Schedule List
   */
  public scheduleList = [];

  /**
   * Dashboard Constructor
   *
   * @param { Router } - Angular Router
   * @param { AuthService } - HTTP Auth Service
   */
  constructor(
    private router: Router,
    private auth: AuthService,
    private users: UsersService,
  ) { }

  /**
   * Initializer
   */
  ngOnInit() {
    this.auth.signinCheck((response) => { });
    this.users.getUsers((response) => {
      if (response.status === 200) {
        if (!response.body[0]) {
          this.router.navigate(['/signup/']);
        } else {
          this.name = response.body[0].name;
        }
      }
    });
    this.getScheduleList();
  }

  /**
   * Method to get schedule List
   */
  public getScheduleList(): void {
    const data = {};
    this.users.getScheduleList(data, (response: any) => {
      if (response.status === 200) {
        this.scheduleList = response.body;
      }
    });
  }

  /**
   * logout Method
   */
  public logout(): void {
    localStorage.removeItem('url');
    localStorage.removeItem('username');
    localStorage.removeItem('access_token');
    localStorage.removeItem('pk');
    this.router.navigate(['/login/']);
  }

}
