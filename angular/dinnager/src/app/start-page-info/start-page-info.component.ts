import { Component, Input, OnInit } from '@angular/core';
import { IDinnagerInfo } from '../model/dinnagerInfo';

@Component({
  selector: 'app-start-page-info',
  templateUrl: './start-page-info.component.html',
  styleUrls: ['./start-page-info.component.scss']
})
export class StartPageInfoComponent implements OnInit {

  @Input() info!:IDinnagerInfo;

  constructor() { }

  ngOnInit(): void {
  }

}
