import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bitcoinsv-academy-example-app-layout',
  templateUrl: './example-app-layout.component.html',
  styleUrls: ['./example-app-layout.component.scss']
})
export class ExampleAppLayoutComponent implements OnInit {

 navigation = [
    { link: '/', label: 'Home' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
