import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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
   * message Error
   */
  public messageError: string;

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
  ngOnInit() {
    this.auth.signinCheck((response) => { });
  }

  /**
   * Make a login request
   */
  public login(): void {
    const data = {
      'username' : this.username,
      'password' : this.password,
    };
    this.auth.signin(data, (response) => {
      if (response.status === 200 ) {
        this.router.navigate(['/dashboard/']);
      }
      if (response.status === 400) {
        this.messageError = 'Email ou senha Incorretos';
      }
    });
  }

}
