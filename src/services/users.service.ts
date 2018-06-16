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

  /**
   * Method to Get Destiny Data
   *
   * @param { Fuction } destiny - Function to deal with HTTP response
   */
  public getDestinyList(destiny: Function): void {
    const data = {};
    this.client.get('/api/places/destiny/', data, (response) => {
      destiny(response);
    });
  }

  /**
   * Method to Get Destiny Data
   *
   * @param { Fuction } destiny - Function to deal with HTTP response
   */
  public createDestiny(params: {}, destiny: Function): void {
    this.client.post('/api/places/destiny/', params, (response) => {
      destiny(response);
    });
  }


  /**
   * Method to Update Destiny Object
   *
   * @param { string } pk - Destiny Primary Key
   * @param params - Data
   * @param { Function } destiny - Function to deal with HTTP Response
   */
  public updateDestiny(pk: string, params: {} , destiny: Function): void {
    this.client.put('/api/places/destiny/' + pk + '/', params , (response: any) => {
      destiny(response);
    });
  }

    /**
   * Method to Delete Destiny Object
   *
   * @param { string } pk - Destiny Primary Key
   * @param { Function } destiny - Function to deal with HTTP Response
   */
  public deleteDestiny(pk: string, destiny: Function): void {
    const data = {};
    this.client.delete('/api/places/destiny/' + pk + '/' , data, (response: any) => {
      destiny(response);
    });
  }

  /**
   * Method to get a schedule List
   * @param { Object } params - Data
   * @param { Function } destiny - Function to deal with HTTP Response
   */
  public getScheduleList(params: {}, destiny: Function): void {
    this.client.get('/api/user/schedule/get/', params, (response: any) => {
      destiny(response);
    });
  }

  /**
   * Method to Create a new Schedule
   *
   * @param params - Data
   * @param { Function } destiny - Function to deal with HTTP Response
   */
  public createSchedule(params: {}, destiny: Function): void {
    this.client.post('/api/user/schedule/post/', params, (response: any) => {
      destiny(response);
    });
  }


    /**
   * Method to Update Schedule Object
   *
   * @param { string } pk - Schedule Primary Key
   * @param params - Data
   * @param { Function } destiny - Function to deal with HTTP Response
   */
  public updateSchedule(pk: string, params: {} , destiny: Function): void {
    this.client.put('/api/user/schedule/' + pk + '/', params , (response: any) => {
      destiny(response);
    });
  }

    /**
   * Method to Delete Schedule Object
   *
   * @param { string } pk - Schedule Primary Key
   * @param { Function } destiny - Function to deal with HTTP Response
   */
  public deleteSchedule(pk: string, destiny: Function): void {
    const data = {};
    this.client.delete('/api/user/schedule/' + pk + '/' , data, (response: any) => {
      destiny(response);
    });
  }


}
