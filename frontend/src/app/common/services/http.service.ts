import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  api: string = 'http://localhost:5000/api';
  constructor(
    private httpClient: HttpClient,
    private toastrService: ToastrService,
    private spinnerService: NgxSpinnerService
  ) {}

  get<T>(api: string, callBack: (res: T) => void) {
    this.spinnerService.show();
    this.httpClient.get<T>(`${this.api}/${api}`).subscribe({
      next: (res: T) => {
        callBack(res);
        this.spinnerService.hide();
      },
      error: (error: HttpErrorResponse) => {
        this.toastrService.error(error.message);
        this.spinnerService.hide();
      },
    });
  }

  post<T>(api: string, model: any, callBack: (res: T) => void) {
    debugger
    this.spinnerService.show();
    this.httpClient.post<T>(`${this.api}/${api}`, model, {}).subscribe({
      next: (res: T) => {
        callBack(res);
        this.spinnerService.hide();
      },
      error: (error: HttpErrorResponse) => {
        this.toastrService.error(error.message);
        this.spinnerService.hide();
      },
    });
  }
}
