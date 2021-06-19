import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Outcome} from "../model/Outcome";

@Injectable({
  providedIn: 'root'
})
export class GastosServiceService {

  Url='https://app-saver-api.herokuapp.com/outcomes';

  constructor(private http: HttpClient) { }

  getOutcomes(){
    return this.http.get<Outcome[]>(this.Url);
  }

  createGasto(newOutcome: { amount: any; detail: any }) {
    return this.http.post(this.Url,newOutcome);
  }
}
