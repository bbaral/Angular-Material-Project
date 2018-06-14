import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bikramgrid-practice',
  templateUrl: './bikramgrid-practice.component.html',
  styleUrls: ['./bikramgrid-practice.component.css']
})
export class BikramgridPracticeComponent implements OnInit {

  Disputes = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];
  constructor() { }

  ngOnInit() {
  }

}
