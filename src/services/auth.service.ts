import { Router } from '@angular/router';
import { ClientService } from './client.service';
import { Injectable } from '@angular/core';

/**
 * Auth Service
 *
 * Author: Gustavo Yud
 */
@Injectable()
export class AuthService {
  /**
   * Constructor
   *
   * @param { ClientService } client - HTTP Client Service
   */
  constructor(
    private client: ClientService,
    private router: Router,
  ) { }

  /**
   * Make a login request
   *
   * @param {} params - Data
   * @param { Function } destiny - Function who deal with HTTP Response
   */
  public signin(params: {}, destiny: Function): void {

  this.client.post('/login/', params, (response: any) => {
    destiny(response);
  });
  }

  /**
   * Make a HTTP Check request
   * @param { Function } destiny - Function to deal with HTTP Response
   */
  public signinCheck(destiny: Function): void {
    const params = {};
    this.client.get('/login/check/', params, (response: any) => {
      if (response.status === 200) {
        this.router.navigate(['/dashboard/']);
      } else if (response.status === 401 || response.status === 403) {
        this.router.navigate(['/login/']);
      }
      destiny(response);
    });
  }

  /**
   * Make a HTTP Post Request to register
   *
   * @param params - Data
   * @param { Function } destiny - Function to deal with HTTP Response
   */
  public register(params: {}, destiny: Function): void {
    this.client.post('/register/', params, (response: any) => {
      destiny(response);
    });
  }

}
