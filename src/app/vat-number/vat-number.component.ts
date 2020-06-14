import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {HttpService} from '../http.service';
import {error} from 'util';

@Component({
  selector: 'app-vat-number',
  templateUrl: './vat-number.component.html',
  styleUrls: ['./vat-number.component.css']
})
export class VatNumberComponent implements OnInit {

  private vatNumber: number;
  private details: object;
  private searchButtonText: string;
  private errMessage: string;

  constructor(private httpService: HttpService) {
  }

  ngOnInit() {
    this.details = null;
  }

  onSubmit(f: NgForm) {
    this.searchButtonText = 'Searching';
    console.log(f.value);  // { first: '', last: '' }
    this.vatNumber = f.value.vatNumber;
    this.httpService.validateVatNumber(this.vatNumber).subscribe(
      data => {

        this.details = data;  // false
        this.searchButtonText = '';
        console.log(this.details);
      },
      (err) => {
        console.log(err);
        this.searchButtonText = '';
        this.errMessage = '';
      }
    );
  }


}
