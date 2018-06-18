import { UsersService } from './../../services/users.service';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

/**
 * Signup Component
 *
 * Author: Gustavo Yud
 */
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  /**
   * Nome
   */
  public name = '';

  /**
   * RG
   */
  public geralRegister = '';

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
  public federalUnit = '';

  /**
   * Telefone
   */
  public phone = '';

  /**
   * Celular
   */
  public celphone = '';


  /**
   * Constructor
   */
  constructor(
    private auth: AuthService,
    private router: Router,
    private user: UsersService,
  ) { }

  /**
   * Intializer
   */
  ngOnInit() {
  }

  /**
   * Make a Signup request
   */
  public signup(): void {
    const data = {
      'name' : this.name,
      'geral_register' : this.geralRegister,
      'address' : this.address,
      'complement' : this.complement,
      'city': this.city,
      'ZIP' : this.ZIP,
      'neighborhood' : this.neighborhood,
      'federal_unit' : this.federalUnit,
      'phone': this.phone,
      'celphone': this.celphone,
      'user': localStorage.getItem('pk'),
    };
    this.user.createUser(data, (response) => {
      if (response.status === 201) {
        this.router.navigate(['/dashboard/']);
      }
    });
  }
}
