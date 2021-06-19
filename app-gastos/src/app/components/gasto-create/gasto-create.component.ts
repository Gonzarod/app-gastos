import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {GastosServiceService} from "../../service/gastos-service.service";
import {CreateOutcome} from "../../model/CreateOutcome";

@Component({
  selector: 'app-gasto-create',
  templateUrl: './gasto-create.component.html',
  styleUrls: ['./gasto-create.component.css']
})
export class GastoCreateComponent implements OnInit {

  form: FormGroup;

  constructor(private fb:FormBuilder,private gastoService:GastosServiceService) {
    this.form=this.fb.group({
      amount:[0,Validators.required],
      detail:['Detail',Validators.required]
    })
  }

  ngOnInit(): void {
  }

  create(){
    var newOutcome={amount: this.form.controls['amount'].value, detail: this.form.controls['detail'].value};
    console.log(newOutcome);
    this.gastoService.createGasto(newOutcome);
  }

}
