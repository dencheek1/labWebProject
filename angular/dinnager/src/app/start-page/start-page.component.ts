import { Component, OnInit } from '@angular/core';
import { IDinnagerInfo } from '../model/dinnagerInfo';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.scss']
})
export class StartPageComponent implements OnInit {

  logoPath: string = "../../assets/img/logo.png";
  action: string = "";
  constructor() { }

  button(str: string) {
    this.action = str;
    alert(this.action);
  }

  ngOnInit(): void {
  }



}
