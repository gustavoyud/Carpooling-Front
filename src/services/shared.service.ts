import { UsersService } from './users.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  /**
   * List of Cars
   */
  public carList = [];

  /**
   * Shared Constructor
   *
   * @param { UsersService } users - Users HTTP Service
   */
  constructor(
    private users: UsersService,
  ) {
    this.getCarList();
  }


    /**
   * getCarList
   */
  public getCarList(): void {
    const data = {
      'q': localStorage.getItem('pk'),
    };
    this.users.getCars(data, (response) => {
      if (response.status === 200) {
        this.carList = response.body;
      }
    });
  }
}
