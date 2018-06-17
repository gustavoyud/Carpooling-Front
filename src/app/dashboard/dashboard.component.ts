import { UsersService } from './../../services/users.service';
import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';

/**
 * Dashboard Component
 *
 * Author: Gustavo Yud
 */
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  /**
   * User Name
   */
  public name = '';

  /**
   * Schedule List
   */
  public scheduleList = [];

  /**
   * User Primary Key
   */
  public userPk: number;

  /**
   * Response Message
   */
  public responseMessage: string;

  /**
   * Boolean List
   */
  public scheduledList: boolean[] = [];

  /**
   * Dashboard Constructor
   *
   * @param { Router } - Angular Router
   * @param { AuthService } - HTTP Auth Service
   */
  constructor(
    private router: Router,
    private auth: AuthService,
    private users: UsersService,
    public snackBar: MatSnackBar,
  ) {
    this.userPk = Number(localStorage.getItem('pk'));
  }

  /**
   * Initializer
   */
  ngOnInit() {
    this.auth.signinCheck((response) => { });
    this.users.getUsers((response) => {
      if (response.status === 200) {
        if (!response.body[0]) {
          this.router.navigate(['/signup/']);
        } else {
          this.name = response.body[0].name;
        }
      }
    });
    this.getScheduleList();
  }

  /**
   * Method to get schedule List
   */
  public getScheduleList(): void {
    const data = {
      'user_id': localStorage.getItem('pk'),
    };
    this.users.getScheduleList(data, (response: any) => {
      if (response.status === 200) {
        this.scheduleList = response.body;

        for (let i = 0; i < this.scheduleList.length; i++) {
          const params = {
            'user_id' : localStorage.getItem('pk'),
            'schedule_id' : this.scheduleList[i].schedule_pk,
          };
          this.users.scheduleCheck(params, (rsp) => {
            if (rsp.status === 200) {
              this.scheduledList[i] = true;
            }
          });
        }
      }
    });
  }

  /**
   * Method to Schedule a Carpooling
   *
   * @param { string } pk - Schedule Primary Key
   */
  public carpoolingSchedule(pk: any, i: number): void {
    const data = {
      'schedule_id' : pk,
      'user_id': localStorage.getItem('pk'),
    };
    this.users.schedule(data, (response: any) => {
      if (response.status === 201) {
        this.openSnackBar('Agendado com Sucesso', 'Sair');
        this.getScheduleList();
        this.scheduledList[i] = true;
      } else if (response.status === 400 ) {
        this.openSnackBar(response.error['non_field_errors'][0], 'Sair');
      }
    });
  }

    /**
   * Method to verify
   *
   * @param { string } pk - schedule Primary Key
   */
  public isScheduled(pk: string, i: number): void {
    const data = {
      'user_id' : localStorage.getItem('pk'),
      'schedule_id': pk,
    };
    this.users.scheduleCheck(data, (response) => {
      if (response.status === 200) {
        this.unschedule(response.body['pk'], i);
      }
    });
  }

  /**
   * Method to unschedule a Carpooling
   *
   * @param { string } pk - Schedule Primary Key
   */
  public unschedule(pk: string, i: number): void {
    this.users.unschedule(pk, (response) => {
      if (response.status === 204) {
        this.openSnackBar('Desmarcado com sucesso', 'Sair');
        this.scheduledList[i] = false;
        this.getScheduleList();
      }
    });
  }
  /**
   * logout Method
   */
  public logout(): void {
    localStorage.removeItem('username');
    localStorage.removeItem('access_token');
    localStorage.removeItem('pk');
    this.router.navigate(['/login/']);
  }

  /**
   * Method to Open a Material Snack Bar
   *
   * @param { string } message - Message that will be displayed
   * @param { string } action - Action Message
   */
  public openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  public dateTimeString(value: string, choise: string): string {
    const date = value.split('T')[0];
    const time = value.split('T')[1];

    if (choise === 'date') {
      return date.split('-')[2] + '/' + date.split('-')[1] + '/' + date.split('-')[0];
    }
    if ( choise === 'time') {
      return time.split(':')[0] + ':' + time.split(':')[1];
    }
  }

}
