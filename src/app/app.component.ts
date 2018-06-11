import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';

/**
 * App Component
 *
 * Author: Gustavo Yud
 *
 * Created:
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  /**
   * App Constructor
   * @param { AuthService } auth - Auth HTTP Service
   */
  constructor(
    private auth: AuthService,
  ) {}
  /**
   * Initializer
   */
  ngOnInit() {

  }

}
