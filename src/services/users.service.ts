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

  /**
   * Create a new user
   *
   * @param params - Data
   * @param { Function } destiny - Function to deal with HTTP Response
   */
  public createUser(params: {}, destiny: Function): void {
    this.client.post('/users/', params, (response: any) => {
      destiny(response);
    });
  }

  /**
   * Create a new Car
   *
   * @param params - Data
   * @param { Function } destiny - Function to deal with HTTP Response
   */
  public createCars(params: {}, destiny: Function): void {
    this.client.post('/api/cars/', params, (response: any) => {
      destiny(response);
    });
  }

  /**
   * Get the car List
   *
   * @param params - Data
   * @param { Function } destiny - Function to deal with HTTP Response
   */
  public getCars(params: {}, destiny: Function): void {
    this.client.get('/api/cars/', params, (response: any) => {
      destiny(response);
    });
  }

  /**
   * Method to update Car Model
   *
   * @param { string } pk - Car Primary Key
   * @param params - Params
   * @param { Function } destiny - Funtion to deal with HTTP Response
   */
  public updateCar(pk: string, params: {}, destiny: Function): void {
    this.client.put('/api/cars/' + pk + '/', params, (response: any) => {
      destiny(response);
    });
  }

  /**
   * Method to delete Car Model
   *
   * @param { string } pk - Car Primary Key
   * @param params - Params
   * @param { Function } destiny - Funtion to deal with HTTP Response
   */
  public deleteCar(pk: string, params: {}, destiny: Function): void {
    this.client.delete('/api/cars/' + pk + '/', params, (response: any) => {
      destiny(response);
    });
  }

}
