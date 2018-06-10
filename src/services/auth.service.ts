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
    private client: ClientService
  ) { }

  /**
   * Make a login check request
   *
   * @param {} params - Data
   * @param { Function } destiny - Function who deal with HTTP Response
   */
  public loginCheck(params: {}, destiny: Function): void {

  this.client.post('/login/', params, (response: any) => {
    destiny(response);
  });
  }

}
