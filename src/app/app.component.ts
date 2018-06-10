import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';

/**
 * App Component
 *
 * Author: Gustavo Yud
 *
 * Created:
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  /**
   * Username Field
   */
  public username = '';

  /**
   * Password Field
   */
  public password = '';

  /**
   * App Constructor
   * @param { AuthService } auth - Auth HTTP Service
   */
  constructor(
    private auth: AuthService,
  ) {}
  /**
   * Initializer
   */
  ngOnInit() {

  }

  /**
   * Make a login request
   */
  public login(): void {
    const data = {
      'username' : this.username,
      'password' : this.password,
    };
    this.auth.loginCheck(data, (response) => {
      console.log(response);
    });
  }
}
