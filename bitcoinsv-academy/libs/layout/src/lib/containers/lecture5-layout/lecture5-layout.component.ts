import { Component } from '@angular/core';

@Component({
  selector: 'bitcoinsv-academy-lecture5-layout',
  templateUrl: './lecture5-layout.component.html',
  styleUrls: ['./lecture5-layout.component.scss']
})
export class Lecture5LayoutComponent {

 navigation = [
    { link: '/lecture5/number-formats', label: 'Number Formats' },
    { link: '/lecture5/big-numbers', label: 'Big Numbers' },
    { link: '/lecture5/points-and-elliptic-curves', label: 'Points and Elliptic Curves' },
    { link: '/lecture5/hash-functions', label: 'Hash Functions' }
  ];

}
