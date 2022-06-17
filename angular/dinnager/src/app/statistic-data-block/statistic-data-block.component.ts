import { Component, Input, OnInit } from '@angular/core';
import { HistoryData } from '../model/historyData';

@Component({
  selector: 'app-statistic-data-block',
  templateUrl: './statistic-data-block.component.html',
  styleUrls: ['./statistic-data-block.component.scss']
})
export class StatisticDataBlockComponent implements OnInit {

  isTable: boolean = true;
  @Input() title!: string;
  @Input() data!: HistoryData[];

  dataSum: HistoryData = { name: "Всего", carb: 0, fat: 0, kkal: 0, prot: 0 };


  constructor() { }
  ngOnInit(): void {
    if (this.data != undefined) {
      this.dataSum = {
        name: "Всего", fat: this.data.reduce((sum, dt) => sum += dt.fat, 0),
        carb: this.data.reduce((sum, dt) => sum += dt.carb, 0),
        prot: this.data.reduce((sum, dt) => sum += dt.prot, 0),
        kkal: this.data.reduce((sum, dt) => sum += dt.kkal, 0),
      };
    }
  }

  selectTable(): void {
    this.isTable = true;
  }
  selectDiogram(): void {
    this.isTable = false;
  }

}
