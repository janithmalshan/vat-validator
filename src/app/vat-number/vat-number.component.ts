import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {HttpService} from '../http.service';
import {VatNumber} from './vatNumber';

@Component({
  selector: 'app-vat-number',
  templateUrl: './vat-number.component.html',
  styleUrls: ['./vat-number.component.css']
})
export class VatNumberComponent implements OnInit {

  private details: VatNumber;
  private isSearching: boolean;
  private isError: boolean;
  private errorMessage: string;

  constructor(private httpService: HttpService) {
  }

  ngOnInit() {
  }

  onSubmit(f: NgForm) {
    this.isSearching = true;
    this.isError = false;
    this.httpService.validateVatNumber(f.value.vatNumber).subscribe(
      data => {
        this.details = data;
        /** Check vat number validity */
        if (!this.details.Valid) {
          this.errorMessage = 'Invalid VAT Number';
          this.details = null;
          this.isError = true;
        }
        this.isSearching = false;
      },
      /** Error handling */
      (err) => {
        this.details = null;
        this.isSearching = false;
        this.isError = true;
        this.errorMessage = 'Something went wrong';
      }
    );
  }
}
