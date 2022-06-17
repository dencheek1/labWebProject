import { Component, OnInit } from '@angular/core';
import { HistoryData } from '../model/historyData';
@Component({
  selector: 'app-stats-page',
  templateUrl: './stats-page.component.html',
  styleUrls: ['./stats-page.component.scss']
})
export class StatsPageComponent implements OnInit {

  title: string[] = ["Завтрак", "Обед", "Ужин",];
  data1: HistoryData[] = [{ name: "Завтрак", carb: 15, fat: 25, kkal: 600, prot: 13 },
  { name: "Дожор", carb: 44, fat: 44, kkal: 25, prot: 12 },
  { name: "Пережор", carb: 55, fat: 33, kkal: 200, prot: 5 },];
  
  data2: HistoryData[] = [{ name: "Обеж", carb: 15, fat: 25, kkal: 0, prot: 13 },
  { name: "Дожор", carb: 44, fat: 44, kkal: 25, prot: 12 },
  { name: "Пережор", carb: 55, fat: 33, kkal: 200, prot: 5 },];
  
  data3: HistoryData[] = [{ name: "Ужин", carb: 15, fat: 25, kkal: 0, prot: 13 },
  { name: "Дожор", carb: 44, fat: 44, kkal: 25, prot: 12 },
  { name: "Пережор", carb: 55, fat: 33, kkal: 0, prot: 5 },];

  constructor() { }

  ngOnInit(): void {
  }

}
