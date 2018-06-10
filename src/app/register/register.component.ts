import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
/**
 * Register Component
 *
 * Author: Gustavo Yud
 */
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
 /**
   * Username Field
   */
  public username = '';

  /**
   * Password Field
   */
  public password = '';

  /**
   * Password Field
   */
  public confirmPassword = '';

  /**
   * Email Field
   */
  public email = '';

  /**
   * Visibility Boolean
   */
  public isVisible = false;

  /**
   * Visibility Boolean
   */
  public isConfirmationVisible = false;

  /**
   * message Error
   */
  public messageError: string;

  /**
   * Email Regex
   */
  // tslint:disable-next-line:max-line-length
  public emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
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
  }

  /**
   * Register
   */
  public register(): void {
    const data = {
      'username'  : this.username,
      'email'     : this.email,
      'password'  : this.password,
    };
    this.auth.register(data, (response) => {
      if (response.status === 201) {
        this.router.navigate(['/login/']);
      } else if (response.status === 400) {
        this.messageError = 'Nome de Usuário já cadastrado';
      }
    });
  }
}
