import { Component, Input, OnInit } from '@angular/core';
import { HistoryData } from 'src/model/historyData';

@Component({
  selector: 'app-statistic-diogram-block',
  templateUrl: './statistic-diogram-block.component.html',
  styleUrls: ['./statistic-diogram-block.component.scss']
})
export class StatisticDiogramBlockComponent implements OnInit {

  weightSum: number = 0;
  private _data!: HistoryData;
  @Input() set data(data:HistoryData){
    this._data = data;
    if (this.data != undefined) {
      this.weightSum = this.data.carb + this.data.fat + this.data.prot;
      this.fatPart = this.data.fat / this.weightSum*10;
      this.carbPart = this.data.carb / this.weightSum*10;
      this.protPart = this.data.prot / this.weightSum*10;
      if(isNaN(this.fatPart)) this.fatPart = 0.0;
      if(isNaN(this.carbPart)) this.carbPart = 0.0;
      if(isNaN(this.protPart)) this.protPart = 0.0;
    }
  };

  get data(){return this._data};

  fatPart: number = 0;
  carbPart: number = 0;
  protPart: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
