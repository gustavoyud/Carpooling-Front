import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { UsersService } from './../../services/users.service';
import { Component, OnInit } from '@angular/core';

/**
 * Profile Component
 *
 * Author: Gustavo Yud
 */
@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  /**
   * User Config
   */
  public userInfo = [];

  /**
   * Nome
   */
  public name = '';

  /**
   * RG
   */
  public geral_register = '';

  /**
   * Endereço
   */
  public address = '';

  /**
   * Complemento
   */
  public complement = '';

  /**
   * CEP
   */
  public ZIP = '';

  /**
   * Bairro
   */
  public neighborhood = '';

  /**
   * Cidade
   */
  public city = '';

  /**
   * UF
   */
  public federal_unit = '';

  /**
   * Telefone
   */
  public phone = '';

  /**
   * Celular
   */
  public celphone = '';

  /**
   * Settings Constructor
   *
   * @param { UsersService } users - Users HTTP Service
   * @param { Router } router - Angular Router
   */
  constructor(
    private users: UsersService,
    private router: Router,
    public snackBar: MatSnackBar,
  ) { }

  /**
   * Initializer
   */
  ngOnInit() {
    this.getUserInfo();
  }

  /**
   * get user Info
   */
  public getUserInfo(): void {
    this.users.getUsers((response) => {
      if (response.status === 200) {
        if (!response.body[0]) {
          this.router.navigate(['/signup/']);
        } else {
          this.userInfo = response.body;
          this.name = this.userInfo[0].name;
          this.geral_register = this.userInfo[0].geral_register,
          this.address = this.userInfo[0].address;
          this.complement = this.userInfo[0].complement;
          this.ZIP = this.userInfo[0].ZIP;
          this.neighborhood = this.userInfo[0].neighborhood;
          this.city = this.userInfo[0].city;
          this.federal_unit = this.userInfo[0].federal_unit;
          this.phone = this.userInfo[0].phone;
          this.celphone = this.userInfo[0].celphone;
        }
      }
    });
  }

  /**
   * Method to Update User Information
   */
  public updateUser(): void {
    const data = {
      'name' : this.name,
      'geral_register' : this.geral_register,
      'address' : this.address,
      'complement': this.complement,
      'ZIP' : this.ZIP,
      'neighborhood': this.neighborhood,
      'city': this.city,
      'federal_unit' : this.federal_unit,
      'phone': this.phone,
      'celphone': this.celphone,
      'user': localStorage.getItem('pk'),
    };
    this.users.updateUser(this.userInfo[0].user_pk, data, (response) => {
      if (response.status === 200) {
        this.openSnackBar('Atualizado Com Sucesso', 'Sair');
      } else if (response.status === 400 ) {
        this.openSnackBar('Ocorreu um erro', 'Sair');
      }
    });
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
}
