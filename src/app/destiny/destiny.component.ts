import { UsersService } from './../../services/users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-destiny',
  templateUrl: './destiny.component.html',
  styleUrls: ['./destiny.component.scss']
})
export class DestinyComponent implements OnInit {

  /**
   * Destiny
   */
  public address = '';

  /**
   * Complement
   */
  public complement = '';

  /**
   * ZIP
   */
  public zipCode = '';

  /**
   * Neighborhood
   */
  public neighborhood = '';

  /**
   * City
   */
  public city = '';

  /**
   * Federal Unit
   */
  public federal_unit = '';

  /**
   * Phone
   */
  public phone = '';

  /**
   * Destiny List
   */
  public destinyList = [];

  /**
   * Destiny Constructor
   *
   * @param { UsersService } users - Users HTTP Service
   */
  constructor(
    private users: UsersService,
  ) { }

  /**
   * Initializer
   */
  ngOnInit() {
    this.getDestinyList();
  }

  /**
   * Get Destiny List
   */
  public getDestinyList(): void {
    this.users.getDestinyList((response) => {
      if (response.status === 200) {
        this.destinyList = response.body;
      }
    });
  }

  /**
   * Create a New Destiny Object
   */
  public createDestiny(): void {
    const data = {
      'address' : this.address,
      'complement' : this.complement,
      'zip' : this.zipCode,
      'neighborhood' : this.neighborhood,
      'city' : this.city,
      'federal_unit' : this.federal_unit,
      'phone' : this.phone,
    };
    this.users.createDestiny(data, (response) => {
      if (response.status === 201) {
        this.getDestinyList();
      }
    });
  }

  /**
   * Delete A destiny Object
   *
   * @param { string } pk - Destiny Primary Key
   */
  public deleteDestiny(pk: string ): void {
    this.users.deleteDestiny(pk, (response) => {
      if (response.status === 204) {
        this.getDestinyList();
      }
    });
  }

  /**
   * Update a destiny Object
   *
   */
  public updateDestiny(
    pk: string,
    address: string,
    complement: string,
    zip: number,
    neighborhood: string,
    city: string,
    federal_unit: string,
    phone: number): void {
    const data = {
      'address': address,
      'complement': complement,
      'zip' : zip,
      'neighborhood' : neighborhood,
      'city' : city,
      'federal_unit': federal_unit,
      'phone': phone
    };
    this.users.updateDestiny(pk, data, (response) => {
      if (response.status === 200) {
        this.getDestinyList();
      }
    });
  }
}
