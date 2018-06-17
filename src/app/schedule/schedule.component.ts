import { AuthService } from './../../services/auth.service';
import { UsersService } from './../../services/users.service';
import { Component, OnInit } from '@angular/core';

/**
 * Schedule Component
 *
 * Author: Gustavo Yud
 */
@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {

  /**
   * Date Time Field
   */
  public dateTime = '';

  /**
   * Schedule List
   */
  public scheduleList = [];

  /**
   * Car List
   */
  public carList = [];

  /**
   * Car Primary Key
   */
  public carPk = '';
  /**
   * Destiny Primary Key
   */
  public destinyPk = '';

  /**
   * Destiny List
   */
  public destinyList = [];
  /**
   * Schedule Constructor
   * @param { UsersService } users - User HTTP Service
   * @param { AuthService } auth - Auth HTTP Service
   */
  constructor(
    private users: UsersService,
    private auth: AuthService,
  ) {
    this.auth.signinCheck(() => {});
  }

  /**
   * Intializer
   */
  ngOnInit() {
    this.getScheduleList();
    this.getDestinyList();
    this.getCarList();
  }

  /**
   * Get Destiny List
   */
  public getDestinyList(): void {
    const data = {};
    this.users.getDestinyList((response) => {
      if (response.status === 200) {
        this.destinyList = response.body;
      }
    });
  }

  /**
   * Get Car List
   */
  public getCarList(): void {
    const data = {
      'q' : localStorage.getItem('pk'),
    };
    this.users.getCars(data, (response) => {
      if (response.status === 200) {
        this.carList = response.body;
      }
    });
  }


  /**
   * Get a Schedule List
   */
  public getScheduleList(): void {
    const data = {
      'q' : localStorage.getItem('pk'),
    };
    this.users.getScheduleList(data, (response) => {
      if (response.status === 200) {
        this.scheduleList = response.body;
      }
    });
  }

  /**
   * Delete the Scheduled Object Selected
   *
   * @param { string } pk - Schedule Primary Key
   */
  public deleteSchedule(pk: string): void {
    this.users.deleteSchedule(pk, (response) => {
      if (response.status === 204) {
        this.getScheduleList();
      }
    });
  }

  /**
   * Method to update Schedule Object by a Primary Key
   *
   * @param { string } pk - Schedule Primary Key
   * @param { string } dateTime - Date Time Field
   * @param { number } car_pk - Car Primary Key
   * @param { number } destiny_pk - Destiny Primary Key
   */
  public updateSchedule(pk: string, dateTime: string, car_pk: number, destiny_pk: number): void {
    const data = {
      'dateTime' : dateTime,
      'cars' : Number(car_pk),
      'final_destiny' : Number(destiny_pk),
      'property_user' : localStorage.getItem('pk'),
    };
    this.users.updateSchedule(pk, data, (response) => {
      if (response.status === 200 ) {
        this.getScheduleList();
      }
    } );
  }

  /**
   * Method to schedule a new Carpooling
   */
  public schedule(): void {
    const data = {
      'dateTime' : this.dateTime,
      'cars': this.carPk,
      'final_destiny' : this.destinyPk,
      'property_user' : Number(localStorage.getItem('pk')),
    };
    this.users.createSchedule(data, (response) => {
      if (response.status === 201) {
        this.getScheduleList();
      }
    });
  }
}
