import { Component, Input, OnInit } from '@angular/core';
import { HistoryData } from 'src/model/historyData';

@Component({
  selector: 'app-statistics-micro-block',
  templateUrl: './statistics-micro-block.component.html',
  styleUrls: ['./statistics-micro-block.component.scss']
})
export class StatisticsMicroBlockComponent implements OnInit {

  constructor() { }

  waterWidth:number = 15;
  carbWidth:number = 15;
  fatWidth:number = 15;
  protWidth:number = 15;
  kkalWidth:number = 15;
  waterNorm = 2000;
  carbNorm = 400;
  fatNorm = 130;
  protNorm = 100;
  kkalNorm = 2000;

  @Input() data:HistoryData = {name:"",carb:0,fat:0,kkal:0,prot:0,water:0,};

  ngOnInit(): void {
    this.waterWidth = 10 + 90*this.data.water/this.waterNorm;
    this.carbWidth =  10 + 90*this.data.carb/this.carbNorm;
    this.fatWidth =   10 + 90*this.data.fat/this.fatNorm;
    this.protWidth =  10 + 90*this.data.prot/this.protNorm;
    this.kkalWidth =  10 + 90*this.data.kkal/this.kkalNorm;
    if(this.waterWidth > 100) this.waterWidth = 100;
    if(this.carbWidth > 100) this.carbWidth = 100;
    if(this.fatWidth > 100) this.fatWidth = 100;
    if(this.protWidth > 100) this.protWidth = 100;
    if(this.kkalWidth > 100) this.kkalWidth = 100;

  }

}
