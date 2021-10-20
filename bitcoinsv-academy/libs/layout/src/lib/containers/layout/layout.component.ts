import { Component } from '@angular/core';

@Component({
  selector: 'bitcoinsv-academy-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {

 navigation = [
    { link: '/lecture5/number-formats', label: 'Number Formats' },
    { link: '/lecture5/big-numbers', label: 'Big Numbers' },
    { link: '/lecture5/points-and-elliptic-curves', label: 'Points and Elliptic Curves' },
    { link: '/lecture5/hash-functions', label: 'Hash Functions' }
  ];
  navigationSideMenu = [
    ...this.navigation,
    { link: 'settings', label: 'settings' }
  ];


}
