import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

/**
 * Sign in Component
 *
 * Author: Gustavo Yud
 */
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  /**
   * Username Field
   */
  public username = '';

  /**
   * Password Field
   */
  public password = '';

  /**
   * Visibility Boolean
   */
  public isVisible = false;

  /**
   * App Constructor
   * @param { AuthService } auth - Auth HTTP Service
   * @param { Router } router - Angular Router
   */
  constructor(
    private auth: AuthService,
    private router: Router
  ) {}

  /**
   * Initializer
   */
  ngOnInit() { }

  /**
   * Make a login request
   */
  public login(): void {
    const data = {
      'username' : this.username,
      'password' : this.password,
    };
    this.auth.loginCheck(data, (response) => {
      if (response.status === 200 ) {
        this.router.navigate(['/dashboard/']);
      }
    });
  }

}
