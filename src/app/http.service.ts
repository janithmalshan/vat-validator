import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const BASE_URL = 'https://vat.erply.com/numbers?vatNumber=';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  validateVatNumber(vatNumber) {
    return this.http.get(BASE_URL + vatNumber);
  }
}
