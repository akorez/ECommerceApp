import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/common/services/http.service';
import { LoginResponseModel } from '../models/login-response.model';
import { LoginModel } from '../models/login.model';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private _http: HttpService
  ) { }

  login(model:LoginModel, callBack: (res:LoginResponseModel)=> void){
    this._http.post<LoginResponseModel>("auth/login",model,res=>  callBack(res));
  }

//   register(model:RegisterModel, callBack: (res:LoginResponseModel)=> void){
//     this._http.post<LoginResponseModel>("auth/register",model, res=> callBack(res));
//   }
}