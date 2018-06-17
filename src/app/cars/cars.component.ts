import { UsersService } from './../../services/users.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

/**
 * Cars Service
 *
 * Author: Gustavo Yud
 */
@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {

  /**
   * Car model
   */
  public model = '';

  /**
   * License Plate
   */
  public license_plate = '';

  /**
   * Car Color
   */
  public color = '';

  /**
   * Car Capacity
   */
  public capacity = '';

  /**
   * Car list
   */
  public carList = [];

  /**
   * User Primary Key
   */
  public userPk: string;

  /***
   * User Name
   */
  public userName = '';

  /**
   * Constructor
   */
  constructor(
    private users: UsersService,
    private auth: AuthService,
  ) { }

  /**
   * Initializer
   */
  ngOnInit() {
    this.auth.signinCheck((response) => { });
    this.userPk = localStorage.getItem('pk');
    this.getCar();
  }

  /**
   * Create a new Car
   */
  public createCar(): void {
    const data = {
      'model': this.model,
      'license_plate' : this.license_plate,
      'color' : this.color,
      'capacity' : this.capacity,
      'user' : this.userPk,
    };
    this.users.createCars(data, (response) => {
      if (response.status === 201) {
        this.getCar();
      }
    });
  }

  /**
   * Get user car List
   */
  public getCar(): void {
    const data = {
      'q': this.userPk,
    };
    this.users.getCars(data, (response) => {
      if (response.status === 200) {
        this.carList = response.body;
      }
    });
  }

  /**
   * Update Car Object
   *
   * @param { string } pk - Car Primary Key
   * @param { string } model - Car Model
   * @param { string } license_plate - Car license Plate
   * @param { string } color - Car Color
   * @param { number } capacity - Car Capacity
   */
  public updateCar(pk: string, model: string, license_plate: string, color: string, capacity): void {
    const data = {
      'model': model,
      'license_plate' : license_plate,
      'color': color,
      'capacity': capacity,
      'user' : this.userPk,
    };
    this.users.updateCar(pk, data, (response) => {
      if (response.status === 200) {
        this.getCar();
      }
    });
  }

  /**
   * Detele car Object
   *
   * @param { string } pk - Car Primary Key
   */
  public deleteCar(pk: string): void {
    const data = {};
    this.users.deleteCar(pk, data, (response) => {
      if (response.status === 204) {
        this.getCar();
      }
    });
  }

  public log(str: string): void {
    console.log(str);
  }
}
