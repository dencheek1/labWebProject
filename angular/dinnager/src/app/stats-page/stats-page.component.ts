import { Component, Input, OnInit } from '@angular/core';
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
  data1: HistoryData[] = [{ name: "Завтрак", carb: 15, fat: 25, kkal: 600, prot: 13, water: 0, },
  { name: "Дожор", carb: 44, fat: 44, kkal: 25, prot: 12, water: 0, },
  { name: "Пережор", carb: 55, fat: 33, kkal: 200, prot: 5, water: 0, },];

  data2: HistoryData[] = [{ name: "Обеж", carb: 15, fat: 25, kkal: 0, prot: 13, water: 0, },
  { name: "Дожор", carb: 44, fat: 44, kkal: 25, prot: 12, water: 0, },
  { name: "Пережор", carb: 55, fat: 33, kkal: 200, prot: 5, water: 0, },];

  data3: HistoryData[] = [{ name: "Ужин", carb: 15, fat: 25, kkal: 0, prot: 13, water: 0, },
  { name: "Дожор", carb: 44, fat: 44, kkal: 25, prot: 12, water: 0, },
  { name: "Пережор", carb: 55, fat: 33, kkal: 0, prot: 5, water: 0, },];



  constructor() { }

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
    var date1 = new Date(date);
    var oneJan = new Date(date1.getFullYear(), 0, 1);
    var numberOfDays = Math.floor((date1.getTime() - oneJan.getTime()) / (24 * 60 * 60 * 1000));
    var result = Math.ceil(( numberOfDays) / 7);
    return result;
  }

  ngOnInit(): void {
    console.log(this.date);
    console.log(this.date.getTime());
    this.feelWeek();
  }

  nextWeek() {
    this.date = new Date(this.date.getTime() + (24 * 60 * 60 * 1000 * 7));
    this.feelWeek();
  }

  prevWeek() {
    this.date = new Date(this.date.getTime() - (24 * 60 * 60 * 1000 * 7));
    this.feelWeek();
  }

  feelWeek() {
    this.week = [];
    for (let i = 1; i <= 7; i++) {
      let mil = this.date.getTime() + (i - this.date.getDay()) * (24 * 60 * 60 * 1000);
      this.week.push(new Date(mil));
    }

  }

}
