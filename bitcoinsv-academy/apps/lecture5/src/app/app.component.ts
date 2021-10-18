import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';

@Component({
  selector: 'bitcoinsv-academy-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  title = 'Lecture 5';

  navigation = [
      {link: 'features', label: 'bitoinsv-academy-features' }
  ];


  navigationSideMenu = [
      ...this.navigation
  ];

}


