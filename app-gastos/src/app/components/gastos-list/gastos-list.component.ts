import { Component, OnInit } from '@angular/core';
import {Outcome} from "../../model/Outcome";
import {GastosServiceService} from "../../service/gastos-service.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-gastos-list',
  templateUrl: './gastos-list.component.html',
  styleUrls: ['./gastos-list.component.css']
})
export class GastosListComponent implements OnInit {

  outcomes?:Outcome[];

  constructor(private gastosService:GastosServiceService, private route:Router) { }

  ngOnInit(): void {

    this.gastosService.getOutcomes()
      .subscribe( data=>{
          this.outcomes=data;
          console.log(data)},
        error=> {
          console.log(error);
        });

  }

  btnClick(){
    this.route.navigateByUrl('create');
  }



}
