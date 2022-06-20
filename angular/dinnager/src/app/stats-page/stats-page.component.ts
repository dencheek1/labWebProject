import { Component, Input, OnInit } from '@angular/core';
import { HistoryDataDay } from 'src/model/HistoryDataDay';
import { HistoryService } from 'src/services/HistoryService';
import { HistoryData } from '../../model/historyData';
@Component({
  selector: 'app-stats-page',
  templateUrl: './stats-page.component.html',
  styleUrls: ['./stats-page.component.scss']
})
export class StatsPageComponent implements OnInit {

  week: Date[] = [];
  statDiogram: string = "  M 0 330   H 51 L 96 330   H 125 L 180 330  H 205 L 265 330  H 290 L 345 330  H 370 L 425 330  H 450 L 500 330  H 548" ;
  @Input() date: Date = new Date();

  title: string[] = ["Завтрак", "Обед", "Ужин",];
  data1!: HistoryData[];
  data2!: HistoryData[];
  data3!: HistoryData[];

  avgData!:HistoryData;

  data!:HistoryDataDay;

  dataWeekAvg!:HistoryData;

  constructor( private historyService:HistoryService) { }

  getStringDay(date: Date) {
    switch (date.getDay()) {
      case 0: return "Вс";
      case 1: return "Пн";
      case 2: return "Вт";
      case 3: return "Ср";
      case 4: return "Чт";
      case 5: return "Пт";
      case 6: return "Сб";
    }
    return "";
  }

  weekNumber(date: Date) {

    return this.historyService.weekNumber(date);
  }

  ngOnInit(): void {

    this.updateData(new Date())

    this.dataWeekAvg = this.historyService.getAvgForWeek();
    console.log(this.historyService.getSum(this.data1));
    this.historyService.getSumForDay(new Date());
    console.log(this.date);
    console.log(this.date.getTime());
    this.feelWeek();
  }

  nextWeek() {
    this.date = new Date(this.date.getTime() + (24 * 60 * 60 * 1000 * 7));
    this.feelWeek();
    this.updateGraphic();
  }

  prevWeek() {
    this.date = new Date(this.date.getTime() - (24 * 60 * 60 * 1000 * 7));
    this.feelWeek();
    this.updateGraphic();
  }

  feelWeek() {
    this.week = [];
    for (let i = 1; i <= 7; i++) {
      let mil = this.date.getTime() + (i - this.date.getDay()) * (24 * 60 * 60 * 1000);
      this.week.push(new Date(mil));
    }

  }

updateData(date: Date){
  console.log(`update ${date}`)
  this.data = this.historyService.getHistoryForDay(date);
  this.data1 = this.data.data.slice(0,3);
  this.data2 = this.data.data.slice(3,6);
  this.data3 = this.data.data.slice(6,9);
  this.avgData = this.historyService.getSumForDay(date);
}

  selectDay(date:Date){
    this.updateData(date); 
  }

updateGraphic(){
  let weekData = this.week.map(dt =>(this.historyService.getHistoryForDay(dt).data));
  console.log(this.week);
  console.log(weekData);
  let sumDay:HistoryData[] = weekData.map(dt=>this.historyService.getSum(dt));
  let max = Math.max(...sumDay.map(k=>k.kkal));
  let val = sumDay.map(dt =>(320*(1-dt.kkal/max)+5));
  val = val.map(dt =>((dt == undefined) || isNaN(dt) || (dt > 320) ? 320: dt));
  console.log(val);
  this.statDiogram = `  M 0 ${val[0]}   H 51 L 96 ${val[1]}   H 125 L 180 ${val[2]}  H 205 L 265 ${val[3]}  H 290 L 345 ${val[4]}  H 370 L 425 ${val[5]}  H 450 L 500 ${val[6]}  H 548`;
}

}
