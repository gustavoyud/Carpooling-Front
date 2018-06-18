import { SharedService } from './../../services/shared.service';
import { UsersService } from './../../services/users.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

/**
 * Menu Component
 *
 * Author: Gustavo Yud
 */
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  /**
   * User Name
   */
  public name = '';

  /**
   * Car List
   */
  public carList = [];

  /**
   * Menu Constructor
   * @param { Router } router - Angular Router
   */
  constructor(
    private users: UsersService,
    public router: Router,
    public shared: SharedService,
  ) { }

  /**
   * Initializer
   */
  ngOnInit() {
    this.getUserName();
  }


  /**
   * get user Name
   */
  public getUserName(): void {
    this.users.getUsers((response) => {
      if (response.status === 200) {
        if (!response.body[0]) {
          this.router.navigate(['/signup/']);
        } else {
          this.name = response.body[0].name;
        }
      }
    });
  }

  /**
   * logout Method
   */
  public logout(): void {
    localStorage.removeItem('username');
    localStorage.removeItem('access_token');
    localStorage.removeItem('pk');
    this.router.navigate(['/login/']);
  }

}
