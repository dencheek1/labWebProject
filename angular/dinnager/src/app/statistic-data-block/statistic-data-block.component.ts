import { Component, Input, OnInit } from '@angular/core';
import { HistoryService } from 'src/services/HistoryService';
import { HistoryData } from '../../model/historyData';

@Component({
  selector: 'app-statistic-data-block',
  templateUrl: './statistic-data-block.component.html',
  styleUrls: ['./statistic-data-block.component.scss']
})
export class StatisticDataBlockComponent implements OnInit {

  private _data!: HistoryData[];

  isTable: boolean = true;
  @Input() title!: string;
  @Input() set data(data: HistoryData[]){
    this._data = data;
    if (this.data != undefined) {
      this.dataSum = this.historyService.getSum(this.data);
      this.dataSum.name = "Всего";

      let items = this.data.map(d=>d.kkal).filter(val=> !isNaN(val));
      this.maxKkal = Math.max(...items);
    }
  }

  get data(){
    return this._data;
  }

  dataSum: HistoryData = { name: "Всего", carb: 0, fat: 0, kkal: 0, prot: 0,water:0, };
  maxKkal:number = 0;

  constructor(private historyService:HistoryService) { }
  ngOnInit(): void {

  }

  selectTable(): void {
    this.isTable = true;
  }
  selectDiogram(): void {
    this.isTable = false;
  }

  getColor(data:HistoryData):string{

    // if(data.kkal < 50 || data.kkal > 800) return "#f14150";
    // if(data.kkal < 200 || data.kkal > 400) return "#f5f557";
    return "#68d97b"
  }

}
