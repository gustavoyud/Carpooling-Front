import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponseBase, HttpResponse, HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class ClientService {
  /**
   * API URL
   */
  public API_URL = 'http://localhost:8000';

  /**
   * Client service constructor
   *
   * @param { HttpClient } http - Angular HTTP Client service
   */
  constructor(
    private http: HttpClient,
  ) { }

  /**
   * Remove keys without data from a request
   *
   * @param { any } dictionary - Request data
   *
   * @returns { any } - Clened data
   */
  private clearRequest(dictionary: any): any {
    const cleaned = {};

    for (const key in dictionary) {
      if (
        (dictionary[key] !== undefined) &&
        (dictionary[key] !== null) &&
        (dictionary[key] !== '')
      ) {
        cleaned[key] = dictionary[key];
      }
    }

    return cleaned;
  }

  /**
   * HTTP POST method
   *
   * @param url - API route
   * @param data - data dictionary
   * @param destiny - Function to deal with HTTP response
   */
  public post(url: string, data: {}, destiny: Function): void {
    let token = '';

    if (localStorage.getItem('access_token')) {
      token = localStorage.getItem('access_token');
    }

    const httpHeaders = new HttpHeaders({
      'Authorization': token
    });

    this.http.post(this.API_URL + url, this.clearRequest(data), {
      headers: httpHeaders,
      observe: 'response'
    })
    .subscribe(
      (response: any) => {
        if (response.body['token']) {
          localStorage.setItem('access_token', 'Token ' + response.body['token']);
        }
        destiny(response);
      },
      (error: HttpResponseBase) => {
        if (error.headers['Authorization']) {
          localStorage.setItem('access_token', error.headers['Authorization']);
        }
        destiny(error);
      }
    );
  }

  /**
   * HTTP POST for Uploads method
   *
   * @param url - API route
   * @param data - data dictionary
   * @param destiny - Function to deal with HTTP response
   */
  public postUpload(url: string, data: any, destiny: Function): void {
    let token = '';

    if (localStorage.getItem('access_token')) {
      token = localStorage.getItem('access_token');
    }

    const httpHeaders = new HttpHeaders({
      'Authorization': token
    });

    this.http.post(this.API_URL + url, data, {
      headers: httpHeaders,
      observe: 'response'
    })
      .subscribe(
        (response: HttpResponseBase) => {
          if (response.headers.get('Authorization')) {
            localStorage.setItem('access_token', response.headers.get('Authorization'));
          }
          destiny(response);
        },
        (error: HttpResponseBase) => {
          if (error.headers['Authorization']) {
            localStorage.setItem('access_token', error.headers['Authorization']);
          }
          destiny(error);
        }
      );
  }

  /**
   * HTTP PUT method
   *
   * @param url - API route
   * @param data - data dictionary
   * @param destiny - Function to deal with HTTP response
   */
  public put(url: string, data: {}, destiny: Function): void {
    let token = '';

    if (localStorage.getItem('access_token')) {
      token = localStorage.getItem('access_token');
    }

    const httpHeaders = new HttpHeaders({
      'Authorization': token
    });

    this.http.put(this.API_URL + url, this.clearRequest(data), {
      headers: httpHeaders,
      observe: 'response'
    })
    .subscribe(
      (response: HttpResponseBase) => {
        if (response.headers.get('Authorization')) {
          localStorage.setItem('access_token', response.headers.get('Authorization'));
        }
        destiny(response);
      },
      (error: HttpResponseBase) => {
        if (error.headers['Authorization']) {
          localStorage.setItem('access_token', error.headers['Authorization']);
        }
        destiny(error);
      }
    );
  }

  /**
   * HTTP GET method
   *
   * @param url - API route
   * @param params - params dictionary
   * @param destiny - Function to deal with HTTP response
   */
  public get(url: string, params: {}, destiny: Function): void {
    let token = '';

    if (localStorage.getItem('access_token')) {
      token = localStorage.getItem('access_token');
    }

    const httpHeaders = new HttpHeaders({
      'Authorization': token
    });

    this.http.get(this.API_URL + url, {
      headers: httpHeaders,
      params: this.clearRequest(params),
      observe: 'response'
    })
    .subscribe(
      (response: HttpResponseBase) => {
        if (response.headers.get('Authorization')) {
          localStorage.setItem('access_token', response.headers.get('Authorization'));
        }
        destiny(response);
      },
      (error: HttpResponseBase) => {
        if (error.headers['Authorization']) {
          localStorage.setItem('access_token', error.headers['Authorization']);
        }
        destiny(error);
      }
    );
  }

  /**
   * HTTP DELETE method
   *
   * @param url - API route
   * @param params - params dictionary
   * @param destiny - Function to deal with HTTP response
   */
  public delete(url: string, params: {}, destiny: Function): void {
    let token = '';

    if (localStorage.getItem('access_token')) {
      token = localStorage.getItem('access_token');
    }

    const httpHeaders = new HttpHeaders({
      'Authorization': token
    });

    this.http.delete(this.API_URL + url, {
      headers: httpHeaders,
      params: this.clearRequest(params),
      observe: 'response'
    },
    )
      .subscribe(
        (response: HttpResponseBase) => {
          if (response.headers.get('Authorization')) {
            localStorage.setItem('access_token', response.headers.get('Authorization'));
          }
          destiny(response);
        },
        (error: HttpResponseBase) => {
          if (error.headers['Authorization']) {
            localStorage.setItem('access_token', error.headers['Authorization']);
          }
          destiny(error);
        }
      );
  }

}
