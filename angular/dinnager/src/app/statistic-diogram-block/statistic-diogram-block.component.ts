import { Component, Input, OnInit } from '@angular/core';
import { HistoryData } from 'src/model/historyData';

@Component({
  selector: 'app-statistic-diogram-block',
  templateUrl: './statistic-diogram-block.component.html',
  styleUrls: ['./statistic-diogram-block.component.scss']
})
export class StatisticDiogramBlockComponent implements OnInit {

  weightSum:number = 0;
  @Input() data!:HistoryData;

  constructor() { }

  ngOnInit(): void {
    if(this.data != undefined) this.weightSum = this.data.carb + this.data.fat + this.data.prot;
  }

}
