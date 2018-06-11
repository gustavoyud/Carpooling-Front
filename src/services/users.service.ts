import { ClientService } from './client.service';
import { Injectable } from '@angular/core';
/**
 * Users Service
 *
 * Author: Gustavo Yud
 */
@Injectable()
export class UsersService {
  /**
   * Contructor
   */
  constructor(
    private client: ClientService,
  ) { }

  /**
   * Make a HTTP get request
   *
   * @param params - Data
   * @param { Function } destiny - Function to deal with HTTP Response
   */
  public getUsers(destiny: Function): void {
    const params = {
      'q' : localStorage.getItem('username'),
    };
    this.client.get('/users/', params, (response: any) => {
      destiny(response);
    });
  }

}
